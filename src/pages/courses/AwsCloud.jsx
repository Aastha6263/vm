import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const syllabus = [
  'Introduction to AWS',
  'AWS Storage',
  'Installing Software in Amazon Instance',
  'Security in Public Cloud',
  'Alternate Access',
  'Load Balancing with EC2 & Auto Scaling',
  'CloudWatch with Auto Scaling',
];

export default function AwsCloud() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      {/* TITLE */}
      <h1 className="text-3xl font-bold mb-4">AWS Cloud Training Syllabus</h1>

      {/* DESCRIPTION */}
      <p className="text-gray-600 mb-8">
        This AWS Cloud training program is designed to help professionals build
        real-world cloud skills with hands-on experience.
      </p>

      {/* PREREQUISITES */}
      <div className="bg-gray-50 p-6 rounded-md mb-10">
        <h3 className="font-semibold mb-2">Pre-requisites</h3>
        <p className="text-sm text-gray-600">
          No prior AWS experience is required. Basic understanding of IT
          infrastructure is helpful.
        </p>
      </div>

      {/* SYLLABUS ACCORDION */}
      <div className="border rounded-md divide-y">
        {syllabus.map((item, index) => (
          <div key={index}>
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex justify-between items-center px-4 py-3
                         text-left font-medium hover:bg-gray-50"
            >
              {item}
              {openIndex === index ? <Minus /> : <Plus />}
            </button>

            {openIndex === index && (
              <div className="px-4 pb-4 text-sm text-gray-600">
                Detailed explanation and hands-on labs for {item}.
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
