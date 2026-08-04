import { useEffect } from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import anime from 'animejs';
import { heroData } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const HeroSection = () => {
  const { ref, inView } = useScrollAnimation({
    targets: '.hero-fade-out',
    opacity: [1, 0],
    translateY: [0, -50],
    easing: 'easeOutQuad',
    duration: 800,
    autoplay: false // Controlled by scroll position theoretically, but here we just use it on mount and then handle parallax on window scroll
  }, 0); // We will manually manage the parallax here instead of the hook for full control

  useEffect(() => {
    // Initial reveal animation
    anime({
      targets: '.hero-element',
      translateY: [50, 0],
      opacity: [0, 1],
      delay: anime.stagger(200),
      easing: 'easeOutExpo',
      duration: 1500
    });

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroContent = document.querySelector('.hero-content');
      if (heroContent) {
        heroContent.style.transform = `translateY(${scrollY * 0.4}px)`;
        heroContent.style.opacity = 1 - (scrollY / 700);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box 
      ref={ref}
      sx={{ 
        height: '100vh', 
        display: 'flex', 
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'radial-gradient(circle at 50% 50%, rgba(20,20,20,1) 0%, rgba(0,0,0,1) 100%)'
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }} className="hero-content">
        <Typography 
          variant="h1" 
          className="hero-element"
          sx={{ 
            maxWidth: '800px', 
            mb: 3,
            background: 'linear-gradient(180deg, #FFFFFF 0%, #A1A1AA 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          {heroData.title}
        </Typography>
        <Typography 
          variant="body1" 
          className="hero-element"
          sx={{ maxWidth: '600px', mb: 5, fontSize: '1.25rem' }}
        >
          {heroData.subtitle}
        </Typography>
        <Box className="hero-element" sx={{ display: 'flex', gap: 2 }}>
          <Button variant="contained" size="large">
            {heroData.btnProjects}
          </Button>
          <Button variant="outlined" size="large">
            {heroData.btnAbout}
          </Button>
        </Box>
      </Container>
      
      {/* Decorative blurred blob */}
      <Box 
        sx={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0) 70%)',
          top: '50%',
          right: '-10%',
          transform: 'translateY(-50%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          zIndex: 0
        }}
      />
    </Box>
  );
};

export default HeroSection;
