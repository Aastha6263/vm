import { useNavigate } from 'react-router-dom';

/* ================= SERVICES DATA ================= */
const services = [
  {
    id: 1,
    title: 'PowerShell Scripting & Automation',
    image: '/image/powershell.png',
    description:
      'Master Windows PowerShell and PowerShell Core with hands-on experience in scripting, task automation, system administration and infrastructure management.',
    courses: [
      'Advanced PowerShell Scripting',
      'PowerShell for System Administrators',
      'PowerShell Automation & DevOps',
      'PowerShell for Cloud & Infrastructure',
      'PowerShell for Remote Administration',
    ],
  },
  {
    id: 2,
    title: 'Cloud Computing & Infrastructure',
    image: '/image/cloud.png',
    description:
      'Master AWS, Azure and Google Cloud platforms with hands-on cloud architecture, deployment and management.',
    courses: ['AWS', 'Azure', 'Google Cloud', 'Cloud Security', 'DevOps'],
  },
  {
    id: 3,
    title: 'Generative AI & Automation',
    image: '/image/AI.png',
    description:
      'Explore cutting-edge generative AI technologies and automation frameworks.',
    courses: ['Generative AI', 'Prompt Engineering', 'AI Automation'],
  },
  {
    id: 4,
    title: 'Salesforce & CRM Platforms',
    image: '/image/SalesForse.png',
    description:
      'Complete Salesforce training covering Admin, Development and CRM best practices.',
    courses: ['Salesforce Admin', 'Salesforce Development'],
  },
  {
    id: 5,
    title: 'Cybersecurity & Information Protection',
    image: '/image/cyberSecurity.png',
    description:
      'Advanced cybersecurity training covering threat analysis and risk management.',
    courses: ['Cybersecurity Fundamentals', 'Ethical Hacking'],
  },
  {
    id: 6,
    title: 'Artificial Intelligence & Machine Learning',
    image: '/image/machine.png',
    description:
      'Dive into AI/ML algorithms, deep learning and real-world implementations.',
    courses: ['Machine Learning', 'Deep Learning', 'AI with Python'],
  },
  {
    id: 7,
    title: 'Digital IT Operations & DevOps',
    image: '/image/dgital.png',
    description:
      'Master CI/CD pipelines, infrastructure as code and IT operations.',
    courses: ['DevOps', 'CI/CD Pipelines'],
  },
  {
    id: 8,
    title: 'ServiceNow Solutions',
    image: '/image/service.png',
    description:
      'Become a ServiceNow expert with ITSM workflows and automation.',
    courses: ['ServiceNow ITSM', 'ServiceNow Development'],
  },

  /* 🔥 EXTRA 12 SERVICES 🔥 */

  {
    id: 9,
    title: 'Linux System Administration',
    image: '/image/linux.png',
    description:
      'Comprehensive Linux server administration and troubleshooting training.',
    courses: ['Linux Basics', 'Shell Scripting', 'Linux Server Management'],
  },
  {
    id: 10,
    title: 'Python & Automation',
    image: '/image/python.png',
    description:
      'Learn Python programming for automation, scripting, and data handling.',
    courses: ['Python Basics', 'Automation with Python'],
  },
  {
    id: 11,
    title: 'Networking & Infrastructure',
    image: '/image/network.png',
    description:
      'Hands-on networking concepts including routing, switching, and firewalls.',
    courses: ['Networking Fundamentals', 'CCNA Basics'],
  },
  {
    id: 12,
    title: 'DevSecOps',
    image: '/image/devsecops.png',
    description:
      'Integrate security into DevOps pipelines and CI/CD workflows.',
    courses: ['DevSecOps Fundamentals', 'Secure CI/CD'],
  },
  {
    id: 13,
    title: 'Data Science & Analytics',
    image: '/image/datascience.png',
    description: 'Learn data analysis, visualization, and predictive modeling.',
    courses: ['Data Analysis', 'Data Visualization'],
  },
  {
    id: 14,
    title: 'Big Data Technologies',
    image: '/image/bigdata.png',
    description: 'Work with Hadoop, Spark, and big data processing frameworks.',
    courses: ['Hadoop', 'Apache Spark'],
  },
  {
    id: 15,
    title: 'AI Ops',
    image: '/image/aiops.png',
    description:
      'Apply AI techniques to IT operations for proactive monitoring.',
    courses: ['AI Ops Fundamentals', 'Monitoring with AI'],
  },
  {
    id: 16,
    title: 'Cloud Security',
    image: '/image/cloudsecurity.png',
    description: 'Secure cloud environments using industry best practices.',
    courses: ['Cloud Security Basics', 'AWS Security'],
  },
  {
    id: 17,
    title: 'Kubernetes & Containers',
    image: '/image/kubernetes.png',
    description:
      'Learn containerization and orchestration with Docker & Kubernetes.',
    courses: ['Docker', 'Kubernetes'],
  },
  {
    id: 18,
    title: 'IT Service Management',
    image: '/image/itsm.png',
    description: 'Understand ITSM frameworks and service delivery models.',
    courses: ['ITIL Basics', 'Service Management'],
  },
  {
    id: 19,
    title: 'Robotic Process Automation (RPA)',
    image: '/image/rpa.png',
    description: 'Automate business processes using RPA tools.',
    courses: ['RPA Fundamentals', 'UiPath'],
  },
  {
    id: 20,
    title: 'Software Testing & QA',
    image: '/image/testing.png',
    description:
      'Manual and automation testing techniques for software quality.',
    courses: ['Manual Testing', 'Automation Testing'],
  },
];

export default function ExploreCourses() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* HEADER */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold">Explore Services</h1>
        <p className="text-gray-600 mt-3 max-w-3xl mx-auto">
          Choose from comprehensive range of training programs to rapidly
          accelerate your workforce skills
        </p>
      </div>

      {/* GRID 4x4 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow hover:shadow-xl transition cursor-pointer overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-44 w-full object-cover bg-gray-100"
            />

            <div className="p-4">
              <h3 className="font-semibold text-sm">{item.title}</h3>

              <p className="text-xs text-gray-600 mt-2 line-clamp-3">
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
    </section>
  );
}
