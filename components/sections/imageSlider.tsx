"use client"
import React from "react";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight, Crown } from "lucide-react";
import { Badge } from "../ui/badge";
import Image from "next/image";

type ImageSliderProps = {
  productImages: string[];
  currentImageIndex: number;
  setCurrentImageIndex: (index: number) => void;
  prevImage: () => void;
  nextImage: () => void;
  goToImage: (index: number) => void;
};

const ImageSlider = ({
  productImages,
  currentImageIndex,
  setCurrentImageIndex,
  prevImage,
  nextImage,
  goToImage,
}: ImageSliderProps) => {
  return (
    <div className="space-y-4 sm:space-y-6">
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
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-500 ${
                index === currentImageIndex
                  ? "bg-blue-400 scale-125 shadow-lg shadow-blue-400/50"
                  : "bg-blue-400/30 hover:bg-blue-400/60"
              }`}
              onClick={() => goToImage(index)}
            />
          ))}
        </div>

        {/* Elegant Counter */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-black/60 backdrop-blur-md rounded-full px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm border border-blue-500/30 text-blue-200 font-light">
          {currentImageIndex + 1} of {productImages.length}
        </div>

        {/* Premium Badge */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
          <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold px-2 py-1 text-xs sm:text-sm shadow-lg">
            <Crown className="w-3 h-3 mr-1" />
            Premium
          </Badge>
        </div>
      </div>

      {/* Elegant Thumbnail Images */}
      <div className="grid grid-cols-5 gap-1 sm:gap-3">
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
              priority
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
