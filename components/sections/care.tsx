"use client"
import { Expand ,X } from "lucide-react";
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
              icon: <Expand className="h-5 w-5 sm:h-7 sm:w-7" />,
              title: "Machine Wash Cold",
              description:
                "Gentle cycle, cold water, wash alone and inside out.",
              detail: "Protects fabric and prevents shrinking.",
              color: "from-blue-500/20 to-cyan-500/20",
              borderColor: "border-blue-500/30",
              iconBg: "bg-blue-500/20",
            },
            {
              icon: (
                <svg
                  version="1.1"
                  id="Layer_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 122.88 122.47"
                  className="h-6 w-6 sm:h-8 sm:w-8 fill-white"
                >
                  <g>
                    <path d="M65.45,2.3l21.31,36.28l27.47-26.15c1.65-1.57,4.27-1.51,5.84,0.15c1.57,1.65,1.51,4.27-0.15,5.84L91.05,45.89l31.26,53.22 c1.17,1.99,0.5,4.55-1.49,5.71c-0.66,0.39-1.39,0.57-2.11,0.57v0.02h-12.35l10.44,9.94c1.65,1.57,1.72,4.19,0.15,5.84 c-1.57,1.65-4.19,1.72-5.84,0.15l-16.72-15.92H28.52l-16.72,15.92c-1.65,1.57-4.27,1.51-5.84-0.15c-1.57-1.65-1.51-4.27,0.15-5.84 l10.44-9.94H4.19c-2.31,0-4.19-1.88-4.19-4.19c0-0.87,0.27-1.68,0.72-2.35l31.3-52.81L2.98,18.41c-1.65-1.57-1.72-4.19-0.15-5.84 c1.57-1.65,4.19-1.72,5.84-0.15l27.68,26.34L58.11,2.06c1.17-1.99,3.74-2.65,5.73-1.47C64.55,1.01,65.1,1.61,65.45,2.3L65.45,2.3z M85.58,97.03L61.45,74.06L37.32,97.03H85.58L85.58,97.03z M55.46,68.36L38.24,51.98L11.54,97.03h13.81L55.46,68.36L55.46,68.36z M42.56,44.69l18.88,17.98l19.09-18.18L61.7,12.4L42.56,44.69L42.56,44.69z M67.44,68.36l30.12,28.67h13.85L84.84,51.8L67.44,68.36 L67.44,68.36z" />
                  </g>
                </svg>
              ),
              title: "Mild Detergent, No Bleach",
              description: "Use mild detergent only if necessary.",
              detail: "Bleach damages fibers and color.",
              color: "from-red-500/20 to-pink-500/20",
              borderColor: "border-red-500/30",
              iconBg: "bg-red-500/20",
            },
            {
              icon: (
                <div className="relative flex items-center justify-center w-20 h-20 rounded-full ">
                  {/* cross */}
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <X className="w-9 h-9 sm:w-12 sm:h-12 stroke-1 text-white-500 " />
                  </div>

                  {/* icon */}
                  <svg
                    viewBox="0 0 512 333.567"
                    className="h-5 w-5 sm:h-7 sm:w-7"
                  >
                    <path
                      fill="#ffffff"
                      d="M88.077 97.366V83.454c0-22.973 9.379-43.838 24.497-58.957C127.693 9.378 148.559 0 171.531 0h168.938c22.972 0 43.838 9.378 58.956 24.497 15.119 15.119 24.498 35.984 24.498 58.957v13.912h14.301c8.113 0 15.239 2.696 20.676 7.384 5.082 4.382 8.599 10.463 9.975 17.663h.16c23.641 0 42.965 19.325 42.965 42.966v3.934c0 23.638-19.326 42.965-42.965 42.965-143.89 0-287.806-.239-431.705-.372C16.33 209.127 0 191.044 0 169.313v-3.934c0-23.643 19.323-42.966 42.965-42.966h.163c2.885-15.096 15.143-25.047 30.649-25.047h14.3zM449.838 226.66l11.542 63.495c2.256 14.087.639 24.645-4.842 31.975-5.582 7.465-14.677 11.161-27.287 11.404a5.732 5.732 0 01-.618.033h-8.692l-5.295-65.248c-.329-4.128-3.541-7.171-7.173-6.797-3.632.373-6.31 4.022-5.981 8.15l5.185 63.895h-30.719l-5.295-65.248c-.329-4.128-3.54-7.171-7.172-6.797-3.633.373-6.31 4.022-5.982 8.15l5.186 63.895h-32.374l-3.07-64.847c-.186-4.143-3.293-7.331-6.939-7.12-3.646.211-6.452 3.741-6.266 7.885l3.034 64.082h-31.876l-3.069-64.847c-.186-4.143-3.293-7.331-6.94-7.12-3.646.211-6.451 3.741-6.265 7.885l3.034 64.082h-31.398l-1.651-64.778c-.1-4.143-3.137-7.41-6.783-7.297-3.647.114-6.522 3.566-6.422 7.709l1.64 64.366h-31.985l-.174-64.572c0-4.143-2.957-7.503-6.603-7.503s-6.602 3.36-6.602 7.503l.174 64.572h-32.625l5.185-63.895c.328-4.128-2.349-7.777-5.982-8.15-3.632-.374-6.843 2.669-7.172 6.797l-5.295 65.248H105.47l5.186-63.895c.328-4.128-2.349-7.777-5.982-8.15-3.632-.374-6.843 2.669-7.172 6.797l-5.295 65.248h-11.35v-.023c-.176 0-.353-.008-.531-.024-13.875-1.282-22.314-5.983-26.882-13.859-6.249-10.776-3.498-24.175-1.341-35.852l10.618-57.506 387.117.357zM378.001 97.366V83.454c0-10.298-4.232-19.679-11.043-26.49-6.81-6.81-16.191-11.043-26.489-11.043H171.531c-10.298 0-19.679 4.233-26.489 11.043-6.811 6.811-11.043 16.192-11.043 26.49v13.912h244.002z"
                    />
                  </svg>
                </div>
              ),
              title: "Avoid Abrasives",
              description: "Do not use brushes or abrasive materials.",
              detail: "Can damage fabric surface and structure.",
              color: "from-orange-500/20 to-yellow-500/20",
              borderColor: "border-orange-500/30",
              iconBg: "bg-orange-500/20",
            },
            {
              icon: (
                <svg
                  width="500"
                  zoomAndPan="magnify"
                  viewBox="0 0 375 374.999991"
                  height="500"
                  preserveAspectRatio="xMidYMid meet"
                  version="1.2"
                  className="h-5 w-5 sm:h-7 sm:w-7 fill-white"
                >
                  <g id="e51eba772b">
                    <path
                      style={{
                        stroke: "none",
                        fillRule: "nonzero",
                        fill: "#ffffff",
                        fillOpacity: 1,
                      }}
                      d="M 374.9375 361.519531 L 374.9375 13.390625 C 374.9375 5.355469 369.582031 0 361.546875 0 L 13.417969 0 C 5.382812 0 0.0273438 5.355469 0.0273438 13.390625 L 0.0273438 361.519531 C 0.0273438 369.554688 5.382812 374.910156 13.417969 374.910156 L 361.546875 374.910156 C 369.582031 374.910156 374.9375 368.214844 374.9375 361.519531 Z M 342.800781 26.777344 C 326.734375 52.21875 267.820312 77.660156 187.480469 77.660156 C 107.144531 77.660156 48.230469 53.558594 32.164062 26.777344 Z M 348.15625 348.128906 L 26.804688 348.128906 L 26.804688 60.253906 C 58.941406 87.03125 116.515625 104.4375 187.480469 104.4375 C 258.445312 104.4375 316.023438 87.03125 348.15625 60.253906 Z M 348.15625 348.128906 "
                    />
                  </g>
                </svg>
              ),
              title: "Air Dry Only",
              description: "Hang or lay flat to air dry. Do not tumble dry.",
              detail:
                "High heat can damage synthetic fibers and alter garment shape.",
              color: "from-green-500/20 to-lime-500/20",
              borderColor: "border-green-500/30",
              iconBg: "bg-green-500/20",
            },
            {
              icon: (
                <svg
                  width="500"
                  zoomAndPan="magnify"
                  viewBox="0 0 375 374.999991"
                  height="500"
                  preserveAspectRatio="xMidYMid meet"
                  version="1.2"
                  className="h-5 w-5 sm:h-7 sm:w-7 fill-white"
                >
                  <g id="7806a9feaf">
                    <path
                      style={{
                        stroke: "none",
                        fillRule: "nonzero",
                        fill: "#ffffff",
                        fillOpacity: 1,
                      }}
                      d="M 335.167969 108.214844 C 335.167969 108.214844 335.097656 108.214844 335.054688 108.214844 L 106.550781 105.800781 C 100.886719 105.742188 96.34375 101.101562 96.402344 95.4375 C 96.464844 89.804688 101.042969 85.289062 106.664062 85.289062 C 106.707031 85.289062 106.738281 85.289062 106.777344 85.289062 L 335.28125 87.703125 C 340.945312 87.761719 345.492188 92.402344 345.429688 98.066406 C 345.367188 103.699219 340.792969 108.214844 335.167969 108.214844 Z M 335.167969 108.214844 "
                    />
                    <path
                      style={{
                        stroke: "none",
                        fillRule: "nonzero",
                        fill: "#ffffff",
                        fillOpacity: 1,
                      }}
                      d="M 362.523438 325.214844 C 357.414062 325.214844 352.992188 321.40625 352.355469 316.203125 L 325.613281 99.417969 C 324.917969 93.796875 328.917969 88.675781 334.542969 87.980469 C 340.15625 87.292969 345.285156 91.28125 345.984375 96.90625 L 372.722656 313.691406 C 373.421875 319.3125 369.417969 324.433594 363.796875 325.132812 C 363.367188 325.183594 362.945312 325.214844 362.523438 325.214844 Z M 362.523438 325.214844 "
                    />
                    <path
                      style={{
                        stroke: "none",
                        fillRule: "nonzero",
                        fill: "#ffffff",
                        fillOpacity: 1,
                      }}
                      d="M 362.535156 326.414062 L 362.460938 326.414062 L 13.75 324.003906 C 8.085938 323.960938 3.519531 319.335938 3.5625 313.671875 C 3.601562 308.007812 8.21875 303.410156 13.894531 303.480469 L 362.605469 305.890625 C 368.269531 305.933594 372.835938 310.5625 372.796875 316.226562 C 372.753906 321.867188 368.167969 326.414062 362.535156 326.414062 Z M 362.535156 326.414062 "
                    />
                    <path
                      style={{
                        stroke: "none",
                        fillRule: "nonzero",
                        fill: "#ffffff",
                        fillOpacity: 1,
                      }}
                      d="M 12.644531 321.601562 C 11.945312 321.601562 11.238281 321.53125 10.53125 321.386719 C 4.976562 320.226562 1.429688 314.789062 2.585938 309.246094 C 6.652344 289.804688 14.378906 271.855469 25.5625 255.890625 C 46.277344 226.308594 73.265625 211.410156 92.269531 204.125 C 97.5625 202.089844 103.496094 204.738281 105.527344 210.035156 C 107.558594 215.328125 104.910156 221.257812 99.617188 223.289062 C 83.289062 229.550781 60.109375 242.324219 42.371094 267.671875 C 32.796875 281.347656 26.167969 296.761719 22.667969 313.464844 C 21.652344 318.308594 17.394531 321.632812 12.632812 321.632812 Z M 12.644531 321.601562 "
                    />
                    <path
                      style={{
                        stroke: "none",
                        fillRule: "nonzero",
                        fill: "#ffffff",
                        fillOpacity: 1,
                      }}
                      d="M 98.160156 223.949219 C 92.496094 223.949219 87.898438 219.359375 87.898438 213.695312 C 87.898438 208.03125 92.484375 203.4375 98.148438 203.425781 L 342.003906 203.28125 C 347.667969 203.28125 352.261719 207.867188 352.261719 213.53125 C 352.261719 219.195312 347.675781 223.792969 342.011719 223.804688 Z M 98.160156 223.949219 "
                    />
                    <path
                      style={{
                        stroke: "none",
                        fillRule: "nonzero",
                        fill: "#ffffff",
                        fillOpacity: 1,
                      }}
                      d="M 325.492188 375.78125 C 322.351562 375.78125 319.242188 374.34375 317.230469 371.613281 L 54.929688 16.625 C 51.5625 12.066406 52.527344 5.644531 57.082031 2.269531 C 61.640625 -1.097656 68.0625 -0.132812 71.4375 4.421875 L 333.730469 359.414062 C 337.097656 363.96875 336.132812 370.394531 331.578125 373.769531 C 329.738281 375.125 327.605469 375.78125 325.492188 375.78125 Z M 325.492188 375.78125 "
                    />
                    <path
                      style={{
                        stroke: "none",
                        fillRule: "nonzero",
                        fill: "#ffffff",
                        fillOpacity: 1,
                      }}
                      d="M 38.46875 375.882812 C 36.347656 375.882812 34.210938 375.226562 32.375 373.871094 C 27.820312 370.496094 26.855469 364.074219 30.230469 359.515625 L 292.757812 4.691406 C 296.125 0.132812 302.558594 -0.832031 307.113281 2.546875 C 311.671875 5.921875 312.636719 12.34375 309.257812 16.902344 L 46.730469 371.726562 C 44.71875 374.445312 41.621094 375.882812 38.46875 375.882812 Z M 38.46875 375.882812 "
                    />
                  </g>
                </svg>
              ),
              title: "Do Not Iron",
              description: "Do not iron the garment.",
              detail: "Ironing can melt or damage fabric..",
              color: "from-purple-500/20 to-indigo-500/20",
              borderColor: "border-purple-500/30",
              iconBg: "bg-purple-500/20",
            },
            {
              icon: (
                <svg
                  width="500"
                  zoomAndPan="magnify"
                  viewBox="0 0 375 374.999991"
                  height="500"
                  preserveAspectRatio="xMidYMid meet"
                  version="1.2"
                   className="h-6 w-6 sm:h-8 sm:w-8"
                >
                  <defs>
                    <clipPath id="5db86cad04">
                      <path d="M 0 55 L 375 55 L 375 322.632812 L 0 322.632812 Z M 0 55 " />
                    </clipPath>
                  </defs>
                  <g id="dd4f4a5a92">
                    <g>
                      <path
                        style={{
                          stroke: "none",
                          fillRule: "nonzero",
                          fill: "#ffffff",
                          fillOpacity: 1,
                        }}
                        d="M 373.867188 270.34375 C 372.800781 255.367188 362.40625 241.660156 348.367188 236.445312 C 299.179688 217.644531 250.144531 198.46875 200.898438 179.882812 C 200.878906 172.871094 199.203125 163.613281 206.425781 159.414062 C 213.972656 155.816406 221.402344 151.570312 226.945312 145.171875 C 240.203125 130.902344 244.53125 109.09375 237.585938 90.871094 C 229.605469 67.835938 204.355469 52.644531 180.242188 56.429688 C 153.761719 59.546875 131.921875 85.277344 134.519531 112.027344 C 136.320312 121.367188 148.976562 125.636719 156.023438 119.21875 C 162.933594 114.058594 159.457031 104.546875 163.269531 97.800781 C 168.785156 85.257812 184.566406 78.414062 197.378906 83.695312 C 209.839844 88.125 217.179688 102.613281 213.820312 115.339844 C 211.84375 123.75 205.460938 130.75 197.445312 133.878906 C 186.824219 138.394531 178.539062 147.96875 175.5625 159.109375 C 173.542969 165.808594 174.398438 172.851562 173.996094 179.734375 C 124.832031 198.105469 75.960938 217.355469 26.890625 236.078125 C 12.636719 241.238281 2.0625 255.183594 1.09375 270.34375 C 0.757812 279.464844 0.246094 289.046875 4.027344 297.605469 C 9.9375 312.160156 25.097656 322.367188 40.835938 322.160156 L 162.472656 322.160156 L 162.472656 295.507812 C 121.867188 295.507812 81.277344 295.507812 40.671875 295.472656 C 33.675781 295.605469 27.441406 289.261719 27.628906 282.28125 C 27.679688 276.9375 26.628906 270.90625 29.941406 266.257812 C 32.425781 262.359375 37.054688 261.011719 41.117188 259.449219 C 88.449219 241.34375 135.722656 223.023438 183.074219 204.949219 C 186.238281 203.648438 189.769531 204.003906 192.902344 205.265625 C 241.339844 223.921875 289.792969 242.527344 338.242188 261.144531 C 343.554688 262.894531 347.472656 268.125 347.351562 273.765625 C 347.300781 279.097656 348.351562 285.09375 345.050781 289.742188 C 342.335938 293.871094 337.273438 295.886719 332.441406 295.519531 C 292.464844 295.488281 252.476562 295.488281 212.507812 295.488281 L 212.507812 322.152344 L 334.09375 322.152344 C 349.863281 322.367188 365.035156 312.171875 370.953125 297.585938 C 374.714844 289.023438 374.234375 279.464844 373.867188 270.34375 Z M 373.867188 270.34375 "
                      />
                    </g>
                  </g>
                </svg>
              ),
              title: "Proper Storage",
              description:
                "Hang on a hanger instead of folding for long-term storage.",
              detail: "Maintains shape and prevents creases in the fabric.",
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

              <div className="relative p-4 sm:p-6 h-full ">
                {/* Icon container */}
                <div
                  className={`w-12 h-12 sm:w-16 sm:h-16 ${care.iconBg} rounded-2xl flex items-center justify-center mb-3 sm:mb-4 mx-auto relative overflow-hidden group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-xl sm:text-2xl relative z-10">
                    {care.icon}
                  </span>

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
                <li>
                  • Avoid using fabric softeners to maintain breathability
                </li>
                <li>• If air-drying, lay flat or hang to avoid stretching</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Care;
