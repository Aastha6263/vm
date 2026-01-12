import { useEffect, useState } from 'react';
import axios from 'axios';
import { Star, Headset, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { instructors as dummyData } from './data/instructorsData';

export default function Instructors() {
  const navigate = useNavigate();
  const [apiInstructors, setApiInstructors] = useState([]);
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  const isAdmin = role === 'admin';

  useEffect(() => {
    fetchInstructors();
  }, []);

  const fetchInstructors = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/instructors');
      setApiInstructors(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteInstructor = async (id) => {
    if (!window.confirm('Delete this instructor?')) return;

    try {
      await axios.delete(`http://localhost:5000/api/instructors/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      fetchInstructors(); // reload list after delete
    } catch (err) {
      alert('Delete failed');
      console.error(err);
    }
  };

  const allInstructors = [...dummyData, ...apiInstructors];

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold">Learn from the Best Instructors</h1>
        <p className="text-gray-600 mt-2">
          Our expert instructors bring real-world experience and industry
          insights.
        </p>

        <div className="flex justify-center gap-10 mt-6">
          <div className="flex items-center gap-2 text-blue-600">
            <Star size={20} /> Certified Instructors
          </div>
          <div className="flex items-center gap-2 text-green-600">
            <Headset size={20} /> 24/7 Support
          </div>
        </div>

        <button
          onClick={() => navigate('/contact')}
          className="mt-6 bg-blue-600 text-white px-8 py-2 rounded-md hover:bg-blue-700"
        >
          Contact
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {allInstructors.map((inst, index) => (
          <div
            key={inst._id || index}
            className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 relative"
          >
            <img
              src={inst.photo || inst.img}
              alt={inst.name}
              className="w-full h-40 object-cover rounded-lg"
            />

            <h3 className="font-semibold mt-3">{inst.name}</h3>
            <p className="text-blue-600 text-sm">{inst.title || inst.role}</p>
            <p className="text-gray-500 text-xs mt-2">
              ⭐{' '}
              {Array.isArray(inst.skills)
                ? inst.skills.join(', ')
                : inst.skills}
            </p>
            <p className="text-gray-400 text-xs mt-1">
              🕒 {inst.experience || inst.exp}
            </p>

            {/* DELETE BUTTON (ONLY ADMIN & ONLY DB DATA) */}
            {isAdmin && inst._id && (
              <button
                onClick={() => deleteInstructor(inst._id)}
                className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded hover:bg-red-700"
              >
                <Trash2 size={16} />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
