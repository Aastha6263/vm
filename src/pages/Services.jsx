import { useState, useEffect, useCallback } from 'react';
import { X } from 'lucide-react';
// import courses from "./Data/coursesData";
// import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

// 🔥 Route to full course page (CourseDetails)
// const goToFullCourse = (courseName) => {
//   const slug =
//     courseSlugMap[courseName] ||
//     courseName
//       .toLowerCase()
//       .replace(/[^a-z0-9 ]/g, '')
//       .replace(/\s+/g, '-');

//   closeAll();
//   navigate(`/course/${slug}`);
// };

// {
//   active.courses.map((c, i) => (
//     <div
//       key={i}
//       onClick={() => goToFullCourse(c)}
//       className="bg-gray-50 p-3 rounded text-sm cursor-pointer hover:bg-blue-50 hover:text-blue-600 transition"
//     >
//       ✔ {c}
//     </div>
//   ));
// }

/* ================= SERVICES DATA ================= */
const services = [
  {
    id: 1,
    courseId: 'powershell',
    title: 'PowerShell Scripting & Automation',
    image: '/image/powershell.png',
    description:
      'Master Windows PowerShell and PowerShell Core with hands-on experience in scripting, task automation, system administration and infrastructure management.',
    courses: [
      'Advanced PowerShell Scripting',
      'PowerShell Automation & DevOps',
      'PowerShell for Cloud & Infrastructure',
      'PowerShell for Remote Administration',
    ],
  },

  {
    id: 2,
    courseId: 'cloud',
    title: 'Cloud Computing & Infrastructure',
    image: '/image/cloud.png',
    description:
      'Master AWS, Azure and Google Cloud platforms with hands-on cloud architecture, deployment and management.',
    courses: ['AWS', 'Azure', 'Google Cloud', 'Cloud Security', 'DevOps'],
  },

  {
    id: 3,
    courseId: 'gen-ai',
    title: 'Generative AI & Automation',
    image: '/image/AI.png',
    description:
      'Explore cutting-edge generative AI technologies and automation frameworks.',
    courses: ['Generative AI', 'Prompt Engineering', 'AI Automation'],
  },

  {
    id: 4,
    courseId: 'salesforce',
    title: 'Salesforce & CRM Platforms',
    image: '/image/SalesForse.png',
    description:
      'Complete Salesforce training covering Admin, Development and CRM best practices.',
    courses: ['Salesforce Admin', 'Salesforce Development'],
  },

  {
    id: 5,
    courseId: 'cybersecurity',
    title: 'Cybersecurity & Information Protection',
    image: '/image/cyberSecurity.png',
    description:
      'Advanced cybersecurity training covering threat analysis and risk management.',
    courses: ['Cybersecurity Fundamentals', 'Ethical Hacking'],
  },

  {
    id: 6,
    courseId: 'ai-ml',
    title: 'Artificial Intelligence & Machine Learning',
    image: '/image/machine.png',
    description:
      'Dive into AI/ML algorithms, deep learning and real-world implementations.',
    courses: ['Machine Learning', 'Deep Learning', 'AI with Python'],
  },

  {
    id: 7,
    courseId: 'devops',
    title: 'Digital IT Operations & DevOps',
    image: '/image/dgital.png',
    description:
      'Master CI/CD pipelines, infrastructure as code and IT operations.',
    courses: ['DevOps', 'CI/CD Pipelines'],
  },

  {
    id: 8,
    courseId: 'servicenow',
    title: 'ServiceNow Solutions',
    image: '/image/service.png',
    description:
      'Become a ServiceNow expert with ITSM workflows and automation.',
    courses: ['ServiceNow ITSM', 'ServiceNow Development'],
  },

  {
    id: 9,
    courseId: 'linux',
    title: 'Linux System Administration',
    image: '/image/it.png',
    description:
      'Comprehensive Linux server administration and troubleshooting training.',
    courses: ['Linux Basics', 'Shell Scripting', 'Linux Server Management'],
  },

  {
    id: 10,
    courseId: 'python',
    title: 'Python & Automation',
    image: '/image/python.png',
    description:
      'Learn Python programming for automation, scripting, and data handling.',
    courses: ['Python Basics', 'Automation with Python'],
  },

  {
    id: 11,
    courseId: 'networking',
    title: 'Networking & Infrastructure',
    image: '/image/networking.png',
    description:
      'Hands-on networking concepts including routing, switching, and firewalls.',
    courses: ['Networking Fundamentals', 'CCNA Basics'],
  },

  {
    id: 12,
    courseId: 'devsecops',
    title: 'DevSecOps',
    image: '/image/devopps.png',
    description:
      'Integrate security into DevOps pipelines and CI/CD workflows.',
    courses: ['DevSecOps Fundamentals', 'Secure CI/CD'],
  },

  {
    id: 13,
    courseId: 'datascience',
    title: 'Data Science & Analytics',
    image: '/image/datascince.png',
    description: 'Learn data analysis, visualization, and predictive modeling.',
    courses: ['Data Analysis', 'Data Visualization'],
  },

  {
    id: 14,
    courseId: 'bigdata',
    title: 'Big Data Technologies',
    image: '/image/bigdata.png',
    description: 'Work with Hadoop, Spark, and big data processing frameworks.',
    courses: ['Hadoop', 'Apache Spark'],
  },

  {
    id: 15,
    courseId: 'aiops',
    title: 'AI Ops',
    image: '/image/aidev.png',
    description:
      'Apply AI techniques to IT operations for proactive monitoring.',
    courses: ['AI Ops Fundamentals', 'Monitoring with AI'],
  },

  {
    id: 16,
    courseId: 'cloud-security',
    title: 'Cloud Security',
    image: '/image/cloud.png',
    description: 'Secure cloud environments using industry best practices.',
    courses: ['Cloud Security Basics', 'AWS Security'],
  },

  {
    id: 17,
    courseId: 'kubernetes',
    title: 'Kubernetes & Containers',
    image: '/image/kubernetes.png',
    description:
      'Learn containerization and orchestration with Docker & Kubernetes.',
    courses: ['Docker', 'Kubernetes'],
  },

  {
    id: 18,
    courseId: 'itsm',
    title: 'IT Service Management',
    image: '/image/it.png',
    description: 'Understand ITSM frameworks and service delivery models.',
    courses: ['ITIL Basics', 'Service Management'],
  },

  {
    id: 19,
    courseId: 'rpa',
    title: 'Robotic Process Automation (RPA)',
    image: '/image/robotic.png',
    description: 'Automate business processes using RPA tools.',
    courses: ['RPA Fundamentals', 'UiPath'],
  },

  {
    id: 20,
    courseId: 'testing',
    title: 'Software Testing & QA',
    image: '/image/testing.png',
    description:
      'Manual and automation testing techniques for software quality.',
    courses: ['Manual Testing', 'Automation Testing'],
  },
];

