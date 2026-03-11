import { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

const DESKTOP_COUNT = 120
const MOBILE_COUNT = 70
const CONNECTION_DIST = 3.6

function Network({ count }) {
  const groupRef = useRef()

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

  // Very slow rotation — just enough to feel alive, not enough to distract
  useFrame(({ clock }) => {
    if (!groupRef.current) return
    const t = clock.elapsedTime
    groupRef.current.rotation.y = t * 0.022
    groupRef.current.rotation.x = t * 0.008
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
