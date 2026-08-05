import { FiMonitor, FiSmartphone, FiShoppingBag, FiLayout, FiTool, FiCloud } from 'react-icons/fi';
import React from 'react';

export const SERVICES = [
  { id: 1, title: 'Website Development', desc: 'High-performance, SEO-optimized static and dynamic websites tailored for your brand.', icon: React.createElement(FiMonitor) },
  { id: 2, title: 'Mobile App Development', desc: 'Develops cross-platform mobile applications using Flutter, delivering seamless Android and iOS experiences with a focus on performance and usability..', icon: React.createElement(FiSmartphone) },
  { id: 3, title: 'Custom Web Apps', desc: 'Scalable and secure web applications built with modern JavaScript frameworks.', icon: React.createElement(FiSmartphone) },
  { id: 4, title: 'UI/UX Design', desc: 'Premium, user-centric interfaces that engage users and elevate your digital presence.', icon: React.createElement(FiLayout) },
  { id: 5, title: 'Website Maintenance', desc: 'Continuous updates, security patches, and performance optimization for your platforms.', icon: React.createElement(FiTool) },
  { id: 6, title: 'Cloud Deployment', desc: 'Reliable cloud infrastructure setup using AWS, Vercel, and modern CI/CD pipelines.', icon: React.createElement(FiCloud) },
];

export const PROCESS = [
  { step: '01', title: 'Discovery', desc: 'We analyze your requirements, target audience, and business goals.' },
  { step: '02', title: 'Planning', desc: 'Creating technical specifications, wireframes, and project roadmaps.' },
  { step: '03', title: 'Design', desc: 'Crafting premium UI/UX designs with your brand identity in mind.' },
  { step: '04', title: 'Development', desc: 'Writing clean, scalable, and highly optimized code.' },
  { step: '05', title: 'Testing', desc: 'Rigorous QA, security, and performance testing across devices.' },
  { step: '06', title: 'Deployment', desc: 'Smooth launch to production environments with zero downtime.' },
];

export const FAQS = [
  { q: 'How long does it take to build a website?', a: 'A standard website takes 2-4 weeks, while complex web applications may take 8-12 weeks depending on requirements.' },
  { q: 'Do you provide ongoing support?', a: 'Yes! We offer dedicated maintenance and support packages to keep your software secure and up to date.' },
  { q: 'Will my website be SEO friendly?', a: 'Absolutely. We build with semantic HTML, optimized assets, and modern SEO best practices to ensure high rankings.' },
  { q: 'What technologies do you use?', a: 'We specialize in the modern React ecosystem (React 19, Next.js, Vite), Tailwind CSS, Node.js, and scalable cloud databases.' },
];