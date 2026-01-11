import { useState } from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useScroll } from '../context/ScrollContext';

export default function Header() {
  const [open, setOpen] = useState(false);
  const { courseRef, careersRef, servicesRef, contactRef, scrollTo } =
    useScroll();
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Courses', scroll: 'courses' },
    { label: 'Industries', to: '/industries' },
    { label: 'Services', scroll: 'services' },
    { label: 'Careers', scroll: 'careers' },
    { label: 'About Us', to: '/about' },
  ];

  const navClass = ({ isActive }) =>
    `text-sm font-medium transition ${
      isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
    }`;

  const handleScroll = (ref) => {
    setOpen(false);

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollTo(ref), 120);
    } else {
      scrollTo(ref);
    }
  };

  // 🔑 decide ref based on menu label
  const getRef = (label) => {
    if (label === 'Courses') return courseRef;
    if (label === 'Careers') return careersRef;
    if (label === 'Services') return servicesRef;
    return null;
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="w-full px-2">
        <div className="h-16 flex items-center gap-6">
          {/* LOGO */}
          <Link to="/" className="flex items-center">
            <img
              src="/image/vmss.png"
              alt="VMSS Technologies"
              className="h-14 w-auto"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-6 ml-6">
            {navItems.map((item) =>
              item.scroll ? (
                <button
                  key={item.label}
                  onClick={() => handleScroll(getRef(item.label))}
                  className="text-sm font-medium text-gray-700 hover:text-blue-600"
                >
                  {item.label}
                </button>
              ) : (
                <NavLink key={item.to} to={item.to} className={navClass}>
                  {item.label}
                </NavLink>
              )
            )}
          </nav>

          {/* RIGHT ACTIONS */}
          <div className="ml-auto flex items-center gap-4">
            <button
              onClick={() => handleScroll(contactRef)}
              className="hidden md:inline-flex px-4 py-1.5 bg-blue-600 text-white rounded-md text-sm"
            >
              Contact
            </button>

            <Link
              to="/login"
              className="hidden md:inline-flex px-4 py-1.5 border border-blue-600 text-blue-600 rounded-md text-sm hover:bg-blue-50"
            >
              Login
            </Link>

            <button onClick={() => setOpen(true)} className="md:hidden p-2">
              <Menu size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {open && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />

          <div className="absolute top-0 left-0 w-72 h-full bg-white p-6">
            <div className="flex justify-between items-center mb-6">
              <img
                src="/image/vmss.png"
                alt="VMSS Technologies"
                className="h-9 w-auto"
              />
              <button onClick={() => setOpen(false)}>
                <X size={20} />
              </button>
            </div>

            <nav className="flex flex-col gap-4">
              {navItems.map((item) =>
                item.scroll ? (
                  <button
                    key={item.label}
                    onClick={() => handleScroll(getRef(item.label))}
                    className="text-left text-gray-700 font-medium"
                  >
                    {item.label}
                  </button>
                ) : (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="text-gray-700 font-medium"
                  >
                    {item.label}
                  </NavLink>
                )
              )}

              <button
                onClick={() => handleScroll(contactRef)}
                className="text-left text-blue-600 font-medium"
              >
                Contact
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
