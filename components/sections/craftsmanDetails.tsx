import { Badge, Clock, Crown, Globe, Shield } from "lucide-react";
import React from "react";

const CraftsmanDetails = () => {
  return (
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
  );
};

export default CraftsmanDetails;
