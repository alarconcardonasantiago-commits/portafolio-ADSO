import { useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import anime from 'animejs';
import { useInView } from 'react-intersection-observer';
import { timelineData } from '../data/timeline';

const TimelineSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      // Line drawing animation
      anime({
        targets: '.timeline-line',
        height: ['0%', '100%'],
        easing: 'easeInOutQuad',
        duration: 2000
      });

      // Items appearing animation
      anime({
        targets: '.timeline-item',
        opacity: [0, 1],
        translateX: (el, i) => i % 2 === 0 ? [-50, 0] : [50, 0],
        delay: anime.stagger(300, { start: 500 }),
        easing: 'easeOutExpo',
        duration: 1000
      });

      // Dots appearing
      anime({
        targets: '.timeline-dot',
        scale: [0, 1],
        opacity: [0, 1],
        delay: anime.stagger(300, { start: 500 }),
        easing: 'easeOutElastic(1, .8)',
        duration: 800
      });
    }
  }, [inView]);

  return (
    <Box ref={ref} sx={{ py: 15, minHeight: '100vh', position: 'relative' }}>
      <Container maxWidth="md">
        <Typography variant="h2" sx={{ mb: 10, textAlign: 'center' }}>
          Mi Camino ADSO
        </Typography>
        
        <Box sx={{ position: 'relative', wrap: 'nowrap' }}>
          {/* Vertical Line */}
          <Box 
            className="timeline-line"
            sx={{
              position: 'absolute',
              left: { xs: '30px', md: '50%' },
              transform: { xs: 'none', md: 'translateX(-50%)' },
              top: 0,
              bottom: 0,
              width: '2px',
              background: 'linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 100%)',
              height: '0%' // Animated
            }}
          />

          {timelineData.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <Box 
                key={item.id} 
                className="timeline-item"
                sx={{
                  display: 'flex',
                  justifyContent: { xs: 'flex-start', md: isEven ? 'flex-start' : 'flex-end' },
                  alignItems: 'center',
                  mb: 6,
                  position: 'relative',
                  width: '100%',
                  opacity: 0,
                  pl: { xs: '60px', md: 0 }
                }}
              >
                {/* Center Dot */}
                <Box 
                  className="timeline-dot"
                  sx={{
                    position: 'absolute',
                    left: { xs: '30px', md: '50%' },
                    transform: { xs: 'translateX(-50%)', md: 'translate(-50%, -50%)' },
                    top: { xs: '24px', md: '50%' },
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    backgroundColor: '#000',
                    border: '3px solid #fff',
                    zIndex: 2,
                    opacity: 0
                  }}
                />

                {/* Content Card */}
                <Box 
                  className="glass"
                  sx={{
                    width: { xs: '100%', md: '45%' },
                    p: 4,
                    borderRadius: '16px',
                    textAlign: { xs: 'left', md: isEven ? 'right' : 'left' },
                    mr: { xs: 0, md: isEven ? '5%' : 0 },
                    ml: { xs: 0, md: !isEven ? '5%' : 0 }
                  }}
                >
                  <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default TimelineSection;
