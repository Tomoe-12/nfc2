"use client"

import { useState, useEffect } from "react"
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Calendar,
  Package,
  Palette,
  Shirt,
  Store,
  Minus,
  Square,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Component() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [isContentLoaded, setIsContentLoaded] = useState(false)

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          setTimeout(() => {
            setIsLoading(false)
            setTimeout(() => setIsContentLoaded(true), 100)
          }, 500)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(progressInterval)
  }, [])

  const productImages = [
    {
      main: "/placeholder.svg?height=600&width=600&text=Front+View",
      thumbnail: "/placeholder.svg?height=80&width=80&text=Front",
    },
    {
      main: "/placeholder.svg?height=600&width=600&text=Back+View",
      thumbnail: "/placeholder.svg?height=80&width=80&text=Back",
    },
    {
      main: "/placeholder.svg?height=600&width=600&text=Side+View",
      thumbnail: "/placeholder.svg?height=80&width=80&text=Side",
    },
    {
      main: "/placeholder.svg?height=600&width=600&text=Detail+View",
      thumbnail: "/placeholder.svg?height=80&width=80&text=Detail",
    },
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length)
  }

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length)
  }

  // Loading Screen Component
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-300 flex items-center justify-center p-4">
        <style jsx>{`
          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0.3; }
          }
          
          .loading-block {
            animation: blink 1s infinite;
          }
          
          .loading-block:nth-child(1) { animation-delay: 0s; }
          .loading-block:nth-child(2) { animation-delay: 0.1s; }
          .loading-block:nth-child(3) { animation-delay: 0.2s; }
          .loading-block:nth-child(4) { animation-delay: 0.3s; }
          .loading-block:nth-child(5) { animation-delay: 0.4s; }
          .loading-block:nth-child(6) { animation-delay: 0.5s; }
          .loading-block:nth-child(7) { animation-delay: 0.6s; }
          .loading-block:nth-child(8) { animation-delay: 0.7s; }
          .loading-block:nth-child(9) { animation-delay: 0.8s; }
          .loading-block:nth-child(10) { animation-delay: 0.9s; }
        `}</style>

        <div className="bg-white border-2 border-gray-400 shadow-lg max-w-md w-full">
          {/* Window Title Bar */}
          <div className="bg-blue-600 text-white px-2 py-1 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-white/20 rounded-sm flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-sm"></div>
              </div>
              <span className="font-bold text-sm">SANSHIN.EXE</span>
            </div>
            <div className="flex items-center gap-1">
              <button className="w-6 h-5 bg-gray-300 border border-gray-400 flex items-center justify-center hover:bg-gray-200">
                <Minus className="w-3 h-3 text-black" />
              </button>
              <button className="w-6 h-5 bg-gray-300 border border-gray-400 flex items-center justify-center hover:bg-gray-200">
                <Square className="w-2 h-2 text-black" />
              </button>
              <button className="w-6 h-5 bg-gray-300 border border-gray-400 flex items-center justify-center hover:bg-gray-200">
                <X className="w-3 h-3 text-black" />
              </button>
            </div>
          </div>

          {/* Window Content */}
          <div className="p-8 text-center">
            <h2 className="text-2xl font-bold text-black mb-8">Your tee is upgrading ...</h2>

            {/* Progress Bar */}
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: 20 }, (_, i) => (
                <div
                  key={i}
                  className={`w-4 h-6 border border-gray-400 ${
                    i < Math.floor(loadingProgress / 5) ? "bg-blue-600 loading-block" : "bg-white"
                  }`}
                />
              ))}
            </div>

            <div className="text-sm text-gray-600 font-mono">{Math.round(loadingProgress)}%</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-fade-in-left {
          animation: fadeInLeft 0.6s ease-out forwards;
        }
        
        .animate-fade-in-right {
          animation: fadeInRight 0.6s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.6s ease-out forwards;
        }
        
        .animate-slide-in-down {
          animation: slideInDown 0.6s ease-out forwards;
        }
        
        .animation-delay-100 {
          animation-delay: 0.1s;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        
        .animation-delay-700 {
          animation-delay: 0.7s;
        }
        
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
        
        .initial-hidden {
          opacity: 0;
        }
      `}</style>

      <div className="max-w-4xl mx-auto p-6 space-y-8">
        {/* Header */}
        <div
          className={`bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 flex items-center justify-between shadow-xl transition-all duration-700 ${
            isContentLoaded ? "animate-slide-in-down" : "initial-hidden"
          }`}
        >
          <div className="flex items-center gap-4">
            <div
              className={`w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg transition-all duration-700 ${
                isContentLoaded ? "animate-scale-in animation-delay-200" : "initial-hidden"
              }`}
            >
              <div className="text-black font-bold text-xl">S</div>
            </div>
            <div
              className={`transition-all duration-700 ${
                isContentLoaded ? "animate-fade-in-left animation-delay-300" : "initial-hidden"
              }`}
            >
              <h1 className="text-2xl font-bold">SanShin</h1>
              <p className="text-gray-400">SanShin's Product</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className={`text-white hover:bg-black/70 transition-all duration-700 ${
              isContentLoaded ? "animate-fade-in-right animation-delay-400" : "initial-hidden"
            }`}
          >
            <ExternalLink className="h-5 w-5" />
          </Button>
        </div>

        {/* Photo Carousel */}
        <div
          className={`space-y-4 transition-all duration-700 ${
            isContentLoaded ? "animate-fade-in-up animation-delay-200" : "initial-hidden"
          }`}
        >
          {/* Main Image */}
          <div className="relative aspect-square bg-black/50 border border-gray-400/30 rounded-xl overflow-hidden shadow-2xl">
            <img
              src={`/placeholder.svg?height=600&width=600&text=Product+Image+${currentImageIndex + 1}`}
              alt={`Product view ${currentImageIndex + 1}`}
              className="w-full h-full object-cover transition-all duration-500"
            />

            {/* Navigation Arrows */}
            <button
              onClick={previousImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-blue-600/80 hover:bg-blue-700 backdrop-blur-sm rounded-full p-3 transition-all duration-200 hover:scale-110 shadow-lg"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5 text-white" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-blue-600/80 hover:bg-blue-700 backdrop-blur-sm rounded-full p-3 transition-all duration-200 hover:scale-110 shadow-lg"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5 text-white" />
            </button>

            {/* Image Counter */}
            <div className="absolute top-4 right-4 bg-blue-600/90 backdrop-blur-sm text-white text-sm px-3 py-1.5 rounded-full shadow-lg">
              {currentImageIndex + 1} / {productImages.length}
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div
            className={`flex gap-2 overflow-x-auto pb-2 transition-all duration-700 ${
              isContentLoaded ? "animate-fade-in-up animation-delay-400" : "initial-hidden"
            }`}
          >
            {productImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 hover:scale-105 ${
                  currentImageIndex === index
                    ? "border-blue-600 shadow-lg shadow-blue-500/25"
                    : "border-transparent hover:border-gray-400/50 shadow-md"
                }`}
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <img
                  src={image.thumbnail || "/placeholder.svg"}
                  alt={`Product thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Specifications */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-700 ${
            isContentLoaded ? "animate-fade-in-up animation-delay-500" : "initial-hidden"
          }`}
        >
          {[
            {
              icon: Package,
              label: "Product Number",
              value: "1",
              color: "text-white",
              delay: "animation-delay-600",
            },
            { icon: ExternalLink, label: "Size", value: "S", color: "text-white", delay: "animation-delay-700" },
            { icon: Palette, label: "Color", value: "Black", color: "text-white", delay: "animation-delay-800" },
            {
              icon: Calendar,
              label: "Release Date",
              value: "2025-2-12",
              color: "text-white",
              delay: "animation-delay-600",
            },
            {
              icon: Shirt,
              label: "Material",
              value: "100% cotton",
              color: "text-white",
              delay: "animation-delay-700",
            },
            { icon: Store, label: "Shop From", value: "SanShin", color: "text-white", delay: "animation-delay-800" },
          ].map((spec, index) => (
            <div
              key={index}
              className={`bg-white/5 border border-gray-400/20 rounded-lg p-4 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                isContentLoaded ? `animate-scale-in ${spec.delay}` : "initial-hidden"
              }`}
            >
              <div className="flex items-center gap-3">
                <spec.icon className={`h-5 w-5 ${spec.color}`} />
                <div>
                  <p className="text-gray-400 text-sm">{spec.label}</p>
                  <div className="flex items-center gap-2">
                    <p className="font-semibold">{spec.value}</p>
                    {spec.label === "Shop From" && <ExternalLink className="h-4 w-4 text-gray-400" />}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Craftsmanship Details */}
        <div
          className={`transition-all duration-700 ${
            isContentLoaded ? "animate-fade-in-up animation-delay-600" : "initial-hidden"
          }`}
        >
          <div className="bg-white/10 backdrop-blur-sm border border-gray-400/30 rounded-xl p-6 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-white">Craftsmanship Details</h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-gray-400/20">
                <span className="text-gray-400">Handcrafted Time</span>
                <span className="bg-blue-600/20 text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                  2-3 weeks
                </span>
              </div>

              <div className="flex items-center justify-between py-3 border-b border-gray-400/20">
                <span className="text-gray-400">Quality Assurance</span>
                <span className="bg-blue-600/20 text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                  Master Approved
                </span>
              </div>

              <div className="flex items-center justify-between py-3 border-b border-gray-400/20">
                <span className="text-gray-400">Origin</span>
                <span className="text-white font-medium">Handmade in Myanmar</span>
              </div>

              <div className="flex items-center justify-between py-3">
                <span className="text-gray-400">Collection ID</span>
                <span className="text-white font-medium">SS-LUX-2025-001</span>
              </div>
            </div>
          </div>
        </div>

        {/* Care Instructions */}
        <div
          className={`space-y-4 transition-all duration-700 ${
            isContentLoaded ? "animate-fade-in-left animation-delay-600" : "initial-hidden"
          }`}
        >
          <h3 className="text-xl font-semibold text-white">Care Instructions</h3>
          <div className="flex gap-4">
            {["30°", "△", "⚬", "⚬", "○"].map((symbol, index) => (
              <div
                key={index}
                className={`w-10 h-10 border border-gray-400/30 rounded-lg flex items-center justify-center hover:border-blue-600 transition-all duration-300 bg-white/5 hover:scale-110 hover:shadow-lg ${
                  isContentLoaded ? `animate-scale-in` : "initial-hidden"
                }`}
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <span className="text-sm font-medium">{symbol}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
