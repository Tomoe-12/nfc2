import { Mail, Phone, Facebook, Instagram } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

const Contact = () => {
  return (
    <div className="luxury-card mt-8 sm:mt-12">
      <div className="p-4 sm:p-8 md:p-12">
        <h2 className="text-lg sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-400 mb-3 sm:mb-6 font-serif">
          Concierge Service
        </h2>
        <p className="text-blue-200/80 mb-6 sm:mb-10 font-light tracking-wide text-xs sm:text-base">
          Our luxury concierge team is at your service for any inquiries
        </p>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-12">
          <div className="space-y-4 sm:space-y-6">
            <div className="luxury-contact-item">
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
              <span className="text-white font-light tracking-wide text-sm">
                +959785146940
              </span>
            </div>
            <div className="luxury-contact-item">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
              <span className="text-white font-light tracking-wide text-sm">
                sanshin739@gmail.com
              </span>
            </div>
          </div>

          <div>
            <p className="text-blue-200/80 mb-4 sm:mb-6 font-light tracking-wider text-sm">
              Follow Our Journey
            </p>
            <div className="flex gap-4 sm:gap-6">
              {[
                { icon: Facebook, color: "text-blue-400" },
                { icon: Instagram, color: "text-blue-400" },
                { icon: "T", color: "text-blue-400" },
              ].map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className={`${social.color} hover:text-white hover:scale-110 transform transition-all duration-500 border border-blue-500/20 hover:border-blue-400/50 hover:bg-blue-500/10 w-10 h-10 sm:w-12 sm:h-12`}
                >
                  {typeof social.icon === "string" ? (
                    <span className="text-lg sm:text-xl font-bold font-serif  ">
                      {social.icon}
                    </span>
                  ) : (
                    <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  )}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
