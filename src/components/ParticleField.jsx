import { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

const DESKTOP_COUNT = 120
const MOBILE_COUNT = 70
const CONNECTION_DIST = 3.6

function Network({ count }) {
  const groupRef = useRef()
  const mouseRef = useRef({ x: 0, y: 0 })
  const lerpedRot = useRef({ x: 0, y: 0 })

  // Track mouse position — normalized to [-0.5, 0.5]
  useEffect(() => {
    const handler = (e) => {
      mouseRef.current.x = e.clientX / window.innerWidth - 0.5
      mouseRef.current.y = e.clientY / window.innerHeight - 0.5
    }
    window.addEventListener('mousemove', handler, { passive: true })
    return () => window.removeEventListener('mousemove', handler)
  }, [])

  // Generate particle positions and precompute line segments — runs once on mount
  const { pts, lineArr } = useMemo(() => {
    const raw = []
    for (let i = 0; i < count; i++) {
      raw.push(
        (Math.random() - 0.5) * 22,
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 8,
      )
    }

    const lines = []
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = raw[i * 3] - raw[j * 3]
        const dy = raw[i * 3 + 1] - raw[j * 3 + 1]
        const dz = raw[i * 3 + 2] - raw[j * 3 + 2]
        if (dx * dx + dy * dy + dz * dz < CONNECTION_DIST * CONNECTION_DIST) {
          lines.push(
            raw[i * 3], raw[i * 3 + 1], raw[i * 3 + 2],
            raw[j * 3], raw[j * 3 + 1], raw[j * 3 + 2],
          )
        }
      }
    }

    return {
      pts: new Float32Array(raw),
      lineArr: new Float32Array(lines),
    }
  }, [count])

  useFrame(({ clock }) => {
    if (!groupRef.current) return
    const t = clock.elapsedTime

    // Slow idle drift
    const idleY = t * 0.022
    const idleX = t * 0.008

    // Lerp toward mouse-driven offset — max ±0.18 rad (~10°) on Y, ±0.12 on X
    lerpedRot.current.y += (mouseRef.current.x * 0.36 - lerpedRot.current.y) * 0.03
    lerpedRot.current.x += (-mouseRef.current.y * 0.24 - lerpedRot.current.x) * 0.03

    groupRef.current.rotation.y = idleY + lerpedRot.current.y
    groupRef.current.rotation.x = idleX + lerpedRot.current.x
  })

  return (
    <group ref={groupRef}>
      {/* Dots */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={pts}
            count={count}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#38bdf8"
          size={0.07}
          transparent
          opacity={0.7}
          sizeAttenuation
        />
      </points>

      {/* Connection lines */}
      {lineArr.length > 0 && (
        <lineSegments>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              array={lineArr}
              count={lineArr.length / 3}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#38bdf8" transparent opacity={0.1} />
        </lineSegments>
      )}
    </group>
  )
}

export default function ParticleField() {
  const [webglOk, setWebglOk] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // WebGL support check
    try {
      const canvas = document.createElement('canvas')
      if (!canvas.getContext('webgl') && !canvas.getContext('experimental-webgl')) {
        setWebglOk(false)
      }
    } catch {
      setWebglOk(false)
    }
    setIsMobile(window.innerWidth < 768)
  }, [])

  if (!webglOk) return null

  return (
    <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 55 }}
        gl={{ antialias: false, alpha: true, powerPreference: 'low-power' }}
        dpr={[1, 1.5]}
        style={{ background: 'transparent' }}
      >
        <Network count={isMobile ? MOBILE_COUNT : DESKTOP_COUNT} />
      </Canvas>
    </div>
  )
}
