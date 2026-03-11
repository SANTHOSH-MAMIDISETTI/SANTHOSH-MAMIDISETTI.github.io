import { useRef, useMemo, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'

const DESKTOP_COUNT = 100
const MOBILE_COUNT = 50
const CONNECTION_DIST = 3.6

function Network({ count }) {
  const groupRef = useRef()
  const mouseRef = useRef({ x: 0, y: 0 })
  const lerpedRot = useRef({ x: 0, y: 0 })
  const scrollRef = useRef(0)

  useEffect(() => {
    const onMouse = (e) => {
      mouseRef.current.x = e.clientX / window.innerWidth - 0.5
      mouseRef.current.y = e.clientY / window.innerHeight - 0.5
    }
    const onScroll = () => { scrollRef.current = window.scrollY }
    window.addEventListener('mousemove', onMouse, { passive: true })
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMouse)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const { pts, lineArr } = useMemo(() => {
    const raw = []
    for (let i = 0; i < count; i++) {
      raw.push(
        (Math.random() - 0.5) * 24,
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 10,
      )
    }
    const lines = []
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = raw[i * 3] - raw[j * 3]
        const dy = raw[i * 3 + 1] - raw[j * 3 + 1]
        const dz = raw[i * 3 + 2] - raw[j * 3 + 2]
        if (dx * dx + dy * dy + dz * dz < CONNECTION_DIST * CONNECTION_DIST) {
          lines.push(raw[i * 3], raw[i * 3 + 1], raw[i * 3 + 2])
          lines.push(raw[j * 3], raw[j * 3 + 1], raw[j * 3 + 2])
        }
      }
    }
    return { pts: new Float32Array(raw), lineArr: new Float32Array(lines) }
  }, [count])

  useFrame(({ clock }) => {
    if (!groupRef.current) return
    const t = clock.elapsedTime
    const vh = typeof window !== 'undefined' ? window.innerHeight : 800

    // Slow idle drift
    const idleY = t * 0.018
    const idleX = t * 0.007

    // Mouse parallax — smooth lerp, max ~10° Y / ~7° X
    lerpedRot.current.y += (mouseRef.current.x * 0.32 - lerpedRot.current.y) * 0.025
    lerpedRot.current.x += (-mouseRef.current.y * 0.22 - lerpedRot.current.x) * 0.025

    // Scroll depth — network gently recedes as you go deeper
    const depth = scrollRef.current / vh
    groupRef.current.position.z = -depth * 0.6

    groupRef.current.rotation.y = idleY + lerpedRot.current.y
    groupRef.current.rotation.x = idleX + lerpedRot.current.x
  })

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={pts}
            count={count}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial color="#38bdf8" size={0.07} transparent opacity={0.65} sizeAttenuation />
      </points>

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
          <lineBasicMaterial color="#38bdf8" transparent opacity={0.09} />
        </lineSegments>
      )}
    </group>
  )
}

export default function GlobalScene() {
  const [webglOk, setWebglOk] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const { scrollY } = useScroll()

  // Hero = full presence; rest of site = ambient background (0.22)
  const opacity = useTransform(scrollY, (y) => {
    const vh = typeof window !== 'undefined' ? window.innerHeight : 800
    const fadeStart = vh * 0.25
    const fadeEnd = vh * 0.75
    if (y <= fadeStart) return 1
    if (y >= fadeEnd) return 0.22
    return 1 - ((y - fadeStart) / (fadeEnd - fadeStart)) * 0.78
  })

  useEffect(() => {
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
    <motion.div
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
      style={{ opacity }}
    >
      <Canvas
        camera={{ position: [0, 0, 12], fov: 55 }}
        gl={{ antialias: false, alpha: true, powerPreference: 'low-power' }}
        dpr={[1, 1.5]}
        style={{ background: 'transparent' }}
      >
        <Network count={isMobile ? MOBILE_COUNT : DESKTOP_COUNT} />
      </Canvas>
    </motion.div>
  )
}
