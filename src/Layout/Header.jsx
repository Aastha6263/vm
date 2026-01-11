import { useState } from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useScroll } from '../context/ScrollContext';

export default function Header() {
  const [courseOpen, setCourseOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const {
    careersRef,
    servicesRef,
    industriesRef,
    testimonialsRef,
    contactRef,
    scrollTo,
  } = useScroll();

  const navigate = useNavigate();
  const location = useLocation();

  /* ================== COURSE CLICK ================== */
  const goToCourse = (course) => {
    setCourseOpen(false);
    setActiveCategory(null);

    const slug = course.toLowerCase().replace(/\s+/g, '-');
    navigate(`/course/${slug}`);
  };

  /* ================= COURSES DATA ================= */
  const coursesMenu = [
    {
      title: 'Modern Programming Languages',
      items: [
        'C',
        'C#',
        'Python',
        '.NET',
        'Java',
        'JavaScript',
        'HTML',
        'CSS',
        'SQL',
        'Perl',
        'TypeScript',
        'Go',
        'PHP',
        'Kotlin',
        'Swift',
        'Rust',
        'Dart',
        'R',
        'Scala',
      ],
    },
    {
      title: 'Cloud',
      items: [
        'AWS Cloud',
        'Azure Cloud',
        'Google Cloud',
        'Oracle Cloud',
        'Azure DevOps',
        'Kubernetes',
        'Terraform',
        'Cloud Security',
      ],
    },
    {
      title: 'Infrastructure Trainings',
      items: [
        'Citrix',
        'VMware',
        'Azure Active Directory',
        'Windows Server',
        'Linux Administration',
        'Networking Fundamentals',
      ],
    },
    {
      title: 'Automation & Scripting',
      items: [
        'PowerShell',
        'Python Automation',
        'Shell Scripting',
        'RPA',
        'Ansible',
        'CI/CD Pipelines',
      ],
    },
    {
      title: 'CRM',
      items: [
        'Salesforce',
        'Microsoft Dynamics',
        'Creatio',
        'Oracle CRM',
        'HubSpot',
        'Zoho CRM',
      ],
    },
    {
      title: 'ServiceNow',
      items: [
        'ITSM',
        'HRSD',
        'SAM',
        'ITOM',
        'Integration',
        'CMDB',
        'ServiceNow Developer',
      ],
    },
    {
      title: 'Cyber Security',
      items: [
        'Splunk',
        'SIEM',
        'SOC',
        'Ethical Hacking',
        'Network Security',
        'Cloud Security',
      ],
    },
    {
      title: 'CyberArk',
      items: [
        'Privileged Access Management',
        'CyberArk Vault',
        'PAM Administration',
        'Endpoint Privilege Security',
      ],
    },
  ];

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Courses', dropdown: true },
    { label: 'Industries', scroll: true },
    { label: 'Services', scroll: true },
    { label: 'Careers', scroll: true },
    { label: 'About Us', scroll: true },
  ];

  const getRef = (label) => {
    if (label === 'Industries') return industriesRef;
    if (label === 'Services') return servicesRef;
    if (label === 'Careers') return careersRef;
    if (label === 'About Us') return testimonialsRef;
    return null;
  };

  const handleScroll = (ref) => {
    if (!ref) return;

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollTo(ref), 150);
    } else {
      scrollTo(ref);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="w-full px-4">
        <div className="h-16 flex items-center gap-6">
          {/* LOGO */}
          <Link to="/">
            <img src="/image/vmss.png" className="h-12" />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-6 ml-6 relative">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.label} className="relative">
                  <button
                    onClick={() => setCourseOpen(!courseOpen)}
                    className="text-sm font-medium text-gray-700 hover:text-blue-600"
                  >
                    Courses +
                  </button>

                  {courseOpen && (
                    <div className="absolute top-10 left-0 w-[420px] bg-white shadow-xl border rounded-lg p-4 z-50">
                      {coursesMenu.map((cat, i) => (
                        <div key={i} className="border-b py-2">
                          <button
                            onClick={() =>
                              setActiveCategory(activeCategory === i ? null : i)
                            }
                            className="w-full flex justify-between font-semibold"
                          >
                            {cat.title}
                            {activeCategory === i ? '−' : '+'}
                          </button>

                          {activeCategory === i && (
                            <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                              {cat.items.map((course, idx) => (
                                <div
                                  key={idx}
                                  onClick={() => goToCourse(course)}
                                  className="cursor-pointer hover:text-blue-600 px-2 py-1 hover:bg-blue-50 rounded"
                                >
                                  {course}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : item.scroll ? (
                <button
                  key={item.label}
                  onClick={() => handleScroll(getRef(item.label))}
                  className="text-sm font-medium text-gray-700 hover:text-blue-600"
                >
                  {item.label}
                </button>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className="text-sm font-medium text-gray-700 hover:text-blue-600"
                >
                  {item.label}
                </NavLink>
              )
            )}
          </nav>

          {/* RIGHT SIDE */}
          <div className="ml-auto flex gap-4">
            <button
              onClick={() => handleScroll(contactRef)}
              className="hidden md:block bg-blue-600 text-white px-4 py-1.5 rounded"
            >
              Contact
            </button>

            <Link
              to="/login"
              className="hidden md:block border border-blue-600 text-blue-600 px-4 py-1.5 rounded"
            >
              Login
            </Link>

            <button className="md:hidden">
              <Menu size={22} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
