import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FiArrowRight, FiCheckCircle, FiAward } from 'react-icons/fi';
import { SERVICES, PROCESS, FAQS } from '../utils/constants';
import Team from './Team';
import InteractiveDots from '../components/InteractiveDots';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  return (
    <>
      <Helmet>
        <title>StackMyCode | Build. Scale. Innovate.</title>
        <meta name="description" content="Award-winning software development company building scalable websites and custom web applications for modern businesses." />
      </Helmet>

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-100/60 via-blue-50/40 to-blue-200/50 dark:from-blue-900/30 dark:via-[#030712]/80 dark:to-[#030712]/90"></div>

        {/* The new constrained interactive dots */}
        <InteractiveDots />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="text-center lg:text-left z-10">
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-primary font-semibold text-sm mb-6"
            >
              <FiAward className="w-5 h-5 text-[#F4B400] flex-shrink-0" />
              <span>Award-Winning UI/UX & Development</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
              Building Modern <br className="hidden md:block" />
              <span className="text-gradient">Digital Products</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
              We create scalable websites, powerful web applications, automation solutions and digital experiences that grow your business.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/contact" className="px-8 py-4 rounded-full bg-primary text-white font-semibold shadow-lg hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1 transition-all">
                Book Consultation
              </Link>
              <Link to="/services" className="px-8 py-4 rounded-full glass font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all flex items-center justify-center gap-2">
                View Services <FiArrowRight />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative z-10 hidden lg:block">
            {/* Premium Abstract SVG Graphic representing software/coding */}
            <svg viewBox="0 0 500 500" className="w-full h-auto drop-shadow-2xl">
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2563EB" />
                  <stop offset="100%" stopColor="#38BDF8" />
                </linearGradient>
              </defs>
              <motion.rect animate={{ y: [-10, 10, -10] }} transition={{ repeat: Infinity, duration: 4 }} x="100" y="150" width="300" height="200" rx="20" fill="url(#grad)" opacity="0.9" />
              <motion.rect animate={{ y: [10, -10, 10] }} transition={{ repeat: Infinity, duration: 5 }} x="140" y="200" width="100" height="100" rx="15" fill="#ffffff" opacity="0.2" />
              <motion.circle animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 3 }} cx="340" cy="250" r="40" fill="#ffffff" opacity="0.2" />
              <circle cx="250" cy="250" r="180" stroke="url(#grad)" strokeWidth="2" fill="none" strokeDasharray="10 10" />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="py-12 border-y border-gray-100 dark:border-gray-800/50 bg-gray-50/50 dark:bg-gray-900/20">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-70">
          {['100% Responsive', 'Fast Delivery', 'Modern Tech', 'Clean Code', 'SEO Optimized'].map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-center gap-2 text-lg font-bold text-gray-500 dark:text-gray-400">
              <FiCheckCircle className="text-primary" /> {stat}
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">World-Class <span className="text-gradient">Services</span></h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">We deliver end-to-end software solutions designed to scale and perform at the highest level.</p>
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((srv) => (
              <motion.div key={srv.id} variants={fadeUp} whileHover={{ y: -10 }} className="p-8 rounded-3xl glass group hover:border-primary/50 transition-colors duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-14 h-14 bg-blue-50 dark:bg-gray-800 rounded-2xl flex items-center justify-center text-2xl text-primary mb-6 shadow-sm">
                  {srv.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{srv.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{srv.desc}</p>
                <Link to="/contact" className="text-primary font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
                  Learn More <FiArrowRight />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-32 px-6 bg-gray-50 dark:bg-[#0a0f1c]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Development <span className="text-gradient">Process</span></h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">A systematic approach to bringing your vision to life with precision and transparency.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROCESS.map((step, i) => (
              <motion.div key={step.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative p-8 rounded-3xl bg-white dark:bg-[#111827] shadow-sm border border-gray-100 dark:border-gray-800">
                <span className="text-6xl font-extrabold text-gray-100 dark:text-gray-800/50 absolute top-4 right-6">{step.step}</span>
                <h3 className="text-2xl font-bold mb-4 relative z-10">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 relative z-10">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-2">{faq.q}</h4>
                <p className="text-gray-600 dark:text-gray-400">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Our Team Section */}
      <Team />
    </>
  );
}