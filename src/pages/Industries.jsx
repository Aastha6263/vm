import { useState } from 'react';
import { instructors as instructorsData } from './data/instructorsData';
import { Star, Headset, Plus, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Instructors() {
  const navigate = useNavigate();

  // STATE
  const [instructors, setInstructors] = useState(instructorsData);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  // ROLE CHECK
  const role = localStorage.getItem('role'); // "admin" | "user" | null

  // FORM STATE
  const [form, setForm] = useState({
    name: '',
    role: '',
    skills: '',
    exp: '',
    img: '',
  });

  // HANDLE INPUT
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // MORE CLICK
  const handleMoreClick = () => {
    if (role !== 'admin') {
      setMessage('❌ Only admin can add instructor');
      setTimeout(() => setMessage(''), 3000);
      return;
    }
    setOpen(true);
  };

  // ADD INSTRUCTOR
  const addInstructor = () => {
    if (!form.name || !form.role || !form.skills || !form.exp || !form.img) {
      alert('Please fill all fields');
      return;
    }

    setInstructors([...instructors, { id: Date.now(), ...form }]);

    setForm({
      name: '',
      role: '',
      skills: '',
      exp: '',
      img: '',
    });

    setOpen(false);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4">
      {/* TOP SECTION */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold">Learn from the Best Instructors</h1>

        <p className="text-gray-600 mt-2">
          Our expert instructors bring real-world experience and industry
          insights.
        </p>

        <div className="flex justify-center gap-10 mt-6">
          <div className="flex items-center gap-2 text-blue-600">
            <Star size={20} />
            100+ Certified Instructors
          </div>
          <div className="flex items-center gap-2 text-green-600">
            <Headset size={20} />
            24/7 Support
          </div>
        </div>

        <button
          onClick={() => navigate('/contact')}
          className="mt-6 bg-blue-600 text-white px-8 py-2 rounded-md hover:bg-blue-700"
        >
          Contact
        </button>

        {/* MESSAGE */}
        {message && (
          <p className="mt-4 text-red-600 font-semibold">{message}</p>
        )}
      </div>

      {/* INSTRUCTORS GRID (5 x 2) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {instructors.slice(0, 10).map((inst) => (
          <div
            key={inst.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition p-4"
          >
            <img
              src={inst.img}
              alt={inst.name}
              className="w-full h-40 object-cover rounded-lg"
            />

            <h3 className="font-semibold mt-3">{inst.name}</h3>
            <p className="text-blue-600 text-sm">{inst.role}</p>
            <p className="text-gray-500 text-xs mt-2">⭐ {inst.skills}</p>
            <p className="text-gray-400 text-xs mt-1">🕒 {inst.exp}</p>
          </div>
        ))}

        {/* MORE CARD */}
        <div
          onClick={handleMoreClick}
          className="bg-white border-dashed border-2 cursor-pointer flex flex-col justify-center items-center rounded-xl p-6 hover:bg-gray-100"
        >
          <Plus size={40} className="text-blue-500" />
          <p className="text-gray-500 mt-2">More</p>
        </div>
      </div>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-full max-w-md p-6 relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3"
            >
              <X />
            </button>

            <h2 className="text-xl font-bold mb-4">Add Instructor</h2>

            <div className="space-y-3">
              <input
                name="img"
                placeholder="Image URL"
                value={form.img}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
              />
              <input
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
              />
              <input
                name="role"
                placeholder="Role"
                value={form.role}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
              />
              <input
                name="skills"
                placeholder="Skills"
                value={form.skills}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
              />
              <input
                name="exp"
                placeholder="Experience"
                value={form.exp}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
              />

              <button
                onClick={addInstructor}
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                Add Instructor
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
