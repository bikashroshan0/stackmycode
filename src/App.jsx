import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Services from './pages/Services';
import About from './pages/About';
import Team from './pages/Team';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="team" element={<Team />} />
        <Route path="*" element={<div className="h-[70vh] flex items-center justify-center text-4xl font-bold">404 - Page Not Found</div>} />
      </Route>
    </Routes>
  );
}

export default App;