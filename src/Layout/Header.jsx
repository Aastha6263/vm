import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, LogIn } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/courses", label: "Courses" },
    { to: "/industries", label: "Industries" },
    { to: "/services", label: "Services" },
    { to: "/careers", label: "Careers" },
    { to: "/about", label: "About Us" },
  ];

  const navClass = ({ isActive }) =>
    `text-sm font-medium transition ${
      isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-16 flex items-center gap-6">
          {/* LOGO */}
          <Link to="/" className="text-blue-600 font-semibold">
            VMSS TECHNOLOGIES
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-6 ml-8">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={navClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* RIGHT ACTIONS */}
          <div className="ml-auto flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden md:inline-flex px-4 py-1.5 bg-blue-600 text-white rounded-md text-sm"
            >
              Contact
            </Link>

            <Link
              to="/login"
              className="hidden md:inline-flex px-4 py-1.5 bg-blue-600 rounded-md text-sm text-gray-300 hover:text-gray-600"
              title="Login"
            >
              {/* <LogIn size={20} /> */}Login
            </Link>

            {/* MOBILE MENU BUTTON */}
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
            <div className="flex justify-between mb-6">
              <span className="text-blue-600 font-semibold">
                VMSS TECHNOLOGIES
              </span>
              <button onClick={() => setOpen(false)}>
                <X size={20} />
              </button>
            </div>

            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="text-gray-700"
                >
                  {item.label}
                </NavLink>
              ))}

          
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
