"use client"

import { useVoice } from "@humeai/voice-react"

export default function AudioVisualizer() {
  const { fft, micFft, isPlaying } = useVoice()
  const combinedFft = [...fft, ...micFft].slice(0, 20)
  const sizeMultiplier = 50

  return (
    <div className="relative">
      <div className="flex h-20 items-center justify-center space-x-px">
        {combinedFft.map((level, index) => (
          <div
            key={index}
            className="w-2 rounded-full bg-pink-400"
            style={{
              height: `${level * sizeMultiplier}%`,
              maxHeight: "80%",
              transform: `scaleY(${index < 5 || index > 14 ? 0.5 : 1})`,
            }}
          />
        ))}
      </div>
      {isPlaying || (
        <div className="absolute inset-x-0 top-0 rounded-full bg-gray-100 px-2 py-1 text-center text-sm text-gray-600">
          Listening...
        </div>
      )}
    </div>
  )
}
