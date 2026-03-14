'use client'

import { useRef, useState } from 'react'
import { Text, Html } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { ProjectNode } from './UniverseCanvas'

export function SpatialNode({ node }: { node: ProjectNode }) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <group position={node.position}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[0.8, 64, 64]} />
        <meshStandardMaterial 
          color={hovered ? "#2244ff" : "#0a0a0a"} 
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>

      {/* Light Connection Effect (Visual only for now) */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.85, 32, 32]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.05} wireframe />
      </mesh>

      <Text
        position={[0, 1.5, 0]}
        fontSize={0.2}
        color="white"
        font="/fonts/Geist-Medium.woff" // Assuming default Next.js Geist font
        anchorX="center"
        anchorY="middle"
      >
        {node.title}
      </Text>

      {hovered && (
        <Html distanceFactor={10}>
          <div className="bg-black/80 backdrop-blur-md border border-white/10 p-4 rounded-lg w-48 pointer-events-none">
            <p className="text-[10px] text-blue-400 uppercase tracking-widest mb-1">{node.category}</p>
            <h3 className="text-white text-xs font-medium uppercase">{node.title}</h3>
            <div className="mt-2 h-[1px] bg-white/20 w-full" />
            <p className="text-[10px] text-white/40 mt-2 italic leading-relaxed">
              Spatial architectural node finalized and operational.
            </p>
          </div>
        </Html>
      )}
    </group>
  )
}
