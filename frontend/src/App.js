import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

// Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import CaseStudies from "./components/CaseStudies";
import Blog from "./components/Blog";
import AppointmentCalendar from "./components/AppointmentCalendar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const LandingPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  const helloWorldApi = async () => {
    try {
      const response = await axios.get(`${API}/`);
      console.log("Backend connected:", response.data.message);
    } catch (e) {
      console.error("Backend connection failed:", e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    helloWorldApi();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-bg-page flex items-center justify-center">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 360, 0]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-4xl"
        >
          ⚡
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-page">
      <Header />
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <CaseStudies />
        <Blog />
        <AppointmentCalendar />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;