import { useState } from 'react';
import TrainingFormModal from './TrainingFormModal';
import { useNavigate } from 'react-router-dom';

export default function HeroSection() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  const options = [
    'Become an Instructor',
    'Corporate Training',
    'Individual Training',
  ];

  const openForm = (label) => {
    setTitle(label);
    setOpen(true);
  };

  return (
    <section className="relative min-h-[80vh]">
      {/* IMAGE BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/image/Home.png')" }}
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 py-20">
        {/* TEXT (SAME SIZE + SAME STYLE + ANIMATION) */}
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-widest animate-techGlow">
          VMSS TECHNOLOGIES
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl">
          Empowering professionals with skills for the Future
        </p>

        {/* SEARCH */}
        <div className="mt-8 w-full max-w-xl">
          <div className="relative">
            <svg
              className="absolute left-3 top-3 text-gray-400 w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 21l-4.35-4.35"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="11"
                cy="11"
                r="6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <input
              className="w-full px-12 py-3 rounded-lg border border-gray-300 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search training programs..."
            />
          </div>
        </div>

        {/* separator */}
        <div className="w-full max-w-xl mt-8 border-t border-gray-300" />

        {/* options */}
        <div className="mt-6 w-full max-w-4xl px-2 md:px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            {options.map((opt) => (
              <div key={opt} className="flex-1 text-left">
                <button
                  onClick={() => openForm(opt)}
                  className="text-left w-full"
                >
                  <h3 className="text-lg md:text-xl font-bold text-white">
                    {opt}
                  </h3>
                </button>
              </div>
            ))}
          </div>

          {/* CTA STRIP (COMMENTED CORRECTLY) */}
          {/*
          <div className="mt-6">
            <div className="w-full max-w-2xl h-20 bg-gradient-to-r from-blue-600 to-transparent rounded-md flex items-center px-6">
              <button
                onClick={() => navigate('/courses')}
                className="bg-white text-blue-600 px-5 py-2 rounded mr-4"
              >
                Explore Services
              </button>

              <button className="border border-white/70 text-white px-5 py-2 rounded">
                Learn More
              </button>
            </div>
          </div>
          */}
        </div>
      </div>

      <TrainingFormModal
        open={open}
        title={title}
        onClose={() => setOpen(false)}
      />

      {/* ANIMATION CSS */}
      <style>
        {`
          @keyframes techGlow {
            0% {
              transform: translateY(18px);
              opacity: 0.7;
              text-shadow: 0 0 4px rgba(255,255,255,0.4);
            }
            50% {
              transform: translateY(0);
              opacity: 1;
              text-shadow:
                0 0 8px rgba(255,255,255,0.9),
                0 0 18px rgba(0,180,255,0.7);
            }
            100% {
              transform: translateY(-10px);
              opacity: 0.7;
              text-shadow: 0 0 4px rgba(255,255,255,0.4);
            }
          }

          .animate-techGlow {
            animation: techGlow 3.5s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
}
