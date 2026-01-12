import { useState } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

export default function Contact() {
  const [titleRef, titleVisible] = useOnScreen({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create mailto link with form data
    const mailtoLink = `mailto:ylgc.delaffairs@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    // Open default email client
    window.location.href = mailtoLink;

    // Clear form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Phone',
      value: '+91 8680000966 - Aditya DP',
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Location',
      value: 'PSG College of Technology, Peelamedu, Coimbatore - 641004',
    },
  ];

  return (
    <section id="contact" className="section">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Title */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300">
            Have questions? We'd love to hear from you.
          </p>
        </div>
        {/* Contact Info */}
        <div className="space-y-6">
          {contactInfo.map((info, index) => (
            <div
              key={info.title}
              className="glass-hover rounded-2xl p-6 flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-blue to-purple-600 flex items-center justify-center flex-shrink-0">
                {info.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">{info.title}</h3>
                <p className="text-gray-300">{info.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}