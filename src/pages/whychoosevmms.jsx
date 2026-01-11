import {
  User,
  Wrench,
  Building2,
  MoveDiagonal,
  BadgeCheck,
  Infinity,
  Headphones,
} from 'lucide-react';

/* ========== DATA ========== */

// TOP 4 (Upper)
const topFeatures = [
  {
    icon: User,
    title: 'Corporate Training',
    desc: 'Enterprise-grade IT training programs designed to upskill teams with job-ready capabilities aligned to business objectives.',
  },
  {
    icon: MoveDiagonal,
    title: 'Flexible Learning Schedules',
    desc: 'Training programs tailored for corporate timelines, shift-based teams, and global work schedules.',
  },
  {
    icon: Wrench,
    title: 'Post-Training Support',
    desc: 'Continued assistance after training including doubt resolution, mentorship, and real-world implementation guidance.',
  },
  {
    icon: Building2,
    title: 'Customized Corporate Training',
    desc: 'Role-based and technology-specific modules customized to your organization’s tools, processes, and business needs.',
  },
];

// BOTTOM 3 (Lower)
const bottomFeatures = [
  {
    icon: BadgeCheck,
    title: 'Expert Industry Trainers',
    desc: 'Learn from certified trainers with extensive industry experience and real-time project exposure.',
  },
  {
    icon: Infinity,
    title: 'Lifetime Learning Access',
    desc: 'Lifetime access to learning materials, session recordings, and content updates.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    desc: 'Dedicated support team available round-the-clock to assist learners and corporate clients across time zones.',
  },
];

/* ========== COMPONENT ========== */

export default function Services() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* 🔵 DYNAMIC BANNER */}
        <div className="mb-16 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 p-10 text-white shadow-lg">
          <h2 className="text-3xl font-bold">
            🎉 80% Discount on Corporate Training
          </h2>
          <p className="mt-3 text-blue-100">
            Limited-time offer on enterprise-level corporate training programs.
          </p>
        </div>

        {/* HEADING */}
        <h2 className="text-3xl font-bold text-gray-900">
          Why Choose <span className="text-blue-600">VMSS Technologies</span>
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          We deliver structured, scalable, and industry-aligned training
          solutions that bridge the gap between learning and real-world
          execution.
        </p>

        {/* 🔹 TOP 4 FEATURES */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {topFeatures.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group rounded-xl p-6 text-center transition-all duration-300
                           hover:-translate-y-2 hover:bg-blue-50 hover:shadow-xl"
              >
                <div
                  className="mx-auto mb-4 flex h-14 w-14 items-center justify-center
                                rounded-full bg-blue-100 transition
                                group-hover:bg-blue-600"
                >
                  <Icon className="h-6 w-6 text-blue-600 group-hover:text-white transition" />
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* 🔹 BOTTOM 3 FEATURES */}
        <div className="mt-16 rounded-2xl bg-blue-50 px-6 py-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {bottomFeatures.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="group rounded-xl p-6 text-center transition-all duration-300
                             hover:-translate-y-2 hover:bg-white hover:shadow-xl"
                >
                  <div
                    className="mx-auto mb-4 flex h-12 w-12 items-center justify-center
                                  rounded-full bg-blue-600 transition
                                  group-hover:bg-blue-700"
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
