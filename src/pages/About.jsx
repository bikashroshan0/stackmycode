import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | StackMyCode</title>
      </Helmet>
      <section className="py-20 px-6 min-h-screen">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-5xl font-extrabold mb-8">
            We are <span className="text-gradient">StackMyCode</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            StackMyCode is a premium software development company dedicated to crafting world-class digital experiences. We bridge the gap between stunning design and robust engineering. Whether you are an early-stage startup or an established enterprise, we provide the technical horsepower to scale your vision.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="glass p-8 rounded-3xl">
              <h3 className="text-4xl font-bold text-primary mb-2">50+</h3>
              <p>Projects Delivered</p>
            </div>
            <div className="glass p-8 rounded-3xl">
              <h3 className="text-4xl font-bold text-primary mb-2">99%</h3>
              <p>Client Satisfaction</p>
            </div>
            <div className="glass p-8 rounded-3xl">
              <h3 className="text-4xl font-bold text-primary mb-2">24/7</h3>
              <p>Dedicated Support</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}