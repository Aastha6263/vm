import { useState } from 'react';

export default function TrustedBy() {
  const [companies] = useState([
    '/image/companins/adobe.png',
    '/image/companins/amazon.png',
    '/image/companins/capgemini.png',
    '/image/companins/cisco.png',
    '/image/companins/cognizant.png',
    '/image/companins/ebay.png',
    '/image/companins/google.png',
    '/image/companins/hp.png',
    '/image/companins/ibm.png',
    '/image/companins/infosys.png',
    '/image/companins/meta.png',
    '/image/companins/microsoft.png',
    '/image/companins/netflix.png',
    '/image/companins/oracle.png',
    '/image/companins/paypal.png',
    '/image/companins/salseforce.png',
    '/image/companins/samsung.png',
    '/image/companins/sap.png',
    '/image/companins/singtel.png',
    '/image/companins/swiggy.png',
    '/image/companins/tcs.png',
    '/image/companins/tech.png',
    '/image/companins/vmware.png',
    '/image/companins/wipro.png',
    '/image/companins/zoho.png',
    '/image/companins/dell.png',
    '/image/companins/airtel.png',
    '/image/companins/accenture.png',
    '/image/companins/ey.png',
    '/image/companins/kpmg.png',
  ]);

  const row1 = companies.slice(0, 15);
  const row2 = companies.slice(15);

  const LogoRow = ({ data, reverse }) => (
    <div className="relative w-full overflow-hidden mt-6">
      <div
        className={`flex gap-10 items-center whitespace-nowrap ${
          reverse ? 'animate-slide-reverse' : 'animate-slide'
        }`}
      >
        {[...data, ...data].map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center
                       min-w-[120px] h-14
                       bg-white rounded-md px-2 shadow-sm"
          >
            <img
              src={logo}
              alt="Company Logo"
              className="max-h-8 w-auto object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* 🔹 TOP MESSAGE */}
        <p className="text-gray-600 mb-4 text-sm uppercase tracking-wider">
          Our Alumni powering the world&apos;s leading organizations
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Trusted by 50+ companies and thousands of learners worldwide
        </h2>

        {/* 🔹 COMPANY SLIDER */}
        <div className="mt-14">
          <LogoRow data={row1} />
          <LogoRow data={row2} reverse />
        </div>

        {/* 🔹 STATS */}
        <div className="mt-20 grid gap-10 sm:grid-cols-3 text-center">
          <div>
            <h3 className="text-4xl font-bold text-blue-600">200+</h3>
            <p className="text-gray-600 mt-2">
              Emerging & Core Technology Training Programs
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-blue-600">1100+</h3>
            <p className="text-gray-600 mt-2">Learners Trained</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-blue-600">98%</h3>
            <p className="text-gray-600 mt-2">Success Rate</p>
          </div>
        </div>

        {/* 🌍 PROFESSIONAL MAP SECTION */}
        <div className="mt-28 relative">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 rounded-3xl" />

          {/* Content */}
          <div className="relative z-10 rounded-3xl px-10 py-16 text-white shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Global Reach, Expert Trainers, Skilled Talent Worldwide
            </h3>

            <p className="text-lg opacity-90 mb-2">
              Our Services are Available in Multiple Countries
            </p>

            <p className="text-xl font-semibold mb-4">
              USA, Canada, UK, Germany, Australia & India
            </p>

            <p className="text-sm opacity-80 mb-12">
              Quality Solutions • Anytime • Anywhere
            </p>

            {/* Map Card */}
            <div className="relative max-w-5xl mx-auto">
              <div className="absolute inset-0 bg-black/10 rounded-2xl blur-xl" />
              <div className="relative bg-white rounded-2xl p-6 shadow-2xl">
                <img
                  src="/image/world.jpeg"
                  alt="Global Reach Map"
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 ANIMATIONS */}
      <style>
        {`
          .animate-slide {
            animation: slide 35s linear infinite;
          }

          .animate-slide-reverse {
            animation: slideReverse 40s linear infinite;
          }

          @keyframes slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          @keyframes slideReverse {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
        `}
      </style>
    </section>
  );
}
