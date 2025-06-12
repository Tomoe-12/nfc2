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
} from "lucide-react";
import React from "react";

// Data object for product specifications


const Details = () => {
  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Premium Specifications */}
      <div className="luxury-card">
        <div className="p-4 sm:p-6 md:p-8">
          <h3 className="text-lg sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-400 flex items-center gap-3 mb-6 sm:mb-8 font-serif">
            <Gem className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
            Product Specifications
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-3 sm:gap-6">
            {productDetails.map((item) => (
              <div key={item.id} className="luxury-spec-item">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <p className="text-blue-200/70 text-xs sm:text-sm font-light tracking-wide">
                    {item.label}
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="text-white font-semibold text-xs sm:text-lg">
                      {item.value}
                    </p>
                    {item.hasLink && (
                      <Link className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 hover:text-blue-300 transition-colors" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Details;
