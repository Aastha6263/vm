import { useState } from "react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

import Chatbot from "./TalkWithUsButton";

export default function Footer() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      <footer className="bg-gradient-to-r from-[#0b1220] via-[#0e1a33] to-[#0b1220] text-gray-200">
        <FooterTop />
        <FooterBottom onChatOpen={() => setChatOpen(true)} />
      </footer>

      {/* CHATBOT */}
      <Chatbot open={chatOpen} onClose={() => setChatOpen(false)} />
    </>
  );
}

/* ================= TOP ================= */
function FooterTop() {
  return (
    <div className="max-w-7xl mx-auto px-10 py-14">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        <FooterBrand />
        <FooterLinks />
        <FooterFollow />
      </div>
    </div>
  );
}

/* ================= LEFT ================= */
function FooterBrand() {
  return (
    <div>
      <h2
        className="text-2xl mb-4 text-white tracking-wider"
        style={{
          fontFamily: "'Pacifico', cursive",
          textShadow: "0 0 3px rgba(255,255,255,0.6)",
        }}
      >
        VMSS TECHNOLOGIES
      </h2>

      <p className="text-base leading-relaxed mb-6">
        Empowering professionals with skills for the future through
        expert-led training programs and practical learning solutions.
      </p>

      <SocialIcons />
    </div>
  );
}

function SocialIcons() {
  return (
    <div className="flex gap-3">
      <Icon href="https://www.linkedin.com"><FaLinkedinIn /></Icon>
      <Icon href="https://www.facebook.com"><FaFacebookF /></Icon>
      <Icon href="https://twitter.com"><FaXTwitter /></Icon>
      <Icon href="https://www.instagram.com"><FaInstagram /></Icon>
      <Icon href="https://www.youtube.com"><FaYoutube /></Icon>
    </div>
  );
}

function Icon({ children, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-11 h-11 flex items-center justify-center rounded bg-blue-700 hover:bg-blue-600"
    >
      {children}
    </a>
  );
}

/* ================= CENTER ================= */
function FooterLinks() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
      <ul className="space-y-2 text-sm">
        <li>Contact Us</li>
        <li>Help</li>
        <li>About Us</li>
        <li>Privacy Policy</li>
        <li>Careers</li>
      </ul>
    </div>
  );
}

/* ================= RIGHT ================= */
function FooterFollow() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-6">Follow Us</h3>
      <p className="text-sm mb-3">
        Stay connected for updates and new courses
      </p>

      <div className="space-y-2 text-sm">
        <FollowItem icon={<FaLinkedinIn />} text="LinkedIn" href="https://www.linkedin.com" />
        <FollowItem icon={<FaYoutube />} text="YouTube" href="https://www.youtube.com" />
      </div>
    </div>
  );
}

function FollowItem({ icon, text, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 hover:text-white transition"
    >
      {icon}
      <span>{text}</span>
    </a>
  );
}

/* ================= TALK WITH US ================= */
function TalkWithUs({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-slate-900/80 px-5 py-3 rounded-full border border-teal-500/40 hover:bg-slate-800/80 transition-all shadow-lg"
    >
      <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
        💬
      </div>
      <span className="text-white font-medium">Talk with Us</span>
    </button>
  );
}

/* ================= BOTTOM ================= */
function FooterBottom({ onChatOpen }) {
  return (
    <div className="border-t border-blue-500/40">
      <div className="max-w-7xl mx-auto px-10 py-10 flex justify-between items-center text-sm md:text-base">
        <span>© 2024 VMSS TECHNOLOGIES. All rights reserved.</span>
        <TalkWithUs onClick={onChatOpen} />
      </div>
    </div>
  );
}