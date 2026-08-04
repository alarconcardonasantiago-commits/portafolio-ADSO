import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TimelineSection from './components/TimelineSection';
import TechnologiesSection from './components/TechnologiesSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import StatisticsSection from './components/StatisticsSection';
import GoalsSection from './components/GoalsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { Box } from '@mui/material';

function App() {
  return (
    <Box sx={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh' }}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <TechnologiesSection />
      <SkillsSection />
      <ProjectsSection />
      <StatisticsSection />
      <GoalsSection />
      <ContactSection />
      <Footer />
    </Box>
  );
}

export default App;
