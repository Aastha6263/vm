import React from 'react';

export default function StaticBar() {
  return (
    <div
      className="w-full bg-black text-white text-xs sm:text-sm overflow-hidden"
      role="banner"
      aria-label="VMSS Technologies announcement"
    >
      <div className="relative flex items-center h-8">
        <div
          className="
            whitespace-nowrap
            animate-marquee
            tracking-wide
            font-medium
          "
        >
          🚀 Empowering Digital Innovation • AI • Cloud • Automation •
          Cybersecurity &nbsp;&nbsp;&nbsp;&nbsp; 🚀 Empowering Digital
          Innovation • AI • Cloud • Automation • Cybersecurity
        </div>
      </div>
    </div>
  );
}
