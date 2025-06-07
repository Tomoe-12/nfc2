"use client";

import { useState, useEffect, useRef } from "react";
import {
  Shield,
  Clock,
  Globe,
  Crown,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/sections/header";
import ImageSlider from "@/components/sections/imageSlider";
import Details from "@/components/sections/details";
import Care from "@/components/sections/care";
import SizeChart from "@/components/sections/sizeChart";
import CraftsmanDetails from "@/components/sections/craftsmanDetails";
import Contact from "@/components/sections/contact";
import Features from "@/components/sections/features";
import mainImg from "@/data/mainImg";
import Loading from "@/components/sections/loading";

export default function page() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showTransition, setShowTransition] = useState(false);
  const audioContext = useRef<AudioContext | null>(null);

  const productImages = [
    "/placeholder.svg?height=600&width=600&text=Product+Front",
    "/placeholder.svg?height=600&width=600&text=Product+Back",
    "/placeholder.svg?height=600&width=600&text=Product+Side",
    "/placeholder.svg?height=600&width=600&text=Product+Detail",
    "/placeholder.svg?height=600&width=600&text=Product+Lifestyle",
  ];

  // Loading screen effect
  useEffect(() => {
    // Initialize audio context
    audioContext.current = new (window.AudioContext ||
      (window as any).webkitAudioContext)();

    // Play sound effect
    const playSound = () => {
      if (!audioContext.current) return;

      const oscillator = audioContext.current.createOscillator();
      const gainNode = audioContext.current.createGain();

      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(
        440,
        audioContext.current.currentTime
      ); // A4 note
      gainNode.gain.setValueAtTime(0.1, audioContext.current.currentTime); // Adjust volume

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.current.destination);

      oscillator.start(audioContext.current.currentTime);
      oscillator.stop(audioContext.current.currentTime + 0.3); // Play for 0.3 seconds
    };

    playSound();

    // Simple timeout instead of animated progress
    const loadingTimeout = setTimeout(() => {
      setShowTransition(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }, 2000); // Show loading for 2 seconds

    return () => {
      clearTimeout(loadingTimeout);
      if (audioContext.current) {
        audioContext.current.close();
        audioContext.current = null;
      }
    };
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === productImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? productImages.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  // Loading Screen Component
  // if (isLoading) {
  //   return (
  //     <>
  //       <Loading showTransition={showTransition} />
  //       <style jsx global>{`
  //         .retro-screen {
  //           position: fixed;
  //           top: 0;
  //           left: 0;
  //           width: 100vw;
  //           height: 100vh;
  //           background: #c0c0c0;
  //           display: flex;
  //           align-items: center;
  //           justify-content: center;
  //           padding: 20px;
  //           font-family: "MS Sans Serif", "Tahoma", sans-serif;
  //           z-index: 9999;
  //           transition: opacity 1s ease-out;
  //         }

  //         .retro-screen.fade-out {
  //           opacity: 0;
  //         }

  //         .retro-window {
  //           width: 420px;
  //           max-width: 90vw;
  //           background: #c0c0c0;
  //           border: 2px outset #c0c0c0;
  //           box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
  //           animation: window-appear 0.8s ease-out;
  //           margin-top: 20px;
  //         }

  //         @keyframes window-appear {
  //           0% {
  //             opacity: 0;
  //             transform: scale(0.8) translateY(20px);
  //           }
  //           100% {
  //             opacity: 1;
  //             transform: scale(1) translateY(0);
  //           }
  //         }

  //         .retro-titlebar {
  //           background: linear-gradient(
  //             90deg,
  //             #0000ff 0%,
  //             #0040ff 50%,
  //             #0080ff 100%
  //           );
  //           color: white;
  //           display: flex;
  //           justify-content: space-between;
  //           align-items: center;
  //           font-size: 11px;
  //           font-weight: bold;
  //           height: 28px;
  //           margin-top: 12px;
  //           padding: 6px 10px;
  //         }

  //         .retro-title {
  //           font-size: 14px;
  //           font-weight: bold;
  //           letter-spacing: 0.8px;
  //         }

  //         .retro-controls {
  //           display: flex;
  //           gap: 2px;
  //         }

  //         .retro-control-btn {
  //           width: 20px;
  //           height: 18px;
  //           background: #c0c0c0;
  //           border: 1px outset #c0c0c0;
  //           display: flex;
  //           align-items: center;
  //           justify-content: center;
  //           cursor: pointer;
  //           transition: all 0.1s;
  //         }

  //         .retro-control-btn:hover {
  //           background: #d4d0c8;
  //         }

  //         .retro-control-btn:active {
  //           border: 1px inset #c0c0c0;
  //         }

  //         .minimize-icon {
  //           width: 6px;
  //           height: 1px;
  //           background: black;
  //           margin-bottom: 2px;
  //         }

  //         .maximize-icon {
  //           width: 6px;
  //           height: 6px;
  //           border: 1px solid black;
  //           background: transparent;
  //         }

  //         .close-icon {
  //           width: 8px;
  //           height: 8px;
  //           position: relative;
  //         }

  //         .close-icon::before,
  //         .close-icon::after {
  //           content: "";
  //           position: absolute;
  //           width: 8px;
  //           height: 1px;
  //           background: black;
  //           top: 50%;
  //           left: 0;
  //         }

  //         .close-icon::before {
  //           transform: rotate(45deg);
  //         }

  //         .close-icon::after {
  //           transform: rotate(-45deg);
  //         }

  //         .retro-content {
  //           padding: 55px 45px;
  //           text-align: center;
  //           background: #c0c0c0;
  //         }

  //         .retro-text {
  //           font-size: 20px;
  //           color: black;
  //           margin-bottom: 45px;
  //           font-weight: normal;
  //           letter-spacing: 0.5px;
  //         }

  //         .retro-loading-bar {
  //           display: flex;
  //           gap: 1px;
  //           justify-content: center;
  //           margin-bottom: 20px;
  //         }

  //         .loading-block {
  //           width: 14px;
  //           height: 18px;
  //           border: 1px solid #808080;
  //           transition: all 0.3s ease;
  //         }

  //         .loading-block.loaded {
  //           background: #0000ff;
  //           border-color: #0000aa;
  //           animation: block-fill 0.4s ease;
  //         }

  //         .loading-block.empty {
  //           background: white;
  //           border-color: #808080;
  //         }

  //         @keyframes block-fill {
  //           0% {
  //             background: white;
  //             transform: scale(1);
  //           }
  //           50% {
  //             transform: scale(1.1);
  //             background: #4444ff;
  //           }
  //           100% {
  //             background: #0000ff;
  //             transform: scale(1);
  //           }
  //         }
  //       `}</style>
  //     </>
  //   );
  // }

  // Main Product Page
  return (
    <>
      <div className="min-h-screen bg-black text-white main-content">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
          {/* Elegant Header */}
          <Header />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
            {/* Elegant Photo Section */}
            <ImageSlider
              productImages={mainImg.map(img => img.src)}
              currentImageIndex={currentImageIndex}
              setCurrentImageIndex={setCurrentImageIndex}
              prevImage={prevImage}
              nextImage={nextImage}
              goToImage={goToImage}
            />

            {/* Elegant Product Details */}
          <div className="space-y-6 sm:space-y-8">
             <Details />
             <Features/>
           </div>
          </div>

          {/* Redesigned Care Instructions */}
          <Care />

          {/* Elegant Size Chart */}
          <SizeChart />

          {/* Elegant Details Grid */}
          <div className="mt-8 sm:mt-12">
            <div className="luxury-card">
              <div className="p-4 sm:p-6 md:p-8">
                <h3 className="text-lg sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-400 flex items-center gap-3 mb-6 sm:mb-8 font-serif">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                  Craftsmanship Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="luxury-detail-item">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                        <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <span className="text-blue-200/80 font-light tracking-wide text-xs sm:text-sm">
                          Handcrafted Time
                        </span>
                        <div className="mt-1">
                          <Badge className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 text-blue-300 border-blue-500/30 font-light text-xs">
                            2-3 weeks
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="luxury-detail-item">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/30">
                        <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <span className="text-blue-200/80 font-light tracking-wide text-xs sm:text-sm">
                          Quality Assurance
                        </span>
                        <div className="mt-1">
                          <Badge className="bg-gradient-to-r from-green-500/20 to-green-600/20 text-green-300 border-green-500/30 font-light text-xs">
                            Master Approved
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="luxury-detail-item">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30">
                        <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <span className="text-blue-200/80 font-light tracking-wide text-xs sm:text-sm">
                          Origin
                        </span>
                        <div className="mt-1">
                          <Badge className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 text-purple-300 border-purple-500/30 font-light text-xs">
                            Handmade in Myanmar
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="luxury-detail-item">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/30">
                        <Crown className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <span className="text-blue-200/80 font-light tracking-wide text-xs sm:text-sm">
                          Limited Run
                        </span>
                        <div className="mt-1">
                          <Badge className="bg-gradient-to-r from-amber-500/20 to-amber-600/20 text-amber-300 border-amber-500/30 font-light text-xs">
                            One of 100 Exclusive Pieces
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Elegant Contact Section */}
          <Contact />
        </div>
      </div>

      <style jsx global>{`
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
          background: linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.8) 0%,
            rgba(20, 20, 20, 0.9) 100%
          );
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 20px;
          backdrop-filter: blur(20px);
          position: relative;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }

        .luxury-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(59, 130, 246, 0.1),
            transparent
          );
          animation: luxury-shimmer 4s infinite;
        }

        @keyframes luxury-shimmer {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }

        .luxury-border {
          border: 2px solid transparent;
          background: linear-gradient(
              45deg,
              rgba(59, 130, 246, 0.3),
              rgba(147, 197, 253, 0.2)
            )
            border-box;
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
          gap: 10px;
          padding: 12px;
          border-radius: 16px;
          background: linear-gradient(
            135deg,
            rgba(59, 130, 246, 0.05) 0%,
            rgba(147, 197, 253, 0.02) 100%
          );
          border: 1px solid rgba(59, 130, 246, 0.15);
          transition: all 0.5s ease;
        }

        @media (min-width: 640px) {
          .luxury-spec-item {
            gap: 16px;
            padding: 20px;
          }
        }

        .luxury-spec-item:hover {
          background: linear-gradient(
            135deg,
            rgba(59, 130, 246, 0.1) 0%,
            rgba(147, 197, 253, 0.05) 100%
          );
          border-color: rgba(59, 130, 246, 0.3);
          transform: translateY(-4px);
          box-shadow: 0 15px 35px rgba(59, 130, 246, 0.1);
        }

        .luxury-feature-card {
          text-align: center;
          padding: 16px 12px;
          border-radius: 16px;
          background: linear-gradient(
            135deg,
            rgba(59, 130, 246, 0.05) 0%,
            rgba(147, 197, 253, 0.02) 100%
          );
          border: 1px solid rgba(59, 130, 246, 0.15);
          transition: all 0.5s ease;
        }

        @media (min-width: 640px) {
          .luxury-feature-card {
            padding: 24px 16px;
          }
        }

        .luxury-feature-card:hover {
          background: linear-gradient(
            135deg,
            rgba(59, 130, 246, 0.1) 0%,
            rgba(147, 197, 253, 0.05) 100%
          );
          border-color: rgba(59, 130, 246, 0.3);
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 20px 40px rgba(59, 130, 246, 0.15);
        }

        .luxury-care-icon {
          width: 120px;
          height: 80px;
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          transition: all 0.5s ease;
          background: linear-gradient(
            135deg,
            rgba(59, 130, 246, 0.05) 0%,
            rgba(147, 197, 253, 0.02) 100%
          );
          padding: 8px;
        }

        .luxury-care-icon:hover {
          border-color: rgba(59, 130, 246, 0.4);
          box-shadow: 0 15px 30px rgba(59, 130, 246, 0.2);
          transform: scale(1.1) translateY(-2px);
        }

        .luxury-detail-item {
          padding: 16px;
          border-radius: 16px;
          background: linear-gradient(
            135deg,
            rgba(59, 130, 246, 0.05) 0%,
            rgba(147, 197, 253, 0.02) 100%
          );
          border: 1px solid rgba(59, 130, 246, 0.1);
          transition: all 0.5s ease;
        }

        @media (min-width: 640px) {
          .luxury-detail-item {
            padding: 24px;
          }
        }

        .luxury-detail-item:hover {
          background: linear-gradient(
            135deg,
            rgba(59, 130, 246, 0.08) 0%,
            rgba(147, 197, 253, 0.04) 100%
          );
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
          background: linear-gradient(
            135deg,
            rgba(59, 130, 246, 0.05) 0%,
            rgba(147, 197, 253, 0.02) 100%
          );
          border: 1px solid rgba(59, 130, 246, 0.1);
          transition: all 0.3s ease;
        }

        .luxury-sustainability-item:hover {
          background: linear-gradient(
            135deg,
            rgba(59, 130, 246, 0.08) 0%,
            rgba(147, 197, 253, 0.04) 100%
          );
          border-color: rgba(59, 130, 246, 0.2);
        }

        .luxury-contact-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          border-radius: 16px;
          background: linear-gradient(
            135deg,
            rgba(59, 130, 246, 0.05) 0%,
            rgba(147, 197, 253, 0.02) 100%
          );
          border: 1px solid rgba(59, 130, 246, 0.15);
          transition: all 0.5s ease;
        }

        @media (min-width: 640px) {
          .luxury-contact-item {
            gap: 16px;
            padding: 20px 24px;
          }
        }

        .luxury-contact-item:hover {
          background: linear-gradient(
            135deg,
            rgba(59, 130, 246, 0.1) 0%,
            rgba(147, 197, 253, 0.05) 100%
          );
          border-color: rgba(59, 130, 246, 0.3);
          box-shadow: 0 10px 25px rgba(59, 130, 246, 0.1);
        }

        .luxury-craft-stat {
          padding: 16px;
          border-radius: 16px;
          background: linear-gradient(
            135deg,
            rgba(59, 130, 246, 0.05) 0%,
            rgba(147, 197, 253, 0.02) 100%
          );
          border: 1px solid rgba(59, 130, 246, 0.1);
          transition: all 0.5s ease;
        }

        @media (min-width: 640px) {
          .luxury-craft-stat {
            padding: 20px;
          }
        }

        .luxury-craft-stat:hover {
          background: linear-gradient(
            135deg,
            rgba(59, 130, 246, 0.1) 0%,
            rgba(147, 197, 253, 0.05) 100%
          );
          border-color: rgba(59, 130, 246, 0.3);
          transform: translateY(-4px);
          box-shadow: 0 15px 35px rgba(59, 130, 246, 0.1);
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out 0.6s both;
        }

        .care-instruction-card {
          position: relative;
          backdrop-filter: blur(10px);
        }

        .care-instruction-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          transition: left 0.5s ease;
        }

        .care-instruction-card:hover::before {
          left: 100%;
        }
      `}</style>
    </>
  );
}
