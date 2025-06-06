import React from "react";
import { Button } from "../ui/button";
import { Expand } from "lucide-react";

const Header = () => {
  return (
    <div className="luxury-card mb-8 sm:mb-12">
      <div className="p-4 sm:p-6 md:p-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-6">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-2xl shadow-blue-500/30 luxury-glow">
              <div className="text-white font-bold text-lg sm:text-2xl font-serif">
                S
              </div>
            </div>
            <div>
              <h1 className="text-xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-blue-400 font-serif tracking-wide">
                SanShin
              </h1>
              <p className="text-blue-200/80 text-xs sm:text-base font-light tracking-wider">
                Luxury Collection
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-blue-300 hover:text-white transition-all duration-300 hover:bg-blue-500/20 border border-blue-500/30 hover:border-blue-400"
          >
            <Expand className="h-4 w-4 sm:h-6 sm:w-6" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
