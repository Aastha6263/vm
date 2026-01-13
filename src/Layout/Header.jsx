import { useState } from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useScroll } from '../context/ScrollContext';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [courseOpen, setCourseOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/');
    window.location.reload(); // refresh header state
  };

  const {
    topRef,
    careersRef,
    servicesRef,
    industriesRef,
    testimonialsRef,
    contactRef,
    scrollTo,
  } = useScroll();

  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem('token');
  const isLoggedIn = !!token;
  const role = localStorage.getItem('role');
  const isAdmin = role === 'admin';
  isAdmin === true;

  /* ================== COURSE CLICK ================== */
  const makeSlug = (name) => {
    return name
      .toLowerCase()
      .replace(/c#/g, 'c-sharp')
      .replace(/\.net/g, 'net')
      .replace(/ci\/cd/g, 'ci-cd')
      .replace(/&/g, 'and')
      .replace(/[^a-z0-9 ]/g, '')
      .replace(/\s+/g, '-')
      .trim();
  };

  const goToCourse = (course) => {
    setCourseOpen(false);
    setActiveCategory(null);

    const slug = makeSlug(course);
    navigate(`/course/${slug}`);
  };

  /* ================= COURSES DATA ================= */
  const coursesMenu = [
    {
      title: 'Modern Programming Languages',
      items: [
        'C',
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
      items: ['ITSM', 'HRSD', 'SAM', 'ITOM', 'Integration', 'CMDB'],
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
  ];

  const navItems = [
    { label: 'Home', scroll: true },
    { label: 'Courses', dropdown: true },
    { label: 'Industries', scroll: true },
    { label: 'Services', scroll: true },
    { label: 'Careers', scroll: true },
    { label: 'About Us', scroll: true },
  ];

  const getRef = (label) => {
    if (label === 'Home') return topRef;
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
        <div className="h-16 flex items-center w-full">
          {/* LOGO */}
          <Link to="/">
            <img src="/image/vmss.png" className="h-12" />
          </Link>

          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden ml-auto text-gray-800"
          >
            <Menu size={28} />
          </button>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-8 ml-8 relative text-[15px] lg:text-[16px] font-semibold">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.label} className="relative">
                  <button
                    onClick={() => setCourseOpen(!courseOpen)}
                    className="text-lg text-gray-800 hover:text-blue-600 font-semibold tracking-wide"
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
                  className="text-lg font-semibold text-gray-800 hover:text-blue-600"
                >
                  {item.label}
                </button>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className="text-lg font-semibold text-gray-800 hover:text-blue-600"
                >
                  {item.label}
                </NavLink>
              )
            )}
          </nav>

          {/* RIGHT SIDE */}
          <div className="hidden md:flex ml-auto gap-4 items-center">
            {/* ADMIN BUTTONS */}
            {isAdmin && (
              <>
                <Link
                  to="/admin/add-course"
                  className="hidden md:block bg-green-600 text-white px-3 py-1.5 rounded"
                >
                  + Add Course
                </Link>

                <Link
                  to="/admin/add-instructor"
                  className="hidden md:block bg-purple-600 text-white px-3 py-1.5 rounded"
                >
                  + Add Instructor
                </Link>
              </>
            )}

            <button
              onClick={() => handleScroll(contactRef)}
              className="hidden md:block bg-blue-600 text-white px-4 py-1.5 rounded"
            >
              Contact
            </button>

            {!isLoggedIn ? (
              <Link
                to="/login"
                className="hidden md:block border border-blue-600 text-blue-600 px-4 py-1.5 rounded"
              >
                Login
              </Link>
            ) : (
              <button
                onClick={handleLogout}
                className="hidden md:block border border-blue-600 text-blue-600 px-4 py-1.5 rounded"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ===== LEFT SIDE MOBILE DRAWER ===== */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setMobileOpen(false)}
          ></div>

          <div className="fixed top-0 left-0 h-full w-[260px] bg-white shadow-xl z-50 p-4 animate-slideIn">
            <div className="flex justify-between items-center mb-4 border-b pb-3">
              <img src="/image/vmss.png" className="h-10" />
              <X
                onClick={() => setMobileOpen(false)}
                className="cursor-pointer"
              />
            </div>

            <div className="flex flex-col gap-4 text-sm font-medium text-left items-start">
              <NavLink to="/" onClick={() => setMobileOpen(false)}>
                Home
              </NavLink>

              <div>Courses</div>

              <button
                onClick={() => {
                  handleScroll(industriesRef);
                  setMobileOpen(false);
                }}
              >
                Industries
              </button>

              <button
                onClick={() => {
                  handleScroll(servicesRef);
                  setMobileOpen(false);
                }}
              >
                Services
              </button>

              <button
                onClick={() => {
                  handleScroll(careersRef);
                  setMobileOpen(false);
                }}
              >
                Careers
              </button>

              <button
                onClick={() => {
                  handleScroll(testimonialsRef);
                  setMobileOpen(false);
                }}
              >
                About Us
              </button>

              <button
                onClick={() => {
                  handleScroll(contactRef);
                  setMobileOpen(false);
                }}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-800 
             text-white py-2.5 rounded-lg 
             font-semibold tracking-wide 
             shadow-md hover:shadow-lg 
             active:scale-95 transition-all duration-200"
              >
                Contact
              </button>

              {isAdmin && (
                <>
                  <Link
                    to="/admin/add-course"
                    onClick={() => setMobileOpen(false)}
                    className="w-full bg-green-600 text-white py-2 rounded text-center"
                  >
                    + Add Course
                  </Link>

                  <Link
                    to="/admin/add-instructor"
                    onClick={() => setMobileOpen(false)}
                    className="w-full bg-purple-600 text-white py-2 rounded text-center"
                  >
                    + Add Instructor
                  </Link>
                </>
              )}

              {!isLoggedIn ? (
                <Link
                  to="/login"
                  onClick={() => setMobileOpen(false)}
                  className="border border-blue-600 text-blue-600 py-2 rounded text-center w-full"
                >
                  Login
                </Link>
              ) : (
                <button
                  onClick={() => {
                    handleLogout();
                    setMobileOpen(false);
                  }}
                  className="border border-red-500 text-red-500 py-2 rounded w-full"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        </>
      )}
    </header>
  );
}
