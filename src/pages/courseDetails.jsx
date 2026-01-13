import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';

const courses = {
  // Programming
  c: 'C Programming',
  'c-sharp': 'C# Programming',
  net: '.NET',
  perl: 'Perl',

  // Dev & Web
  python: 'Python Programming',
  java: 'Java Development',
  javascript: 'JavaScript',

  // UI & Markup
  html: 'HTML',
  css: 'CSS',

  sql: 'SQL',
  typescript: 'TypeScript',
  php: 'PHP',
  swift: 'Swift',
  dart: 'Dart',
  scala: 'Scala',
  go: 'Go Programming',
  kotlin: 'Kotlin',
  rust: 'Rust',
  r: 'R Programming',

  // Cloud
  'aws-cloud': 'AWS Cloud',
  'azure-cloud': 'Microsoft Azure',
  'google-cloud': 'Google Cloud',
  'oracle-cloud': 'Oracle Cloud',
  kubernetes: 'Kubernetes',
  terraform: 'Terraform',
  'cloud-security': 'Cloud Security',
  'azure-devops': 'Azure DevOps',

  // Infrastructure
  citrix: 'Citrix',
  vmware: 'VMware',
  'windows-server': 'Windows Server',
  'linux-administration': 'Linux Administration',
  'networking-fundamentals': 'Networking Fundamentals',
  'azure-active-directory': 'Azure Active Directory',

  // Automation
  powershell: 'PowerShell',
  'python-automation': 'Python Automation',
  'shell-scripting': 'Shell Scripting',
  rpa: 'Robotic Process Automation',
  ansible: 'Ansible',
  'ci-cd-pipelines': 'CI/CD Pipelines',

  // CRM
  salesforce: 'Salesforce',
  'microsoft-dynamics': 'Microsoft Dynamics',
  'oracle-crm': 'Oracle CRM',
  'zoho-crm': 'Zoho CRM',
  hubspot: 'HubSpot',
  creatio: 'Creatio',

  // ServiceNow
  itsm: 'ITSM',
  hrsd: 'HRSD',
  sam: 'SAM',
  itom: 'ITOM',
  integration: 'Integration',
  cmdb: 'CMDB',
  'service-now-developer': 'ServiceNow Developer',

  // Cyber
  splunk: 'Splunk',
  siem: 'SIEM',
  soc: 'SOC',
  'ethical-hacking': 'Ethical Hacking',
  'network-security': 'Network Security',

  // CyberArk
  cyberark: 'CyberArk Vault',
  pam: 'Privileged Access Management',
  'endpoint-security': 'Endpoint Privilege Security',
};

export default function CourseDetails() {
  const { courseName } = useParams();
  const courseTitle = courses[courseName?.toLowerCase()];

  const [showContact, setShowContact] = useState(false);

  if (!courseTitle) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center text-red-600 text-xl">
          Course not found
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <div className="min-h-screen bg-gray-50 p-10">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow">
          <h1 className="text-3xl font-bold text-blue-600">{courseTitle}</h1>

          <p className="mt-4 text-gray-700">
            Master {courseTitle} with VMSS expert trainers. Our program includes
            hands-on labs, real-time projects, certification guidance, and
            placement assistance.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="p-4 border rounded">
              <h3 className="font-semibold">Duration</h3>
              <p>6 – 8 Weeks</p>
            </div>
            <div className="p-4 border rounded">
              <h3 className="font-semibold">Mode</h3>
              <p>Online / Classroom</p>
            </div>
            <div className="p-4 border rounded">
              <h3 className="font-semibold">Projects</h3>
              <p>Live Industry Projects</p>
            </div>
            <div className="p-4 border rounded">
              <h3 className="font-semibold">Certification</h3>
              <p>VMSS Certification</p>
            </div>
          </div>

          <button
            onClick={() => setShowContact(true)}
            className="mt-8 bg-blue-600 text-white px-8 py-2 rounded hover:bg-blue-700"
          >
            Enroll Now
          </button>
        </div>

        {/* CONTACT POPUP */}
        {showContact && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg w-96 shadow-lg">
              <h2 className="text-xl font-bold text-blue-600 mb-4">
                Contact VMSS
              </h2>

              <p className="text-gray-700">
                To enroll in <b>{courseTitle}</b>, please contact us:
              </p>

              <div className="mt-4 space-y-2">
                <p>
                  📞 <b>Phone:</b> +91 98765 43210
                </p>
                <p>
                  📧 <b>Email:</b> info@vmss.com
                </p>
              </div>

              <p className="mt-4 text-sm text-gray-600">
                Our team will guide you about batches, fees and offers.
              </p>

              <button
                onClick={() => setShowContact(false)}
                className="mt-6 w-full bg-blue-600 text-white py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
