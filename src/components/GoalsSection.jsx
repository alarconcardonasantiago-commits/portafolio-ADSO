import { useEffect } from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import anime from 'animejs';
import { useInView } from 'react-intersection-observer';
import { goalsData } from '../data/portfolioData';

const GoalsSection = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      anime({
        targets: '.goal-text',
        opacity: [0, 1],
        translateX: [-50, 0],
        delay: anime.stagger(150),
        easing: 'easeOutCubic',
        duration: 1000
      });
    }
  }, [inView]);

  return (
    <Box ref={ref} sx={{ py: 15, minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <Container maxWidth="md">
        <Typography variant="h2" className="goal-text" sx={{ mb: 4, opacity: 0 }}>
          {goalsData.title}
        </Typography>
        <Typography variant="body1" className="goal-text" sx={{ mb: 6, opacity: 0, fontSize: '1.25rem' }}>
          {goalsData.description}
        </Typography>
        
        <Grid container spacing={3}>
          {goalsData.goals.map((goal, index) => (
            <Grid item xs={12} key={index}>
              <Box 
                className="goal-text glass"
                sx={{ 
                  p: 3, 
                  borderRadius: '12px',
                  opacity: 0,
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <Box 
                  sx={{ 
                    width: '8px', 
                    height: '8px', 
                    borderRadius: '50%', 
                    backgroundColor: '#fff',
                    mr: 3
                  }} 
                />
                <Typography variant="body1">
                  {goal}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default GoalsSection;
