import { useEffect, useState } from 'react';

export default function Testimonials() {
  // 🔹 DATA (same file me hi)
  const testimonials = [
    {
      id: 1,
      name: 'Palak Singh',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      message:
        'Best institute offering AWS & Azure course. Trainers are very supportive.',
    },
    {
      id: 2,
      name: 'Reena Sinha',
      image: 'https://randomuser.me/api/portraits/women/47.jpg',
      message: 'Linux course trainers are highly qualified and very helpful.',
    },
    {
      id: 3,
      name: 'Amit Verma',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      message: 'Excellent learning environment with hands-on training.',
    },
    {
      id: 4,
      name: 'Sneha Patel',
      image: 'https://randomuser.me/api/portraits/women/65.jpg',
      message: 'Professional trainers and industry-level guidance.',
    },
    {
      id: 5,
      name: 'Rahul Sharma',
      image: 'https://randomuser.me/api/portraits/men/41.jpg',
      message: 'Very good support system and quality teaching.',
    },
  ];

  const [index, setIndex] = useState(0);

  // 🔹 Auto sliding (3 testimonials ek sath)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1 > testimonials.length - 3 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="bg-white py-20 px-6">
      {/* HEADING */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">TESTIMONIALS</h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto mt-3"></div>
      </div>

      {/* SLIDER */}
      <div className="overflow-hidden max-w-7xl mx-auto">
        <div
          className="flex gap-6 transition-transform duration-700"
          style={{
            transform: `translateX(-${index * 33.33}%)`,
          }}
        >
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="min-w-[33.33%] bg-gray-50 shadow rounded-xl p-6 flex gap-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-gray-600 text-sm mt-2">“{item.message}”</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
