"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Video, Mic, Volume2, Minimize2, X, Play, Pause } from "lucide-react"
import Avatar3D from "./avatar-3d"

// Sample conversation data
const conversationData = [
  {
    id: 1,
    text: "Hello, how are you today?",
    translation: "Bonjour, comment allez-vous aujourd'hui?",
    sender: "user",
    type: "speech",
    animation: "hello",
  },
  {
    id: 2,
    text: "I'm doing well, thank you for asking.",
    translation: "Je vais bien, merci de demander.",
    sender: "assistant",
    type: "sign",
    animation: "thankyou",
  },
  {
    id: 3,
    text: "Can you tell me about the weather today?",
    translation: "Pouvez-vous me parler de la météo aujourd'hui?",
    sender: "user",
    type: "speech",
    animation: "weather",
  },
  {
    id: 4,
    text: "It's sunny and warm, around 75 degrees.",
    translation: "Il fait ensoleillé et chaud, environ 24 degrés.",
    sender: "assistant",
    type: "sign",
    animation: "sunny",
  },
  {
    id: 5,
    text: "That sounds perfect for a walk in the park.",
    translation: "Cela semble parfait pour une promenade dans le parc.",
    sender: "user",
    type: "speech",
    animation: "perfect",
  },
]

export default function InteractiveDemo() {
  const [expanded, setExpanded] = useState(false)
  const [activeMode, setActiveMode] = useState<"speech-to-sign" | "sign-to-speech">("speech-to-sign")
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showBubble, setShowBubble] = useState(true)
  const [position, setPosition] = useState({ x: 50, y: 50 }) // Percentage values
  const containerRef = useRef<HTMLDivElement>(null)
  const dragRef = useRef<{ isDragging: boolean; startX: number; startY: number }>({
    isDragging: false,
    startX: 0,
    startY: 0,
  })

  // Handle demo playback
  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      if (currentMessageIndex < conversationData.length - 1) {
        setCurrentMessageIndex((prev) => prev + 1)
      } else {
        setIsPlaying(false)
      }
    }, 4000) // Longer interval to allow animations to play

    return () => clearInterval(interval)
  }, [isPlaying, currentMessageIndex])

  // Handle dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return

    dragRef.current.isDragging = true
    dragRef.current.startX = e.clientX
    dragRef.current.startY = e.clientY

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!dragRef.current.isDragging || !containerRef.current) return

    const containerRect = containerRef.current.getBoundingClientRect()
    const deltaX = e.clientX - dragRef.current.startX
    const deltaY = e.clientY - dragRef.current.startY

    dragRef.current.startX = e.clientX
    dragRef.current.startY = e.clientY

    const newX = position.x + (deltaX / containerRect.width) * 100
    const newY = position.y + (deltaY / containerRect.height) * 100

    setPosition({
      x: Math.max(0, Math.min(100, newX)),
      y: Math.max(0, Math.min(100, newY)),
    })
  }

  const handleMouseUp = () => {
    dragRef.current.isDragging = false
    document.removeEventListener("mousemove", handleMouseMove)
    document.removeEventListener("mouseup", handleMouseUp)
  }

  const toggleExpanded = () => {
    setExpanded(!expanded)
  }

  const togglePlayback = () => {
    setIsPlaying(!isPlaying)
    if (!isPlaying && currentMessageIndex === conversationData.length - 1) {
      setCurrentMessageIndex(0)
    }
  }

  const resetDemo = () => {
    setCurrentMessageIndex(0)
    setIsPlaying(false)
  }

  const toggleBubble = () => {
    if (expanded) {
      setExpanded(false)
      setTimeout(() => setShowBubble(true), 300)
    } else {
      setShowBubble(false)
    }
  }

  const currentMessage = conversationData[currentMessageIndex]
  const currentAnimation = currentMessage?.animation || "idle"

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[500px] bg-gray-100 rounded-xl overflow-hidden border shadow-md"
    >
      {/* Background content - simulated video call or content */}
      <div className="absolute inset-0 p-6">
        <div className="w-full h-full bg-white rounded-lg shadow-sm flex flex-col">
          <div className="bg-gray-800 text-white p-3 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Video className="h-4 w-4" />
              <span className="text-sm font-medium">Video Conference</span>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="h-6 w-6 text-gray-300 hover:text-white hover:bg-gray-700">
                <Mic className="h-3 w-3" />
              </Button>
              <Button variant="ghost" size="icon" className="h-6 w-6 text-gray-300 hover:text-white hover:bg-gray-700">
                <Volume2 className="h-3 w-3" />
              </Button>
            </div>
          </div>
          <div className="flex-1 p-4 grid grid-cols-2 gap-4">
            <div className="bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="h-20 w-20 bg-gray-300 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <span className="text-gray-600">User 1</span>
                </div>
                <p className="text-xs text-gray-500">Speaking...</p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="h-20 w-20 bg-gray-300 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <span className="text-gray-600">User 2</span>
                </div>
                <p className="text-xs text-gray-500">Listening...</p>
              </div>
            </div>
          </div>
          <div className="p-3 border-t">
            <div className="bg-gray-100 p-2 rounded-lg">
              <p className="text-sm text-gray-600">Meeting transcript will appear here...</p>
            </div>
          </div>
        </div>
      </div>

      {/* Demo controls */}
      <div className="absolute top-4 left-4 z-50 bg-white rounded-lg shadow-md p-3 flex gap-3">
        <Button size="sm" onClick={togglePlayback} className="bg-purple-700 hover:bg-purple-800">
          {isPlaying ? <Pause className="h-4 w-4 mr-1" /> : <Play className="h-4 w-4 mr-1" />}
          {isPlaying ? "Pause Demo" : "Play Demo"}
        </Button>
        <Button size="sm" variant="outline" onClick={resetDemo}>
          Reset
        </Button>
      </div>

      {/* HandsFlow interface */}
      {showBubble && !expanded ? (
        <div
          className="absolute z-40 cursor-move"
          style={{
            left: `${position.x}%`,
            top: `${position.y}%`,
            transform: "translate(-50%, -50%)",
          }}
          onMouseDown={handleMouseDown}
        >
          <div className="relative group">
            <button
              onClick={toggleExpanded}
              className="h-14 w-14 rounded-full bg-purple-700 shadow-lg flex items-center justify-center hover:bg-purple-800 transition-all"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/handflow-Y28aiBpC5sXaTNb2ORAMeWazSAVkXf.png"
                alt="HandsFlow"
                width={30}
                height={30}
              />
            </button>
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Click to expand HandsFlow
            </div>
          </div>
        </div>
      ) : null}

      {expanded && (
        <div
          className="absolute z-40 transition-all duration-300 ease-in-out cursor-move"
          style={{
            left: `${position.x}%`,
            top: `${position.y}%`,
            transform: "translate(-50%, -50%)",
            width: "350px",
          }}
          onMouseDown={handleMouseDown}
        >
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border">
            {/* Header */}
            <div className="bg-purple-700 text-white p-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/handflow-Y28aiBpC5sXaTNb2ORAMeWazSAVkXf.png"
                  alt="HandsFlow"
                  width={24}
                  height={24}
                />
                <span className="font-medium">HandsFlow</span>
              </div>
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 text-white hover:bg-purple-800"
                  onClick={toggleExpanded}
                >
                  <Minimize2 className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 text-white hover:bg-purple-800"
                  onClick={toggleBubble}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Tabs */}
            <Tabs
              defaultValue="speech-to-sign"
              className="w-full"
              onValueChange={(value) => setActiveMode(value as any)}
            >
              <TabsList className="w-full grid grid-cols-2">
                <TabsTrigger value="speech-to-sign" className="text-xs">
                  Speech to Sign
                </TabsTrigger>
                <TabsTrigger value="sign-to-speech" className="text-xs">
                  Sign to Speech
                </TabsTrigger>
              </TabsList>

              {/* Speech to Sign Content */}
              <TabsContent value="speech-to-sign" className="p-0">
                <div className="p-4">
                  <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center mb-4 overflow-hidden">
                    {currentMessage?.type === "speech" ? (
                      <div className="text-center w-full h-full">
                        <div className="h-full w-full flex items-center justify-center">
                          <Avatar3D animation={isPlaying ? currentAnimation : "idle"} />
                        </div>
                      </div>
                    ) : (
                      <div className="text-center w-full h-full">
                        <div className="h-full w-full flex items-center justify-center">
                          <Avatar3D animation={isPlaying ? currentAnimation : "idle"} />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-600">
                      {isPlaying
                        ? currentMessage?.text || "Speech will be translated to sign language"
                        : "Speech will be translated to sign language"}
                    </p>
                  </div>
                </div>
              </TabsContent>

              {/* Sign to Speech Content */}
              <TabsContent value="sign-to-speech" className="p-0">
                <div className="p-4">
                  <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center mb-4">
                    <div className="text-center">
                      <div className="h-24 w-24 bg-gray-200 rounded-lg mx-auto mb-2 flex items-center justify-center border-2 border-dashed border-gray-300">
                        <Video className="h-8 w-8 text-gray-400" />
                      </div>
                      <p className="text-xs text-gray-500">Camera feed for sign language detection</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-600">
                      {currentMessage?.type === "sign" && isPlaying
                        ? currentMessage.text
                        : "Sign language will be translated to speech"}
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      )}
    </div>
  )
}
