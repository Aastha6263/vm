import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

export default function TrainingFormModal({ open, title, onClose }) {
  const formRef = useRef(null);

  const [form, setForm] = useState({
    name: '',
    email: '',
    contact: '',
    trainingType: '',
    city: '',
    country: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (open) {
      setErrors({});
      setForm({
        name: '',
        email: '',
        contact: '',
        trainingType: title, // auto set from button
        city: '',
        country: '',
        message: '',
      });
      setTimeout(() => formRef.current?.querySelector('input')?.focus(), 80);
    }
  }, [open, title]);

  if (!open) return null;

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.contact.trim()) errs.contact = 'Contact is required';
    if (!form.trainingType) errs.trainingType = 'Training type is required';
    if (!form.city.trim()) errs.city = 'City is required';
    if (!form.country.trim()) errs.country = 'Country is required';
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    try {
      setLoading(true);

      const res = await axios.post(
        'http://localhost:5000/api/training/submit',
        form
      );

      alert(res.data.message || 'Form submitted successfully!');
      onClose();
    } catch (error) {
      alert(error.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden
      />

      {/* Modal */}
      <div className="relative bg-white rounded-lg w-full max-w-xl mx-4 shadow-xl z-10">
        <div className="p-6">
          <div className="flex items-start justify-between">
            <h3 className="text-xl font-semibold">{title}</h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-4 grid gap-3"
          >
            {/* Name + Email */}
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="text-sm font-medium">Name *</label>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={`mt-1 w-full px-3 py-2 border rounded ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-xs text-red-500">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium">Email</label>
                <input
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-1 w-full px-3 py-2 border rounded border-gray-300"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Contact + TrainingType */}
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="text-sm font-medium">Contact No *</label>
                <input
                  value={form.contact}
                  onChange={(e) =>
                    setForm({ ...form, contact: e.target.value })
                  }
                  className={`mt-1 w-full px-3 py-2 border rounded ${
                    errors.contact ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="+91 9XXXXXXXXX"
                />
                {errors.contact && (
                  <p className="text-xs text-red-500">{errors.contact}</p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium">Training Type</label>
                <input
                  value={form.trainingType}
                  disabled
                  className="mt-1 w-full px-3 py-2 border rounded bg-gray-100"
                />
              </div>
            </div>

            {/* City + Country */}
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="text-sm font-medium">City *</label>
                <input
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  className={`mt-1 w-full px-3 py-2 border rounded ${
                    errors.city ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.city && (
                  <p className="text-xs text-red-500">{errors.city}</p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium">Country *</label>
                <input
                  value={form.country}
                  onChange={(e) =>
                    setForm({ ...form, country: e.target.value })
                  }
                  className={`mt-1 w-full px-3 py-2 border rounded ${
                    errors.country ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.country && (
                  <p className="text-xs text-red-500">{errors.country}</p>
                )}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="text-sm font-medium">Detailed Message</label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-1 w-full px-3 py-2 border rounded border-gray-300"
                placeholder="Write details (optional)"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3 mt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
              >
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
