import { useEffect } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import anime from 'animejs';
import { useInView } from 'react-intersection-observer';
import { skillsData } from '../data/skills';

const SkillsSection = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      anime({
        targets: '.skill-card',
        translateY: [100, 0],
        opacity: [0, 1],
        delay: anime.stagger(150),
        easing: 'easeOutExpo',
        duration: 1200
      });
    }
  }, [inView]);

  return (
    <Box ref={ref} sx={{ py: 15, minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ mb: 8, textAlign: 'center' }}>
          Habilidades
        </Typography>
        
        <Grid container spacing={4}>
          {skillsData.map((skillGroup, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card 
                className="skill-card"
                sx={{ 
                  height: '100%',
                  opacity: 0,
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                    {skillGroup.category}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {skillGroup.skills.map((skill, i) => (
                      <Typography 
                        key={i} 
                        variant="body2" 
                        sx={{ 
                          color: 'text.secondary',
                          display: 'flex',
                          alignItems: 'center',
                          '&::before': {
                            content: '""',
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            backgroundColor: '#fff',
                            marginRight: '8px'
                          }
                        }}
                      >
                        {skill}
                      </Typography>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default SkillsSection;
