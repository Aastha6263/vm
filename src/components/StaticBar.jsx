import React from 'react';

export default function StaticBar() {
  return (
    <div
      className="w-full bg-black text-white text-xs sm:text-sm"
      role="banner"
      aria-label="VMSS Technologies announcement"
    >
      <div className="max-w-7xl mx-auto px-4 h-8 flex items-center justify-center">
        <p className="tracking-wide font-medium">
          🚀 Empowering Digital Innovation • AI • Cloud • Automation •
          Cybersecurity
        </p>
      </div>
    </div>
  );
}
