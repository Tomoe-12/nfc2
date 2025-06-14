"use client"
import { Award, Crown, Leaf, Radio, Shield, Sparkles } from "lucide-react";
import React from "react";

const Features = () => {
  return (
    <div className="luxury-card">
      <div className="p-4 sm:p-6 md:p-8">
        <h3 className="text-lg sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-400 flex items-center gap-3 mb-6 sm:mb-8 font-serif">
          <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
          Luxury Features
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 sm:gap-4">
          <div className="luxury-feature-card">
            <Leaf className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 mx-auto mb-2 sm:mb-3" />
            <p className="text-xs text-blue-200 font-light tracking-wider">
              Sustainable
            </p>
          </div>
          <div className="luxury-feature-card">
            <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400 mx-auto mb-2 sm:mb-3" />
            <p className="text-xs text-blue-200 font-light tracking-wider">
              Durable
            </p>
          </div>
          <div className="luxury-feature-card">
            <Crown className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 mx-auto mb-2 sm:mb-3" />
            <p className="text-xs text-blue-200 font-light tracking-wider">
              Premium
            </p>
          </div>
          <div className="luxury-feature-card">
            <Radio className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 mx-auto mb-2 sm:mb-3 animate-pulse" />
            <p className="text-xs text-blue-200 font-light tracking-wider">
              NFC Enabled
            </p>
          </div>
          <div className="luxury-feature-card">
            <Award className="w-6 h-6 sm:w-8 sm:h-8 text-rose-400 mx-auto mb-2 sm:mb-3" />
            <p className="text-xs text-blue-200 font-light tracking-wider">
              Certified
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
