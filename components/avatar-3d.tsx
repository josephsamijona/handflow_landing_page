"use client"

import { useRef, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useGLTF, useAnimations, Environment, PerspectiveCamera } from "@react-three/drei"
import type * as THREE from "three"

// Animation states for sign language
const ANIMATIONS = {
  idle: "Idle",
  hello: "Hello",
  howareyou: "HowAreYou",
  thankyou: "ThankYou",
  yes: "Yes",
  no: "No",
  weather: "Weather",
  sunny: "Sunny",
  perfect: "Perfect",
}

interface AvatarModelProps {
  animation: string
  position?: [number, number, number]
  scale?: number
  rotation?: [number, number, number]
}

function AvatarModel({ animation, position = [0, -1, 0], scale = 1, rotation = [0, 0, 0] }: AvatarModelProps) {
  const group = useRef<THREE.Group>(null)
  const { scene, animations } = useGLTF("/models/signing-avatar.glb")
  const { actions, names } = useAnimations(animations, group)
  const { camera } = useThree()

  // Set initial camera position
  useEffect(() => {
    camera.position.set(0, 0, 2.5)
    camera.lookAt(0, 0, 0)
  }, [camera])

  // Handle animation changes
  useEffect(() => {
    // Reset all animations
    Object.values(actions).forEach((action) => action?.stop())

    // If we have a valid animation, play it
    if (animation && actions[animation]) {
      actions[animation]?.reset().fadeIn(0.5).play()
    } else {
      // Default to idle if animation not found
      actions[ANIMATIONS.idle]?.reset().fadeIn(0.5).play()
    }

    return () => {
      Object.values(actions).forEach((action) => action?.stop())
    }
  }, [actions, animation])

  // Subtle movement to make the avatar feel more alive
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1
    }
  })

  return (
    <group ref={group} position={position} rotation={rotation as any} scale={[scale, scale, scale]}>
      <primitive object={scene} />
    </group>
  )
}

interface Avatar3DProps {
  animation: string
  className?: string
}

export default function Avatar3D({ animation, className = "" }: Avatar3DProps) {
  return (
    <div className={`relative w-full h-full ${className}`}>
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 2.5]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <Environment preset="studio" />
        <AvatarModel animation={animation} />
      </Canvas>
    </div>
  )
}

// Preload the 3D model
useGLTF.preload("/models/signing-avatar.glb")
