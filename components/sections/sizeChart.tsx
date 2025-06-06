import { Globe } from 'lucide-react'
import React from 'react'

const SizeChart = () => {
  return (
     <div className="luxury-card mt-8 sm:mt-12">
            <div className="p-4 sm:p-6 md:p-8">
              <h3 className="text-lg sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-400 flex items-center gap-3 mb-6 sm:mb-8 font-serif">
                <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                Size Chart
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-blue-500/20">
                      <th className="text-left p-3 sm:p-6 text-blue-200 font-light tracking-wider text-xs sm:text-sm">
                        Size
                      </th>
                      <th className="text-left p-3 sm:p-6 text-blue-200 font-light tracking-wider text-xs sm:text-sm">
                        Shoulder
                      </th>
                      <th className="text-left p-3 sm:p-6 text-blue-200 font-light tracking-wider text-xs sm:text-sm">
                        Chest
                      </th>
                      <th className="text-left p-3 sm:p-6 text-blue-200 font-light tracking-wider text-xs sm:text-sm">
                        Sleeve
                      </th>
                      <th className="text-left p-3 sm:p-6 text-blue-200 font-light tracking-wider text-xs sm:text-sm">
                        Length
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-blue-500/5 transition-colors border-b border-blue-500/10">
                      <td className="p-3 sm:p-6 text-white font-semibold text-sm sm:text-lg">
                        S
                      </td>
                      <td className="p-3 sm:p-6 text-white font-light text-sm">
                        21"
                      </td>
                      <td className="p-3 sm:p-6 text-white font-light text-sm">
                        23"
                      </td>
                      <td className="p-3 sm:p-6 text-white font-light text-sm">
                        10"
                      </td>
                      <td className="p-3 sm:p-6 text-white font-light text-sm">
                        29"
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
  )
}

export default SizeChart