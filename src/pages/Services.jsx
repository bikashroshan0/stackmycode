import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { SERVICES } from '../utils/constants';

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Our Services | StackMyCode</title>
        <meta name="description" content="Explore our premium software development, UI/UX, and cloud deployment services." />
      </Helmet>
      <section className="py-20 px-6 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Expertise that drives <span className="text-gradient">results.</span></h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">From intuitive designs to complex backend architectures, we build solutions that empower your business to scale.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((srv, i) => (
              <motion.div key={srv.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="p-8 rounded-3xl glass border border-gray-100 dark:border-gray-800/60 hover:shadow-2xl transition-all">
                <div className="w-16 h-16 bg-blue-50 dark:bg-gray-800 rounded-2xl flex items-center justify-center text-3xl text-primary mb-6">
                  {srv.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{srv.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{srv.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}