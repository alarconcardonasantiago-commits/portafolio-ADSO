import { useEffect } from 'react';
import { Box, Container, Typography, Grid, Avatar } from '@mui/material';
import anime from 'animejs';
import { useInView } from 'react-intersection-observer';
import { aboutData } from '../data/portfolioData';

const AboutSection = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      anime({
        targets: '.about-element',
        translateY: [40, 0],
        opacity: [0, 1],
        delay: anime.stagger(150),
        easing: 'easeOutQuart',
        duration: 1200
      });
    }
  }, [inView]);

  return (
    <Box 
      ref={ref}
      sx={{ 
        py: { xs: 10, md: 15 },
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box className="about-element" sx={{ opacity: 0 }}>
              <Avatar 
                alt="Avatar Placeholder"
                sx={{ 
                  width: { xs: 250, md: 350 }, 
                  height: { xs: 250, md: 350 },
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                  bgcolor: 'rgba(255,255,255,0.05)',
                  color: '#555'
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography variant="h2" className="about-element" sx={{ mb: 4, opacity: 0 }}>
              Sobre mí
            </Typography>
            <Typography variant="body1" className="about-element" sx={{ mb: 4, opacity: 0 }}>
              {aboutData.description}
            </Typography>
            
            <Typography variant="h6" className="about-element" sx={{ mb: 2, opacity: 0, fontWeight: 600 }}>
              Intereses:
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
              {aboutData.interests.map((interest, index) => (
                <Box 
                  key={index}
                  className="about-element"
                  sx={{ 
                    px: 2, py: 1, 
                    borderRadius: '20px', 
                    border: '1px solid rgba(255,255,255,0.1)',
                    background: 'rgba(255,255,255,0.02)',
                    opacity: 0,
                    backdropFilter: 'blur(5px)'
                  }}
                >
                  <Typography variant="body2">{interest}</Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;
