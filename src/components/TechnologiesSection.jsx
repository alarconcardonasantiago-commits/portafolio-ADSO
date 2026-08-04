import { useEffect } from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import anime from 'animejs';
import { useInView } from 'react-intersection-observer';
import { technologiesData } from '../data/technologies';

const TechnologiesSection = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      anime({
        targets: '.tech-item',
        scale: [0.5, 1],
        opacity: [0, 1],
        delay: anime.stagger(100, { grid: [4, 5], from: 'center' }),
        easing: 'easeOutElastic(1, .6)',
        duration: 1000
      });
    }
  }, [inView]);

  return (
    <Box ref={ref} sx={{ py: 15, minHeight: '100vh', backgroundColor: '#000' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ mb: 8, textAlign: 'center' }}>
          Tecnologías
        </Typography>
        
        <Grid container spacing={4} justifyContent="center">
          {technologiesData.map((tech, index) => (
            <Grid item xs={6} sm={4} md={3} lg={2.4} key={index}>
              <Paper 
                className="tech-item glass"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: 4,
                  height: '100%',
                  opacity: 0,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    borderColor: tech.color,
                    boxShadow: `0 10px 30px ${tech.color}33`
                  }
                }}
              >
                <Box sx={{ color: tech.color, fontSize: '3rem', mb: 2 }}>
                  <tech.icon />
                </Box>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  {tech.name}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TechnologiesSection;
