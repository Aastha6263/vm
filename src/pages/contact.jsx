import { useState, useCallback } from 'react';
import axios from 'axios';
import { Mail, Phone, MapPin, HelpCircle } from 'lucide-react';

/* ================= INITIAL STATE ================= */

const INITIAL_STATE = {
  name: '',
  email: '',
  contact: '',
  trainingType: '',
  city: '',
  country: '',
  message: '',
};

/* ================= REUSABLE COMPONENTS ================= */

const InputField = ({ label, required, ...props }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      {...props}
      required={required}
      className="w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

const SectionTitle = ({
  icon: Icon,
  title,
  bg = 'bg-blue-600',
  iconColor = 'text-white',
}) => (
  <h2 className="mb-4 flex items-center gap-2 font-semibold">
    <span
      className={`flex h-8 w-8 items-center justify-center rounded-lg ${bg}`}
    >
      <Icon size={16} className={iconColor} />
    </span>
    {title}
  </h2>
);

/* ================= ICON BOX ================= */

const IconBox = ({ icon: Icon }) => (
  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
    <Icon size={22} className="text-blue-600" />
  </div>
);

/* ================= CLICKABLE INFO ROW ================= */

const InfoRow = ({ icon: Icon, title, text, href }) => (
  <a
    href={href}
    target={href?.startsWith('http') ? '_blank' : undefined}
    rel="noopener noreferrer"
    className="flex items-center gap-4 hover:bg-blue-50 p-2 rounded-lg transition cursor-pointer"
  >
    <IconBox icon={Icon} />
    <div>
      <p className="font-medium text-gray-800">{title}</p>
      <p className="text-gray-600 text-sm">{text}</p>
    </div>
  </a>
);

/* ================= MAIN COMPONENT ================= */

export default function Contact() {
  const [form, setForm] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.contact ||
      !form.city ||
      !form.country ||
      !form.trainingType
    ) {
      alert('Please fill all mandatory fields');
      return;
    }

    try {
      setLoading(true);
      await axios.post('http://localhost:5000/api/contact/submit', form);
      alert('Message sent successfully!');
      setForm(INITIAL_STATE);
    } catch (error) {
      console.error('API Error:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-4">
      {/* HEADER */}
      <div className="text-center mb-12">
        <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white">
          <HelpCircle size={24} />
        </div>
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="mt-2 text-gray-600">
          Get in touch for any queries and concerns.
        </p>
      </div>

      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
        {/* LEFT FORM */}
        <div className="rounded-xl bg-white p-6 shadow">
          <SectionTitle icon={Mail} title="Contact Us" />

          <form onSubmit={handleSubmit} className="space-y-4">
            <InputField
              label="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <InputField
              label="Email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />

            <InputField
              label="Contact No"
              name="contact"
              value={form.contact}
              onChange={handleChange}
              required
            />

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Training Type <span className="text-red-500">*</span>
              </label>
              <select
                name="trainingType"
                value={form.trainingType}
                onChange={handleChange}
                required
                className="w-full rounded border px-3 py-2 focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Training Type</option>
                <option value="Corporate Training">Corporate Training</option>
                <option value="In-person Training">In-person Training</option>
              </select>
            </div>

            <InputField
              label="City"
              name="city"
              value={form.city}
              onChange={handleChange}
              required
            />

            <InputField
              label="Country"
              name="country"
              value={form.country}
              onChange={handleChange}
              required
            />

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Detailed message for us
              </label>
              <textarea
                name="message"
                rows="3"
                value={form.message}
                onChange={handleChange}
                className="w-full rounded border px-3 py-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              disabled={loading}
              className="w-full rounded bg-blue-600 py-2 font-semibold text-white hover:bg-blue-700 transition disabled:opacity-50"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* RIGHT SECTION */}
        <div className="space-y-6">
          <div className="rounded-xl bg-white p-6 shadow">
            <SectionTitle
              icon={HelpCircle}
              title="Get in Touch"
              bg="bg-blue-100"
              iconColor="text-blue-600"
            />

            <div className="space-y-6">
              <InfoRow
                icon={Phone}
                title="Talk with us"
                text="+91 9179944544"
                href="tel:+919179944544"
              />
              <InfoRow
                icon={Mail}
                title="24/7 Support"
                text="vmsstech@gmail.com"
                href="mailto:vmsstech@gmail.com"
              />
              <InfoRow
                icon={MapPin}
                title="Office"
                text="Pune, India"
                href="https://www.google.com/maps/search/?api=1&query=Pune+India"
              />
            </div>
          </div>

          <div className="rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white shadow">
            <h3 className="mb-2 flex items-center gap-2 font-semibold">
              <HelpCircle size={16} /> Ready to Get Started?
            </h3>
            <p className="mb-4 text-sm text-blue-100">
              Schedule a free consultation to discuss your training needs.
            </p>
            <button className="rounded border border-white px-4 py-2 text-sm hover:bg-white hover:text-blue-600 transition">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
