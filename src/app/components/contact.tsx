'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_API_KEY;
    
    if (serviceID && templateID && publicKey) {
      emailjs.send(serviceID, templateID, formData, publicKey)
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          setSubmitted(true);
          setFormData({ name: '', email: '', message: '' }); // Reset form after submission
        })
        .catch((error) => {
          console.error('FAILED...', error);
          alert('Oops! Something went wrong. Please try again later.');
        });
    } else {
      console.error('Missing EmailJS environment variables.');
    }
  };

  return (
    <section id="contact" className="py-16 bg-gray-100 text-gray-800">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
        <p className="text-lg mb-8">
          Have a question or want to work together? Fill out the form below or reach out directly.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        ) : (
          <p className="text-green-600 text-lg font-semibold">
            Thank you! Your message has been sent.
          </p>
        )}
      </div>
    </section>
  );
};

export default Contact;
