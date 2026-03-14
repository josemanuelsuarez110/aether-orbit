'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars, Float, PerspectiveCamera } from '@react-three/drei'
import { Suspense, useState, useEffect } from 'react'
import { SpatialNode } from './SpatialNode'
import { supabase } from '@/lib/supabase'

export interface ProjectNode {
  id: string
  title: string
  category: string
  position: [number, number, number]
}

export default function UniverseCanvas() {
  const [nodes, setNodes] = useState<ProjectNode[]>([])

  useEffect(() => {
    async function fetchNodes() {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
      
      if (data && !error) {
        // Map dynamic data to spatial positions
        const mapped = data.map((p: any, i: number) => ({
          id: p.id,
          title: p.title,
          category: p.category,
          position: [
            Math.sin(i * 2) * 5,
            Math.cos(i * 1.5) * 3,
            Math.sin(i * 0.8) * 4
          ] as [number, number, number]
        }))
        setNodes(mapped)
      } else {
        // Fallback nodes if database is empty
        setNodes([
          { id: '1', title: 'AETHER INTERFACE', category: 'Core OS', position: [0, 0, 0] },
          { id: '2', title: 'VAPOR OPS', category: 'Control System', position: [4, 2, -2] },
          { id: '3', title: 'AETHER ORBIT', category: 'Spatial Arch', position: [-4, -2, 2] }
        ])
      }
    }
    fetchNodes()
  }, [])

  return (
    <div className="w-full h-screen bg-black">
      <Canvas dpr={[1, 2]}>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={50} />
          <OrbitControls 
            enableDamping 
            dampingFactor={0.05}
            rotateSpeed={0.5}
            minDistance={5}
            maxDistance={30}
          />
          
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#88ccff" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ffffff" />

          {nodes.map((node) => (
            <Float key={node.id} speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
              <SpatialNode node={node} />
            </Float>
          ))}
        </Suspense>
      </Canvas>
    </div>
  )
}
