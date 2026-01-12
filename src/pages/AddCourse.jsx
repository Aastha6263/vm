import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddCourse() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: '',
    subtitle: '',
    description: '',
    category: '',
    banner: null,
    skills: ['', '', '', ''],
    courses: ['', '', ''],
  });

  const token = localStorage.getItem('token');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBanner = (e) => {
    setForm({ ...form, banner: e.target.files[0] });
  };

  const updateArray = (type, index, value) => {
    const updated = [...form[type]];
    updated[index] = value;
    setForm({ ...form, [type]: updated });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();

      data.append('courseName', form.title);
      data.append('subtitle', form.subtitle || '');
      data.append('description', form.description);
      data.append('category', form.category || '');

      data.append(
        'availableCourses',
        JSON.stringify(form.courses.filter((c) => c))
      );

      // IMPORTANT: send features (skills) as JSON string so backend can JSON.parse it
      data.append('features', JSON.stringify(form.skills.filter((s) => s)));

      // If you have boolean flags on frontend, send them as strings or JSON
      data.append('industrySkills', JSON.stringify(true));
      data.append('realProjects', JSON.stringify(true));
      data.append('expertGuidance', JSON.stringify(true));
      data.append('careerGrowth', JSON.stringify(true));

      data.append('image', form.banner);

      await axios.post('http://localhost:5000/api/courses/add', data, {
        headers: {
          Authorization: `Bearer ${token}`,
          // don't set Content-Type manually; axios will set multipart/form-data with boundary
        },
      });

      alert('Course Added Successfully');

      // Reset form...
    } catch (error) {
      console.error(error);
      alert('Failed to add course');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-10">
      <div className="bg-white w-full max-w-4xl p-8 rounded shadow">
        <h2 className="text-2xl font-bold mb-6">Add Course Category</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="title"
            value={form.title}
            placeholder="Course Title (e.g. Generative AI & Automation)"
            onChange={handleChange}
            className="w-full p-3 border rounded"
            required
          />

          <input
            name="subtitle"
            value={form.subtitle}
            placeholder="Short Subtitle"
            onChange={handleChange}
            className="w-full p-3 border rounded"
          />

          <textarea
            name="description"
            value={form.description}
            placeholder="Description"
            rows="3"
            onChange={handleChange}
            className="w-full p-3 border rounded"
            required
          />

          <input
            name="category"
            value={form.category}
            placeholder="Category (AI, Cloud, DevOps, etc)"
            onChange={handleChange}
            className="w-full p-3 border rounded"
          />

          <input
            type="file"
            accept="image/*"
            onChange={handleBanner}
            required
          />

          {/* Available Courses */}
          <div>
            <h4 className="font-semibold mb-2">Available Courses</h4>
            {form.courses.map((c, i) => (
              <input
                key={i}
                placeholder={`Course ${i + 1}`}
                value={c}
                onChange={(e) => updateArray('courses', i, e.target.value)}
                className="w-full p-2 border rounded mb-2"
              />
            ))}
          </div>

          {/* Features (UI Only) */}
          <div>
            <h4 className="font-semibold mb-2">Highlights</h4>
            {form.skills.map((s, i) => (
              <input
                key={i}
                placeholder={`Feature ${i + 1}`}
                value={s}
                onChange={(e) => updateArray('skills', i, e.target.value)}
                className="w-full p-2 border rounded mb-2"
              />
            ))}
          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700">
            Save Course
          </button>
        </form>
      </div>
    </div>
  );
}
