import { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiMail, FiMapPin, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');

    // EmailJS implementation (Replace with your actual keys in production)
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY')
      .then(() => {
        setStatus('success');
        formRef.current.reset();
      })
      .catch(() => {
        setStatus('error');
      });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | StackMyCode</title>
        <meta name="description" content="Get in touch with StackMyCode to start your next software project." />
      </Helmet>

      <section className="py-20 px-6 min-h-[80vh] flex items-center">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl font-extrabold mb-6">Let's build something <span className="text-gradient">amazing.</span></h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
              Tell us about your project, budget, and timeline. Our team will get back to you within 24 hours.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-lg">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-primary"><FiMail size={24}/></div>
                <div>
                  <p className="font-bold">Email Us</p>
                  <p className="text-gray-600 dark:text-gray-400">contact@stackmycode.in</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-lg">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-primary"><FiMapPin size={24}/></div>
                <div>
                  <p className="font-bold">Location</p>
                  <p className="text-gray-600 dark:text-gray-400">Kolkata, West Bengal, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="glass p-8 md:p-10 rounded-3xl">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <FiCheckCircle className="text-6xl text-green-500 mb-6" />
                <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                <p className="text-gray-600 dark:text-gray-400">We have received your message and will contact you shortly.</p>
                <button onClick={() => setStatus('idle')} className="mt-8 px-6 py-3 bg-primary text-white rounded-full">Send Another Message</button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Full Name</label>
                    <input required name="user_name" type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-transparent focus:border-primary outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email Address</label>
                    <input required name="user_email" type="email" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-transparent focus:border-primary outline-none transition-all" placeholder="john@company.com" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Company (Optional)</label>
                    <input name="company" type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-transparent focus:border-primary outline-none transition-all" placeholder="Your Company" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Service Required</label>
                    <select name="service" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-transparent focus:border-primary outline-none transition-all">
                      <option>Website Development</option>
                      <option>Web Application</option>
                      <option>Mobile App Devlopment</option>
                      <option>UI/UX Design</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea required name="message" rows="4" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-transparent focus:border-primary outline-none transition-all resize-none" placeholder="Tell us about your project goals..."></textarea>
                </div>
                
                {status === 'error' && (
                  <p className="text-red-500 flex items-center gap-2"><FiAlertCircle /> Something went wrong. Please email us directly.</p>
                )}

                <button disabled={status === 'loading'} type="submit" className="w-full py-4 bg-primary hover:bg-blue-700 text-white font-bold rounded-xl transition-all flex justify-center items-center gap-2 shadow-lg disabled:opacity-70">
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}