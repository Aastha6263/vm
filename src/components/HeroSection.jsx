import { useState } from 'react';
import TrainingFormModal from './TrainingFormModal';
import { useNavigate, useLocation } from 'react-router-dom';
import { useScroll } from '../context/ScrollContext';

export default function HeroSection() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [query, setQuery] = useState('');
  const [notFound, setNotFound] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const {
    servicesRef,
    careersRef,
    industriesRef,
    testimonialsRef,
    contactRef,
    scrollTo,
  } = useScroll();

  const options = [
    'Become an Instructor',
    'Corporate Training',
    'Individual Training',
  ];

  const openForm = (label) => {
    setTitle(label);
    setOpen(true);
  };

  /* 🔥 WEBSITE-WIDE SEARCH */
  const handleSearch = () => {
    if (!query.trim()) return;

    const q = query.toLowerCase();

    // SECTION KEYWORDS
    const pages = {
      services: servicesRef,
      service: servicesRef,
      training: servicesRef,
      course: servicesRef,

      career: careersRef,
      job: careersRef,
      instructor: careersRef,

      industry: industriesRef,
      industries: industriesRef,

      review: testimonialsRef,
      testimonials: testimonialsRef,

      contact: contactRef,
      support: contactRef,
      help: contactRef,
    };

    // ALL COURSES / TECH WORDS ON YOUR WEBSITE
    const courseKeywords = [
      'aws',
      'azure',
      'google cloud',
      'cloud',
      'devops',
      'kubernetes',
      'terraform',
      'python',
      'java',
      'c',
      'c++',
      '.net',
      'javascript',
      'html',
      'css',
      'sql',
      'power bi',
      'linux',
      'windows',
      'cyber security',
      'ethical hacking',
      'rpa',
      'salesforce',
      'zoho',
      'servicenow',
      'splunk',
      'siem',
      'soc',
    ];

    // 1️⃣ First check section keywords
    const foundSection = Object.keys(pages).find((key) => q.includes(key));

    if (foundSection) {
      setNotFound(false);

      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => scrollTo(pages[foundSection]), 500);
      } else {
        scrollTo(pages[foundSection]);
      }
      return;
    }

    // 2️⃣ Then check courses & technologies
    const foundCourse = courseKeywords.find((course) => q.includes(course));

    if (foundCourse) {
      setNotFound(false);

      // all courses live inside Services section
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => scrollTo(servicesRef), 500);
      } else {
        scrollTo(servicesRef);
      }
      return;
    }

    // 3️⃣ If nothing matched → Not Found
    setNotFound(true);
    setTimeout(() => setNotFound(false), 3000);
  };

  return (
    <section className="relative min-h-[80vh]">
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/image/Home.png')" }}
      />
      <div className="absolute inset-0 bg-black/65" />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 py-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-widest animate-softUp">
          VMSS TECHNOLOGIES
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl">
          Empowering professionals with skills for the Future
        </p>

        {/* SEARCH */}
        <div className="mt-8 w-full max-w-xl">
          <div className="relative">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              className="w-full px-4 py-3 rounded-lg border bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search training programs..."
            />

            <button
              onClick={handleSearch}
              className="absolute right-2 top-2 bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700"
            >
              Search
            </button>
          </div>

          {notFound && (
            <p className="mt-2 text-red-400 font-semibold">
              No matching section found. Showing search results...
            </p>
          )}
        </div>

        {/* OPTIONS */}
        <div className="mt-10 w-full max-w-4xl px-2 md:px-6">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            {options.map((opt) => (
              <button
                key={opt}
                onClick={() => openForm(opt)}
                className="text-left text-lg md:text-xl font-bold text-white hover:text-blue-400 transition"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* MODAL */}
      <TrainingFormModal
        open={open}
        title={title}
        onClose={() => setOpen(false)}
      />

      <style>
        {`
        @keyframes softUp {
          0% { transform: translateY(10px); }
          50% { transform: translateY(0px); }
          100% { transform: translateY(-10px); }
        }
        .animate-softUp {
          animation: softUp 4s ease-in-out infinite;
        }
        `}
      </style>
    </section>
  );
}
