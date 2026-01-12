import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddInstructor() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    title: '',
    skills: '',
    experience: '',
    image: null,
  });

  const token = localStorage.getItem('token');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePhoto = (e) => {
    setForm({ ...form, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append('name', form.name);
      data.append('title', form.title);
      data.append('experience', form.experience);
      data.append('skills', JSON.stringify(form.skills.split(',')));
      data.append('image', form.image);

      await axios.post('http://localhost:5000/api/instructors/add', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert('Instructor Added Successfully');

      // reset form
      setForm({
        name: '',
        title: '',
        skills: '',
        experience: '',
        image: null,
      });

      // 🔥 go to Home page
      navigate('/');
    } catch (error) {
      console.error(error);
      alert('Failed to add instructor');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-10">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Add New Instructor
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Instructor Name"
            className="w-full p-3 border rounded"
            required
          />

          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Title (Senior UX Instructor)"
            className="w-full p-3 border rounded"
            required
          />

          <input
            name="skills"
            value={form.skills}
            onChange={handleChange}
            placeholder="Skills (React, Node, UI/UX)"
            className="w-full p-3 border rounded"
            required
          />

          <input
            name="experience"
            value={form.experience}
            onChange={handleChange}
            placeholder="Experience (10+ years)"
            className="w-full p-3 border rounded"
            required
          />

          <input type="file" accept="image/*" onChange={handlePhoto} required />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
          >
            Save Instructor
          </button>
        </form>
      </div>
    </div>
  );
}
