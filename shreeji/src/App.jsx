import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetails from './pages/ServiceDetails';
import Packages from './pages/Packages';
import Gallery from './pages/Gallery';
import Team from './pages/Team';
import Contact from './pages/Contact';
import BookAppointment from './pages/BookAppointment';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:slug" element={<ServiceDetails />} />
        <Route path="packages" element={<Packages />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="team" element={<Team />} />
        <Route path="contact" element={<Contact />} />
        <Route path="book-appointment" element={<BookAppointment />} />
        {/* Wildcard redirect to Home */}
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
