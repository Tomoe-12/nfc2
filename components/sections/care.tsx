import React from "react";

const Care = () => {
  return (
    <div className="luxury-card mt-8 sm:mt-12">
      <div className="p-4 sm:p-6 md:p-8">
        <div className="text-center mb-6 sm:mb-10">
          <h3 className="text-lg sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-400 mb-2 sm:mb-4 font-serif">
            Care Instructions
          </h3>
          <p className="text-blue-200/70 text-xs sm:text-sm font-light tracking-wide max-w-md mx-auto">
            Follow these guidelines to maintain the premium quality and
            longevity of your garment
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[
            {
              icon: "🧺",
              title: "Machine Wash",
              description: "30°C gentle cycle",
              detail: "Use mild detergent and wash with similar colors",
              color: "from-blue-500/20 to-cyan-500/20",
              borderColor: "border-blue-500/30",
              iconBg: "bg-blue-500/20",
            },
            {
              icon: "△",
              title: "No Bleach",
              description: "Avoid chlorine bleach",
              detail: "Use oxygen-based bleach if necessary",
              color: "from-red-500/20 to-pink-500/20",
              borderColor: "border-red-500/30",
              iconBg: "bg-red-500/20",
            },
            {
              icon: "⬜",
              title: "Air Dry Only",
              description: "No tumble drying",
              detail: "Hang or lay flat to dry naturally",
              color: "from-orange-500/20 to-yellow-500/20",
              borderColor: "border-orange-500/30",
              iconBg: "bg-orange-500/20",
              crossed: true,
            },
            {
              icon: "🔥",
              title: "Iron Low Heat",
              description: "Maximum 110°C",
              detail: "Iron inside out to protect the fabric",
              color: "from-purple-500/20 to-indigo-500/20",
              borderColor: "border-purple-500/30",
              iconBg: "bg-purple-500/20",
            },
            {
              icon: "○",
              title: "Dry Clean Safe",
              description: "Professional cleaning",
              detail: "Recommended for best results",
              color: "from-green-500/20 to-emerald-500/20",
              borderColor: "border-green-500/30",
              iconBg: "bg-green-500/20",
            },
            {
              icon: "💧",
              title: "No Fabric Softener",
              description: "Maintains texture",
              detail: "Preserves the premium cotton feel",
              color: "from-teal-500/20 to-blue-500/20",
              borderColor: "border-teal-500/30",
              iconBg: "bg-teal-500/20",
            },
          ].map((care, index) => (
            <div
              key={index}
              className={`care-instruction-card group relative overflow-hidden rounded-2xl border ${care.borderColor} bg-gradient-to-br ${care.color} backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10`}
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative p-4 sm:p-6">
                {/* Icon container */}
                <div
                  className={`w-12 h-12 sm:w-16 sm:h-16 ${care.iconBg} rounded-2xl flex items-center justify-center mb-3 sm:mb-4 mx-auto relative overflow-hidden group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-xl sm:text-2xl relative z-10">
                    {care.icon}
                  </span>

                  {/* Crossed out effect for "Do Not Tumble Dry" */}
                  {care.crossed && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 sm:w-10 h-0.5 bg-red-400 rotate-45 shadow-lg shadow-red-400/50"></div>
                      <div className="w-8 sm:w-10 h-0.5 bg-red-400 -rotate-45 absolute shadow-lg shadow-red-400/50"></div>
                    </div>
                  )}

                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="text-center space-y-1 sm:space-y-2">
                  <h4 className="text-white font-semibold text-sm sm:text-lg tracking-wide">
                    {care.title}
                  </h4>
                  <p className="text-blue-200/80 text-xs sm:text-sm font-medium">
                    {care.description}
                  </p>
                  <p className="text-blue-200/60 text-xs font-light leading-relaxed hidden sm:block">
                    {care.detail}
                  </p>
                </div>

                {/* Hover indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional care tips */}
        <div className="mt-6 sm:mt-8 p-4 sm:p-6 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-blue-400 text-xs sm:text-sm">💡</span>
            </div>
            <div>
              <h5 className="text-white font-medium text-sm sm:text-base mb-1 sm:mb-2">
                Pro Care Tips
              </h5>
              <ul className="text-blue-200/70 text-xs sm:text-sm space-y-1 font-light">
                <li>• Store on padded hangers to maintain shape</li>
                <li>• Wash inside out to preserve color and print</li>
                <li>• Remove immediately after washing to prevent wrinkles</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Care;
