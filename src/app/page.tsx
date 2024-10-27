"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent } from "@/components/ui/card"
import { Play } from 'lucide-react'

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [speed, setSpeed] = useState(0.8)
  const [bitcrush, setBitcrush] = useState(50)

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center p-8">
      <header className="w-full max-w-md flex justify-between items-center mb-8">
        <h1 className="text-2xl font-light text-gray-700">hex+surge studio</h1>
        <nav className="space-x-4 text-sm">
          <a href="#" className="text-gray-600 hover:text-gray-800">Extension</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Blog</a>
          <Button variant="secondary" size="sm" className="bg-gray-800 text-white hover:bg-gray-700">
            Upgrade to Pro
          </Button>
        </nav>
      </header>

      <Card className="w-full max-w-md bg-white shadow-lg">
        <CardContent className="p-6">
          <div className="bg-blue-100 rounded p-3 mb-4">
          <p className="text-sm text-gray-700 mb-1">Soulja Boy Tell&apos;em - Crank That (Soulja Boy) .mp3</p>            <div className="flex justify-between text-xs text-gray-500">
              <span>0:00</span>
              <span>2:24</span>
            </div>
          </div>

          <div className="flex items-center mb-4">
            <Button
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-gray-800 hover:bg-gray-700 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4"
            >
              <Play className="w-4 h-4" />
            </Button>
            <div className="flex-1">
              <p className="text-sm text-gray-700 mb-1">Speed ({speed.toFixed(1)}x)</p>
              <Slider
                value={[speed]}
                onValueChange={(value) => setSpeed(value[0])}
                min={0.5}
                max={2}
                step={0.1}
                className="w-full"
              />
            </div>
          </div>

          <div className="mb-4">
            <p className="text-sm text-gray-700 mb-1">Bitcrush</p>
            <Slider
              value={[bitcrush]}
              onValueChange={(value) => setBitcrush(value[0])}
              max={100}
              step={1}
              className="w-full"
            />
          </div>

          <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white">
            Download remix
          </Button>
        </CardContent>
      </Card>

      <footer className="mt-8 text-center text-sm text-gray-500">
        <p className="mb-2">
          This app lets you create hex+surge edits of your favorite songs. Just upload an MP3 file, apply effects, and download your remix.
        </p>
        <div>
          <a href="#" className="hover:text-gray-700">FAQ</a> • 
          <a href="#" className="hover:text-gray-700"> Changes & updates</a> • 
          <a href="#" className="hover:text-gray-700"> Privacy</a>
        </div>
        <p className="mt-2">Made by hex+surge studio</p>
      </footer>
    </div>
  )
}