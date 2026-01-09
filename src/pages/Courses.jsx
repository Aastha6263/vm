import { useState } from "react";
import {
  X,
  Terminal,
  Cloud,
  Cpu,
  Shield,
  Brain,
  Settings,
  Database,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "PowerShell Scripting & Automation",
    description:
      "Master Windows PowerShell and PowerShell Core with hands-on experience in scripting, task automation, system administration, and infrastructure management.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/af/PowerShell_Core_6.0_icon.png",
    courses: ["PowerShell Fundamentals"],
    icon: <Terminal className="w-6 h-6 text-blue-600" />,
  },
  {
    id: 2,
    title: "Cloud Computing & Infrastructure",
    description:
      "Master AWS, Azure, and Google Cloud platforms with real-world cloud architecture, deployment, and management.",
    image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
    courses: [
      "AWS Solutions Architect",
      "Azure Cloud Engineer",
      "Google Cloud Professional",
      "Cloud Security",
      "DevOps on Cloud",
    ],
    icon: <Cloud className="w-6 h-6 text-sky-600" />,
  },
  {
    id: 3,
    title: "Generative AI & Automation",
    description:
      "Explore cutting-edge generative AI technologies, automation frameworks, and intelligent process optimization.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    courses: ["Generative AI", "AI Automation", "Prompt Engineering"],
    icon: <Cpu className="w-6 h-6 text-purple-600" />,
  },
  {
    id: 4,
    title: "Salesforce & CRM Platforms",
    description:
      "Complete Salesforce training covering Admin, Development, and CRM best practices.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
    courses: ["Salesforce Admin", "Salesforce Development"],
    icon: <Database className="w-6 h-6 text-blue-500" />,
  },
  {
    id: 5,
    title: "Cybersecurity & Information Protection",
    description:
      "Advanced cybersecurity training covering threat analysis, penetration testing, security protocols, and risk management.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    courses: ["Cybersecurity Fundamentals", "Ethical Hacking"],
    icon: <Shield className="w-6 h-6 text-red-600" />,
  },
  {
    id: 6,
    title: "Artificial Intelligence & Machine Learning",
    description:
      "Dive into AI/ML algorithms, deep learning, neural networks, and practical implementations.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    courses: ["Machine Learning", "Deep Learning", "AI with Python"],
    icon: <Brain className="w-6 h-6 text-indigo-600" />,
  },
  {
    id: 7,
    title: "Digital IT Operations & DevOps",
    description:
      "Master DevOps practices, CI/CD pipelines, infrastructure as code, and modern IT operations.",
    image: "https://images.unsplash.com/photo-1600267165753-1c5b49a1a4f3",
    courses: ["DevOps Fundamentals", "CI/CD Pipelines"],
    icon: <Settings className="w-6 h-6 text-gray-700" />,
  },
  {
    id: 8,
    title: "ServiceNow Solutions",
    description:
      "Become a ServiceNow expert with workflow automation, ITSM best practices, and platform customization.",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc",
    courses: ["ServiceNow ITSM", "ServiceNow Development"],
    icon: <Settings className="w-6 h-6 text-green-600" />,
  },
];

const Courses = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Explore Services</h2>
        <p className="text-gray-600 mt-3 max-w-3xl mx-auto">
          Choose from comprehensive range of training programs to rapidly
          accelerate your workforce skills
        </p>
      </div>

      {/* 4x4 Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelected(item)}
            className="bg-white rounded-xl shadow hover:shadow-xl transition cursor-pointer overflow-hidden"
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="h-44 w-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-white p-2 rounded-full shadow">
                {item.icon}
              </div>
            </div>

            <div className="p-5">
              <h3 className="font-semibold text-sm">{item.title}</h3>
              <p className="text-xs text-gray-600 mt-2 line-clamp-3">
                {item.description}
              </p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-blue-600 text-xs">
                  {item.courses.length} Courses
                </span>
                <span className="text-gray-400">→</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-xl max-w-3xl w-full relative overflow-hidden">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 bg-white p-2 rounded-full shadow"
            >
              <X />
            </button>

            <img
              src={selected.image}
              alt={selected.title}
              className="h-56 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold">{selected.title}</h3>
              <p className="text-gray-600 mt-2">{selected.description}</p>

              <h4 className="mt-6 font-semibold">Available Courses</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                {selected.courses.map((c, i) => (
                  <div
                    key={i}
                    className="bg-gray-50 border rounded-lg p-3 text-sm"
                  >
                    ✔ {c}
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                  Explore Courses
                </button>
                <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50">
                  Contact for Details
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Courses;
