import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

/* ================= DUMMY COURSES ================= */
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
];

/* 🔥 Convert backend course to frontend format */
const mapBackendCourse = (c) => ({
  id: c._id,
  courseId: c._id,
  title: c.courseName,
  image: c.bannerImage,
  description: c.description,
  courses: c.availableCourses || [],
});

export default function Courses() {
  const navigate = useNavigate();
  const [active, setActive] = useState(null);
  const [backendCourses, setBackendCourses] = useState([]);

  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  /* Load backend courses */
  useEffect(() => {
    fetchBackendCourses();
  }, []);

  const fetchBackendCourses = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/courses');
      const mapped = res.data.map(mapBackendCourse);
      setBackendCourses(mapped);
    } catch (err) {
      console.error('Failed to load courses', err);
    }
  };

  /* Merge dummy + backend */
  const allServices = [...services, ...backendCourses];

  /* Delete Course */
  const deleteCourse = async (id) => {
    if (!window.confirm('Delete this course?')) return;

    try {
      await axios.delete(`http://localhost:5000/api/courses/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchBackendCourses(); // refresh
    } catch (err) {
      console.error(err);
      alert('Failed to delete course');
    }
  };

  const handleCardClick = useCallback((service) => {
    setActive(service);
  }, []);

  const closeAll = () => setActive(null);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Explore Services</h2>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {allServices.map((item) => {
          const isBackend = backendCourses.some((c) => c.id === item.id);

          return (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow hover:shadow-xl relative overflow-hidden flex flex-col transition"
            >
              {/* 🗑 DELETE BUTTON */}
              {isBackend && role === 'admin' && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteCourse(item.id);
                  }}
                  className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs z-10"
                >
                  Delete
                </button>
              )}

              <div
                onClick={() => handleCardClick(item)}
                className="cursor-pointer"
              >
                <img src={item.image} className="h-44 w-full object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-sm">{item.title}</h3>
                  <p className="text-xs text-gray-600 mt-2 line-clamp-3">
                    {item.description}
                  </p>
                  <div className="mt-3 text-xs text-blue-600">
                    {item.courses.length} Courses →
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* MODAL */}
      {active && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center"
          onClick={closeAll}
        >
          <div
            className="bg-white max-w-3xl w-full rounded-xl relative h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={closeAll} className="absolute top-4 right-4">
              <X />
            </button>

            <img src={active.image} className="h-56 w-full object-cover" />

            <div className="p-6">
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

              <button
                onClick={() => navigate(`/course/${active.courseId}`)}
                className="mt-6 bg-blue-600 text-white px-6 py-3 rounded"
              >
                Explore Courses
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