export default function Courses() {
  const [active, setActive] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    trainingType: '',
    city: '',
    country: '',
    message: '',
  });

  /* Lock background scroll when modal open */
  useEffect(() => {
    document.body.style.overflow = active || showForm ? 'hidden' : 'auto';
    return () => (document.body.style.overflow = 'auto');
  }, [active, showForm]);

  /* Stable card click */
  const handleCardClick = useCallback((service) => {
    setActive(service);
  }, []);

  const closeAll = () => {
    setActive(null);
    setShowForm(false);
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (
      !formData.name ||
      !formData.contact ||
      !formData.city ||
      !formData.country ||
      !formData.trainingType
    ) {
      alert('Please fill all mandatory fields');
      return;
    }

    console.log('Submitted Form Data:', formData);
    alert('Form submitted successfully');
    setFormData({
      name: '',
      email: '',
      contact: '',
      trainingType: '',
      city: '',
      country: '',
      message: '',
    });
    setShowForm(false);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* HEADER */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Explore Services</h2>
        <p className="text-gray-600 mt-3 max-w-3xl mx-auto">
          Choose from comprehensive range of training programs to rapidly
          accelerate your workforce skills
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((item) => (
          <div
            key={item.id}
            onClick={() => handleCardClick(item)}
            className="bg-white rounded-xl shadow hover:shadow-xl cursor-pointer overflow-hidden flex flex-col transition transform hover:-translate-y-1"
          >
            <img
              src={item.image}
              loading="lazy"
              decoding="async"
              className="h-44 w-full object-cover bg-gray-100"
            />
            <div className="p-4 flex flex-col flex-1">
              <h3 className="font-semibold text-sm">{item.title}</h3>
              <p className="text-xs text-gray-600 mt-2 line-clamp-3 flex-1">
                {item.description}
              </p>
              <div className="flex justify-between mt-3 text-xs text-blue-600">
                <span>{item.courses.length} Courses</span>
                <span>→</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* DETAILS MODAL */}
      {active && !showForm && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4"
          onClick={closeAll}
        >
          <div
            className="bg-white max-w-3xl w-full rounded-xl relative h-[90vh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeAll}
              className="absolute top-4 right-4 bg-white p-1 rounded shadow"
            >
              <X />
            </button>

            <img
              src={active.image}
              className="h-56 w-full object-cover bg-gray-100"
            />

            <div className="p-6 overflow-y-auto flex-1 min-h-[300px]">
              <h3 className="text-2xl font-bold">{active.title}</h3>
              <p className="text-gray-600 mt-2">{active.description}</p>

              <h4 className="mt-6 font-semibold">Available Courses</h4>
              <div className="grid sm:grid-cols-2 gap-3 mt-3">
                {active.courses.map((c, i) => (
                  <div key={i} className="bg-gray-50 p-3 rounded text-sm">
                    ✔ {c}
                  </div>
                ))}
              </div>

              <div className="mt-6 text-sm">
                <p>⭐ Industry-relevant skills</p>
                <p>⭐ Hands-on real projects</p>
                <p>⭐ Expert guidance</p>
                <p>⭐ Career advancement</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <button
                  onClick={() => {
                    if (!active.courseId) {
                      alert('Syllabus not available for this service yet');
                      return;
                    }
                    closeAll();
                    navigate(`/course/${active.courseId}`);
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded"
                >
                  Explore Courses
                </button>

                <button
                  onClick={() => setShowForm(true)}
                  className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded"
                >
                  Contact for Details
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CONTACT FORM */}
      {showForm && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4"
          onClick={closeAll}
        >
          <div
            className="bg-white max-w-xl w-full rounded-xl p-6 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={closeAll} className="absolute top-4 right-4">
              <X />
            </button>

            <h3 className="text-xl font-bold mb-4">Contact for Details</h3>

            <div className="grid gap-3">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border p-2 rounded"
                placeholder="Name *"
              />
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border p-2 rounded"
                placeholder="Email"
              />
              <input
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className="border p-2 rounded"
                placeholder="Contact No *"
              />
              <select
                name="trainingType"
                value={formData.trainingType}
                onChange={handleChange}
                className="border p-2 rounded"
              >
                <option value="">Training Type *</option>
                <option>Corporate Training</option>
                <option>In-person Training</option>
              </select>
              <input
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="border p-2 rounded"
                placeholder="City *"
              />
              <input
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="border p-2 rounded"
                placeholder="Country *"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="border p-2 rounded"
                placeholder="Detailed Message"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="mt-4 bg-blue-600 text-white w-full py-2 rounded"
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
