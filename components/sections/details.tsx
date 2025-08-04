"use client";
import productDetails from "@/data/productDetail";
import {
  Calendar,
  Expand,
  Palette,
  Shirt,
  Package,
  Store,
  Link,
  Gem,
  ExternalLinkIcon,
} from "lucide-react";
import { useSearchParams } from "next/navigation";
import React from "react";

// Data object for product specifications

const Details = () => {
  const params = useSearchParams();
  const size = params.get("s") ?? "M";
  const url = params.get("u") ?? "@sanshin.offical";
  const sf = params.get("sf") ?? "SanShin";
  console.log("url", size);

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="luxury-card">
        <div className="p-4 sm:p-6 md:p-8">
          <h3 className="text-lg sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-400 flex items-center gap-3 mb-6 sm:mb-8 font-serif">
            <Gem className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
            Product Specifications
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-3 sm:gap-6">
            {productDetails.map((item) => {
              let displayValue = item.value;
              if (item.label === "Size") {
                displayValue = size;
              } else if (item.label === "Purchased From") {
                displayValue = sf; 
              }
              return (
                <div key={item.id} className="luxury-spec-item cursor-pointer">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-blue-200/70 text-xs sm:text-sm font-light tracking-wide">
                      {item.label}
                    </p>
                    <div className="flex items-center gap-2">
                      <p className="text-white font-semibold text-xs sm:text-lg">
                       {displayValue}
                      </p>
                      {item.hasLink && (
                        <a
                          href={`https://www.tiktok.com/${url}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className=" w-4 h-4 sm:w-5 sm:h-5 text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          <Link className="w-full h-full" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
