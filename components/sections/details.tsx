import {
  Award,
  Calendar,
  Crown,
  Expand,
  Gem,
  Leaf,
  Link,
  Package,
  Palette,
  Shield,
  Shirt,
  Sparkles,
  Store,
} from "lucide-react";
import React from "react";

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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
            {/* <div className="luxury-spec-item">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Package className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <p className="text-blue-200/70 text-xs sm:text-sm font-light tracking-wide">
                  Product Number
                </p>
                <p className="text-white font-semibold text-sm sm:text-lg">
                  001
                </p>
              </div>
            </div> */}

            <div className="luxury-spec-item">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <p className="text-blue-200/70 text-xs sm:text-sm font-light tracking-wide">
                  Launch Date
                </p>
                <p className="text-white font-semibold text-sm sm:text-lg">
                  2025-2-12
                </p>
              </div>
            </div>

            <div className="luxury-spec-item">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Expand className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <p className="text-blue-200/70 text-xs sm:text-sm font-light tracking-wide">
                  Size
                </p>
                <p className="text-white font-semibold text-sm sm:text-lg">S</p>
              </div>
            </div>

            <div className="luxury-spec-item">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Palette className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <p className="text-blue-200/70 text-xs sm:text-sm font-light tracking-wide">
                  Color
                </p>
                <p className="text-white font-semibold text-sm sm:text-lg">
                  Midnight Black
                </p>
              </div>
            </div>

            <div className="luxury-spec-item">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Shirt className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <p className="text-blue-200/70 text-xs sm:text-sm font-light tracking-wide">
                  Material
                </p>
                <p className="text-white font-semibold text-sm sm:text-lg">
                  Premium Cotton
                </p>
              </div>
            </div>

            <div className="luxury-spec-item">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Package className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <p className="text-blue-200/70 text-xs sm:text-sm font-light tracking-wide">
                  Weight
                </p>
                <p className="text-white font-semibold text-sm sm:text-lg">
                  180g
                </p>
              </div>
            </div>

            <div className="luxury-spec-item">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Store className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <p className="text-blue-200/70 text-xs sm:text-sm font-light tracking-wide">
                  Atelier
                </p>
                <div className="flex items-center gap-2">
                  <p className="text-white font-semibold text-sm sm:text-lg">
                    SanShin
                  </p>
                  <Link className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 hover:text-blue-300 transition-colors" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Details;
