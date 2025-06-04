"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import {
  ChevronLeft,
  ChevronRight,
  Expand,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Link,
  Award,
  Shield,
  Leaf,
  Clock,
  Globe,
  Crown,
  Gem,
  Sparkles,
  Package,
  Calendar,
  Palette,
  Shirt,
  Store,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function ProductDetailsPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showTransition, setShowTransition] = useState(false)
  const audioContext = useRef<AudioContext | null>(null)

  const productImages = [
    "/placeholder.svg?height=600&width=600&text=Product+Front",
    "/placeholder.svg?height=600&width=600&text=Product+Back",
    "/placeholder.svg?height=600&width=600&text=Product+Side",
    "/placeholder.svg?height=600&width=600&text=Product+Detail",
    "/placeholder.svg?height=600&width=600&text=Product+Lifestyle",
  ]

  // Loading screen effect
  useEffect(() => {
    // Initialize audio context
    audioContext.current = new (window.AudioContext || (window as any).webkitAudioContext)()

    // Play sound effect
    const playSound = () => {
      if (!audioContext.current) return

      const oscillator = audioContext.current.createOscillator()
      const gainNode = audioContext.current.createGain()

      oscillator.type = "sine"
      oscillator.frequency.setValueAtTime(440, audioContext.current.currentTime) // A4 note
      gainNode.gain.setValueAtTime(0.1, audioContext.current.currentTime) // Adjust volume

      oscillator.connect(gainNode)
      gainNode.connect(audioContext.current.destination)

      oscillator.start(audioContext.current.currentTime)
      oscillator.stop(audioContext.current.currentTime + 0.3) // Play for 0.3 seconds
    }

    playSound()

    // Simple timeout instead of animated progress
    const loadingTimeout = setTimeout(() => {
      setShowTransition(true)
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    }, 2000) // Show loading for 2 seconds

    return () => {
      clearTimeout(loadingTimeout)
      if (audioContext.current) {
        audioContext.current.close()
        audioContext.current = null
      }
    }
  }, [])

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === productImages.length - 1 ? 0 : prevIndex + 1))
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? productImages.length - 1 : prevIndex - 1))
  }

  const goToImage = (index: number) => {
    setCurrentImageIndex(index)
  }

  // Loading Screen Component
  if (isLoading) {
    return (
      <>
        <div className={`retro-screen ${showTransition ? "fade-out" : ""}`}>
          <div className="retro-window">
            {/* Window Title Bar */}
            <div className="retro-titlebar">
              <span className="retro-title">SANSHIN.EXE</span>
              <div className="retro-controls">
                <button className="retro-control-btn minimize">
                  <div className="minimize-icon"></div>
                </button>
                <button className="retro-control-btn maximize">
                  <div className="maximize-icon"></div>
                </button>
                <button className="retro-control-btn close">
                  <div className="close-icon"></div>
                </button>
              </div>
            </div>

            {/* Window Content */}
            <div className="retro-content">
              <div className="retro-text">Your tee is upgrading ...</div>

              {/* Loading Bar */}
              <div className="retro-loading-bar">
                {Array.from({ length: 20 }, (_, i) => (
                  <div key={i} className="loading-block loaded" />
                ))}
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .retro-screen {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: #c0c0c0;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            font-family: 'MS Sans Serif', 'Tahoma', sans-serif;
            z-index: 9999;
            transition: opacity 1s ease-out;
          }
          
          .retro-screen.fade-out {
            opacity: 0;
          }
          
          .retro-window {
            width: 420px;
            max-width: 90vw;
            background: #c0c0c0;
            border: 2px outset #c0c0c0;
            box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
            animation: window-appear 0.8s ease-out;
            margin-top: 20px;
          }
          
          @keyframes window-appear {
            0% {
              opacity: 0;
              transform: scale(0.8) translateY(20px);
            }
            100% {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }
          
          .retro-titlebar {
            background: linear-gradient(90deg, #0000ff 0%, #0040ff 50%, #0080ff 100%);
            color: white;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 11px;
            font-weight: bold;
            height: 28px;
            margin-top: 12px;
            padding: 6px 10px;
          }
          
          .retro-title {
            font-size: 14px;
            font-weight: bold;
            letter-spacing: 0.8px;
          }
          
          .retro-controls {
            display: flex;
            gap: 2px;
          }
          
          .retro-control-btn {
            width: 20px;
            height: 18px;
            background: #c0c0c0;
            border: 1px outset #c0c0c0;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.1s;
          }
          
          .retro-control-btn:hover {
            background: #d4d0c8;
          }
          
          .retro-control-btn:active {
            border: 1px inset #c0c0c0;
          }
          
          .minimize-icon {
            width: 6px;
            height: 1px;
            background: black;
            margin-bottom: 2px;
          }
          
          .maximize-icon {
            width: 6px;
            height: 6px;
            border: 1px solid black;
            background: transparent;
          }
          
          .close-icon {
            width: 8px;
            height: 8px;
            position: relative;
          }
          
          .close-icon::before,
          .close-icon::after {
            content: '';
            position: absolute;
            width: 8px;
            height: 1px;
            background: black;
            top: 50%;
            left: 0;
          }
          
          .close-icon::before {
            transform: rotate(45deg);
          }
          
          .close-icon::after {
            transform: rotate(-45deg);
          }
          
          .retro-content {
            padding: 55px 45px;
            text-align: center;
            background: #c0c0c0;
          }
          
          .retro-text {
            font-size: 20px;
            color: black;
            margin-bottom: 45px;
            font-weight: normal;
            letter-spacing: 0.5px;
          }
          
          .retro-loading-bar {
            display: flex;
            gap: 1px;
            justify-content: center;
            margin-bottom: 20px;
          }
          
          .loading-block {
            width: 14px;
            height: 18px;
            border: 1px solid #808080;
            transition: all 0.3s ease;
          }
          
          .loading-block.loaded {
            background: #0000ff;
            border-color: #0000aa;
            animation: block-fill 0.4s ease;
          }
          
          .loading-block.empty {
            background: white;
            border-color: #808080;
          }
          
          @keyframes block-fill {
            0% {
              background: white;
              transform: scale(1);
            }
            50% {
              transform: scale(1.1);
              background: #4444ff;
            }
            100% {
              background: #0000ff;
              transform: scale(1);
            }
          }
        `}</style>
      </>
    )
  }

  // Main Product Page
  return (
    <>
      <div className="min-h-screen bg-black text-white main-content">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
          {/* Elegant Header */}
          <div className="luxury-card mb-8 sm:mb-12">
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-2xl shadow-blue-500/30 luxury-glow">
                    <div className="text-white font-bold text-xl sm:text-2xl font-serif">S</div>
                  </div>
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-blue-400 font-serif tracking-wide">
                      SanShin
                    </h1>
                    <p className="text-blue-200/80 text-sm sm:text-base font-light tracking-wider">Luxury Collection</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-blue-300 hover:text-white transition-all duration-300 hover:bg-blue-500/20 border border-blue-500/30 hover:border-blue-400"
                >
                  <Expand className="h-5 w-5 sm:h-6 sm:w-6" />
                </Button>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Elegant Photo Section */}
            <div className="space-y-6">
              {/* Main Image with Auto-scroll */}
              <div className="relative group w-full">
                <div className="aspect-square w-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-black shadow-2xl shadow-black/50 luxury-border">
                  <Image
                    src={productImages[currentImageIndex] || "/placeholder.svg"}
                    alt={`Product image ${currentImageIndex + 1}`}
                    width={600}
                    height={600}
                    className="w-full h-full object-cover transition-all duration-700 ease-in-out transform hover:scale-105 filter brightness-110"
                    priority
                  />
                  {/* Elegant overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-blue-500/5 pointer-events-none"></div>
                </div>

                {/* Elegant Navigation Arrows */}
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/70 hover:bg-blue-900/50 border-blue-500/50 backdrop-blur-md luxury-button"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-5 w-5 text-blue-300" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/70 hover:bg-blue-900/50 border-blue-500/50 backdrop-blur-md luxury-button"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-5 w-5 text-blue-300" />
                </Button>

                {/* Elegant Indicators */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
                  {productImages.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-500 ${
                        index === currentImageIndex
                          ? "bg-blue-400 scale-125 shadow-lg shadow-blue-400/50"
                          : "bg-blue-400/30 hover:bg-blue-400/60"
                      }`}
                      onClick={() => goToImage(index)}
                    />
                  ))}
                </div>

                {/* Elegant Counter */}
                <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-md rounded-full px-4 py-2 text-sm border border-blue-500/30 text-blue-200 font-light">
                  {currentImageIndex + 1} of {productImages.length}
                </div>

                {/* Premium Badge */}
                <div className="absolute top-6 left-6">
                  <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold px-3 py-1 shadow-lg">
                    <Crown className="w-3 h-3 mr-1" />
                    Premium
                  </Badge>
                </div>
              </div>

              {/* Elegant Thumbnail Images */}
              <div className="grid grid-cols-5 gap-2 sm:gap-3">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    className={`aspect-square overflow-hidden rounded-lg border-2 transition-all duration-500 transform hover:scale-105 ${
                      index === currentImageIndex
                        ? "border-blue-400 shadow-xl shadow-blue-400/30 luxury-glow"
                        : "border-blue-500/20 hover:border-blue-400/60"
                    }`}
                    onClick={() => goToImage(index)}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Thumbnail ${index + 1}`}
                      width={120}
                      height={120}
                      className="w-full h-full object-cover filter brightness-110"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Elegant Product Details */}
            <div className="space-y-8">
              {/* Premium Specifications */}
              <div className="luxury-card">
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-400 flex items-center gap-3 mb-8 font-serif">
                    <Gem className="w-6 h-6 text-blue-400" />
                    Product Specifications
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="luxury-spec-item">
                      <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                        <Package className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-blue-200/70 text-sm font-light tracking-wide">Product Number</p>
                        <p className="text-white font-semibold text-lg">001</p>
                      </div>
                    </div>

                    <div className="luxury-spec-item">
                      <div className="w-12 h-12 bg-gray-500 rounded-xl flex items-center justify-center shadow-lg shadow-gray-500/30">
                        <Expand className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-blue-200/70 text-sm font-light tracking-wide">Size</p>
                        <p className="text-white font-semibold text-lg">S</p>
                      </div>
                    </div>

                    <div className="luxury-spec-item">
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-blue-200/70 text-sm font-light tracking-wide">Release Date</p>
                        <p className="text-white font-semibold text-lg">2025-2-12</p>
                      </div>
                    </div>

                    <div className="luxury-spec-item">
                      <div className="w-12 h-12 bg-slate-500 rounded-xl flex items-center justify-center shadow-lg shadow-slate-500/30">
                        <Palette className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-blue-200/70 text-sm font-light tracking-wide">Color</p>
                        <p className="text-white font-semibold text-lg">Midnight Black</p>
                      </div>
                    </div>

                    <div className="luxury-spec-item">
                      <div className="w-12 h-12 bg-gray-600 rounded-xl flex items-center justify-center shadow-lg shadow-gray-500/30">
                        <Shirt className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-blue-200/70 text-sm font-light tracking-wide">Material</p>
                        <p className="text-white font-semibold text-lg">Premium Cotton</p>
                      </div>
                    </div>

                    <div className="luxury-spec-item">
                      <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                        <Store className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-blue-200/70 text-sm font-light tracking-wide">Atelier</p>
                        <div className="flex items-center gap-2">
                          <p className="text-white font-semibold text-lg">SanShin</p>
                          <Link className="w-4 h-4 text-blue-400 hover:text-blue-300 transition-colors" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Elegant Features */}
              <div className="luxury-card">
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-400 flex items-center gap-3 mb-8 font-serif">
                    <Sparkles className="w-6 h-6 text-blue-400" />
                    Luxury Features
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="luxury-feature-card">
                      <Leaf className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                      <p className="text-xs text-blue-200 font-light tracking-wider">Sustainable</p>
                    </div>
                    <div className="luxury-feature-card">
                      <Shield className="w-8 h-8 text-white mx-auto mb-3" />
                      <p className="text-xs text-blue-200 font-light tracking-wider">Durable</p>
                    </div>
                    <div className="luxury-feature-card">
                      <Crown className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                      <p className="text-xs text-blue-200 font-light tracking-wider">Premium</p>
                    </div>
                    <div className="luxury-feature-card">
                      <Award className="w-8 h-8 text-white mx-auto mb-3" />
                      <p className="text-xs text-blue-200 font-light tracking-wider">Certified</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Elegant Care Instructions */}
              <div className="luxury-card">
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-400 mb-8 font-serif">
                    Care Instructions
                  </h3>
                  <div className="flex gap-4 sm:gap-6 justify-center">
                    {["🧺", "△", "⬜", "🔥", "○"].map((icon, index) => (
                      <div key={index} className="luxury-care-icon">
                        <span className="text-xl sm:text-2xl">{icon}</span>
                        {index === 2 && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-8 h-0.5 bg-red-400 rotate-45 shadow-lg shadow-red-400/50"></div>
                            <div className="w-8 h-0.5 bg-red-400 -rotate-45 absolute shadow-lg shadow-red-400/50"></div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Elegant Size Chart */}
          <div className="luxury-card mt-12">
            <div className="p-6 sm:p-8">
              <h3 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-400 flex items-center gap-3 mb-8 font-serif">
                <Globe className="w-6 h-6 text-blue-400" />
                Size Chart
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-blue-500/20">
                      <th className="text-left p-6 text-blue-200 font-light tracking-wider">Size</th>
                      <th className="text-left p-6 text-blue-200 font-light tracking-wider">Shoulder</th>
                      <th className="text-left p-6 text-blue-200 font-light tracking-wider">Chest</th>
                      <th className="text-left p-6 text-blue-200 font-light tracking-wider">Sleeve</th>
                      <th className="text-left p-6 text-blue-200 font-light tracking-wider">Length</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-blue-500/5 transition-colors border-b border-blue-500/10">
                      <td className="p-6 text-white font-semibold text-lg">S</td>
                      <td className="p-6 text-white font-light">21"</td>
                      <td className="p-6 text-white font-light">23"</td>
                      <td className="p-6 text-white font-light">10"</td>
                      <td className="p-6 text-white font-light">29"</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Elegant Details Grid */}
          <div className="mt-12">
            <div className="luxury-card">
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-400 flex items-center gap-3 mb-8 font-serif">
                  <Clock className="w-6 h-6 text-blue-400" />
                  Craftsmanship Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="luxury-detail-item">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                        <Clock className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <span className="text-blue-200/80 font-light tracking-wide text-sm">Handcrafted Time</span>
                        <div className="mt-1">
                          <Badge className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 text-blue-300 border-blue-500/30 font-light">
                            2-3 weeks
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="luxury-detail-item">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/30">
                        <Shield className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <span className="text-blue-200/80 font-light tracking-wide text-sm">Quality Assurance</span>
                        <div className="mt-1">
                          <Badge className="bg-gradient-to-r from-green-500/20 to-green-600/20 text-green-300 border-green-500/30 font-light">
                            Master Approved
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="luxury-detail-item">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30">
                        <Globe className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <span className="text-blue-200/80 font-light tracking-wide text-sm">Origin</span>
                        <div className="mt-1">
                          <span className="text-white font-semibold text-lg">Handmade in Myanmar</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="luxury-detail-item">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/30">
                        <Gem className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <span className="text-blue-200/80 font-light tracking-wide text-sm">Collection ID</span>
                        <div className="mt-1">
                          <span className="text-white font-semibold text-lg tracking-wider">SS-LUX-2025-001</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Elegant Contact Section */}
          <div className="luxury-card mt-12">
            <div className="p-8 sm:p-12">
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-400 mb-6 font-serif">
                Concierge Service
              </h2>
              <p className="text-blue-200/80 mb-10 font-light tracking-wide text-lg">
                Our luxury concierge team is at your service for any inquiries
              </p>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div className="luxury-contact-item">
                    <Phone className="w-6 h-6 text-blue-400" />
                    <span className="text-white font-light tracking-wide">+959785146940</span>
                  </div>
                  <div className="luxury-contact-item">
                    <Mail className="w-6 h-6 text-blue-400" />
                    <span className="text-white font-light tracking-wide">sanshin739@gmail.com</span>
                  </div>
                </div>

                <div>
                  <p className="text-blue-200/80 mb-6 font-light tracking-wider">Follow Our Journey</p>
                  <div className="flex gap-6">
                    {[
                      { icon: Facebook, color: "text-blue-400" },
                      { icon: Instagram, color: "text-white" },
                      { icon: "T", color: "text-blue-400" },
                    ].map((social, index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        size="icon"
                        className={`${social.color} hover:scale-110 transform transition-all duration-500 border border-blue-500/20 hover:border-blue-400/50 hover:bg-blue-500/10 w-12 h-12`}
                      >
                        {typeof social.icon === "string" ? (
                          <span className="text-xl font-bold font-serif">{social.icon}</span>
                        ) : (
                          <social.icon className="w-6 h-6" />
                        )}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .main-content {
          animation: main-content-appear 1.2s ease-out;
        }
        
        @keyframes main-content-appear {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .luxury-card {
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(20, 20, 20, 0.9) 100%);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 20px;
          backdrop-filter: blur(20px);
          position: relative;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }
        
        .luxury-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent);
          animation: luxury-shimmer 4s infinite;
        }
        
        @keyframes luxury-shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        
        .luxury-border {
          border: 2px solid transparent;
          background: linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(147, 197, 253, 0.2)) border-box;
          border-radius: 16px;
        }
        
        .luxury-glow {
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.4);
        }
        
        .luxury-button {
          box-shadow: 0 10px 25px rgba(59, 130, 246, 0.2);
        }
        
        .luxury-spec-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px;
          border-radius: 16px;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(147, 197, 253, 0.02) 100%);
          border: 1px solid rgba(59, 130, 246, 0.15);
          transition: all 0.5s ease;
        }
        
        .luxury-spec-item:hover {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 197, 253, 0.05) 100%);
          border-color: rgba(59, 130, 246, 0.3);
          transform: translateY(-4px);
          box-shadow: 0 15px 35px rgba(59, 130, 246, 0.1);
        }
        
        .luxury-feature-card {
          text-align: center;
          padding: 24px 16px;
          border-radius: 16px;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(147, 197, 253, 0.02) 100%);
          border: 1px solid rgba(59, 130, 246, 0.15);
          transition: all 0.5s ease;
        }
        
        .luxury-feature-card:hover {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 197, 253, 0.05) 100%);
          border-color: rgba(59, 130, 246, 0.3);
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 20px 40px rgba(59, 130, 246, 0.15);
        }
        
        .luxury-care-icon {
          width: 56px;
          height: 56px;
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          transition: all 0.5s ease;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(147, 197, 253, 0.02) 100%);
        }
        
        .luxury-care-icon:hover {
          border-color: rgba(59, 130, 246, 0.4);
          box-shadow: 0 15px 30px rgba(59, 130, 246, 0.2);
          transform: scale(1.1) translateY(-2px);
        }
        
        .luxury-detail-item {
          padding: 24px;
          border-radius: 16px;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(147, 197, 253, 0.02) 100%);
          border: 1px solid rgba(59, 130, 246, 0.1);
          transition: all 0.5s ease;
        }
        
        .luxury-detail-item:hover {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(147, 197, 253, 0.04) 100%);
          border-color: rgba(59, 130, 246, 0.2);
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(59, 130, 246, 0.1);
        }
        
        .luxury-sustainability-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px 20px;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(147, 197, 253, 0.02) 100%);
          border: 1px solid rgba(59, 130, 246, 0.1);
          transition: all 0.3s ease;
        }
        
        .luxury-sustainability-item:hover {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(147, 197, 253, 0.04) 100%);
          border-color: rgba(59, 130, 246, 0.2);
        }
        
        .luxury-contact-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px 24px;
          border-radius: 16px;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(147, 197, 253, 0.02) 100%);
          border: 1px solid rgba(59, 130, 246, 0.15);
          transition: all 0.5s ease;
        }
        
        .luxury-contact-item:hover {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 197, 253, 0.05) 100%);
          border-color: rgba(59, 130, 246, 0.3);
          box-shadow: 0 10px 25px rgba(59, 130, 246, 0.1);
        }

        .luxury-craft-stat {
          padding: 20px;
          border-radius: 16px;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(147, 197, 253, 0.02) 100%);
          border: 1px solid rgba(59, 130, 246, 0.1);
          transition: all 0.5s ease;
        }

        .luxury-craft-stat:hover {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 197, 253, 0.05) 100%);
          border-color: rgba(59, 130, 246, 0.3);
          transform: translateY(-4px);
          box-shadow: 0 15px 35px rgba(59, 130, 246, 0.1);
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out 0.6s both;
        }
      `}</style>
    </>
  )
}
