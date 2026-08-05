import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { FiSun, FiMoon, FiMenu, FiX, FiArrowUp, FiMessageCircle, FiPhone } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
// import InteractiveDots from './InteractiveDots';
import logoImage from '../assets/StackMyCode_Logo.png';

export default function Layout() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  // Replace with your actual phone number
  const phoneNumber = "+91 9199541185";
  const phoneUrl = "tel:+919199541185";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-transparent">

      {/* 1. THE ZENTRO DOTS BACKGROUND */}
      {/* <InteractiveDots /> */}

      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "glass h-20"
          : "bg-transparent h-20"
          }`}
      >
        <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
          <Link
  to="/"
  className="
    inline-flex
    items-center
    px-4
    py-2
    rounded-2xl
    bg-white/30
    dark:bg-white/35
    transition-all
    duration-300
    hover:bg-white/45
    dark:hover:bg-white/50
  "
>
  <img
    src={logoImage}
    alt="StackMyCode Logo"
    className="
      h-12
      md:h-14
      w-auto
      object-contain
    "
  />
</Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 font-medium">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} className="hover:text-primary transition-colors">
                {link.name}
              </Link>
            ))}

            {/* Desktop Phone Button */}
            <a href={phoneUrl} className="flex items-center gap-2 px-4 py-2 rounded-full glass hover:border-primary/30 text-sm font-bold transition-all text-primary dark:text-dark-primary">
              <FiPhone size={16} /> {phoneNumber}
            </a>

            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
            <Link to="/contact" className="bg-primary text-white px-5 py-2 rounded-full shadow-lg hover:bg-blue-700 transition hover:scale-105 transform">
              Book Consultation
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center gap-4">
            <button onClick={toggleTheme} className="p-2">
              {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 glass pt-24 px-6 flex flex-col gap-6 text-xl font-semibold lg:hidden"
          >
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} className="border-b border-gray-200 dark:border-gray-800 pb-4">
                {link.name}
              </Link>
            ))}

            {/* Mobile Phone Button (Triggers Mobile Dialer) */}
            <a href={phoneUrl} className="flex items-center justify-center gap-3 bg-blue-50 dark:bg-gray-800 text-primary dark:text-dark-primary px-6 py-4 rounded-2xl text-center mt-2 border border-blue-100 dark:border-gray-700">
              <FiPhone size={24} /> Call Us: {phoneNumber}
            </a>

            <Link to="/contact" className="bg-primary text-white px-6 py-4 rounded-2xl text-center mt-2">
              Book Consultation
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow pt-20 relative z-10">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 pt-16 pb-8 px-6 mt-20 relative z-10 glass">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
          <Link
  to="/"
  className="
    inline-flex
    items-center
    px-4
    py-2
    rounded-2xl
    bg-white/30
    dark:bg-white/35
    transition-all
    duration-300
    hover:bg-white/45
    dark:hover:bg-white/50
  "
>
  <img
    src={logoImage}
    alt="StackMyCode Logo"
    className="
      h-12
      md:h-14
      w-auto
      object-contain
    "
  />
</Link>
            <p className="text-gray-500 dark:text-gray-400 max-w-sm">
              Building Modern Digital Products That Grow Your Business. Build. Scale. Innovate.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-500 dark:text-gray-400">
              <li><Link to="/" className="hover:text-primary">Home</Link></li>
              <li><Link to="/services" className="hover:text-primary">Services</Link></li>
              <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-500 dark:text-gray-400">
              <li><a href={phoneUrl} className="hover:text-primary">{phoneNumber}</a></li>
              <li>contact@stackmycode.in</li>
              <li>Siddha Waterfont, khardaha, Kolkata, India</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} StackMyCode. All rights reserved.</p>
        </div>
      </footer>

      {/* Floating Buttons Container */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
        {/* WhatsApp Button */}
        <motion.a
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          href="https://wa.me/919199541185"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-green-500 text-white rounded-full shadow-2xl hover:bg-green-600 flex items-center justify-center"
          aria-label="Chat on WhatsApp"
        >
          <FiMessageCircle size={24} />
        </motion.a>

        {/* Back to top */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="p-3 bg-primary text-white rounded-full shadow-2xl hover:bg-blue-700"
              aria-label="Back to top"
            >
              <FiArrowUp size={24} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}