import { useEffect, useRef } from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import anime from 'animejs';
import { useInView } from 'react-intersection-observer';
import { statisticsData } from '../data/statistics';

const StatisticsSection = () => {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });
  const countersRef = useRef([]);

  useEffect(() => {
    if (inView) {
      statisticsData.forEach((stat, index) => {
        const obj = { val: 0 };
        anime({
          targets: obj,
          val: stat.value,
          round: 1,
          easing: 'easeOutExpo',
          duration: 3000,
          update: function() {
            if (countersRef.current[index]) {
              countersRef.current[index].innerHTML = obj.val + stat.suffix;
            }
          }
        });
      });

      anime({
        targets: '.stat-item',
        opacity: [0, 1],
        translateY: [50, 0],
        delay: anime.stagger(200),
        easing: 'easeOutQuad',
        duration: 1000
      });
    }
  }, [inView]);

  return (
    <Box ref={ref} sx={{ py: 15, backgroundColor: '#000', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          {statisticsData.map((stat, index) => (
            <Grid item xs={6} md={3} key={stat.id}>
              <Box 
                className="stat-item"
                sx={{ 
                  textAlign: 'center',
                  opacity: 0
                }}
              >
                <Typography 
                  variant="h2" 
                  ref={el => countersRef.current[index] = el}
                  sx={{ 
                    fontWeight: 700,
                    background: 'linear-gradient(180deg, #FFFFFF 0%, #A1A1AA 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    mb: 1
                  }}
                >
                  0{stat.suffix}
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default StatisticsSection;
