'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const validate = () => {
    const newErrors = { name: '', email: '', message: '' };
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required.';

    setErrors(newErrors);
    return !newErrors.name && !newErrors.email && !newErrors.message;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '' // Clear error message when the user starts typing
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return; // Stop submission if validation fails

    setIsLoading(true);

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
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      console.error('Missing EmailJS environment variables.');
      setIsLoading(false);
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
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 text-white font-semibold rounded-md transition duration-300 ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
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
