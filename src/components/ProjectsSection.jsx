import { useEffect } from 'react';
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';
import anime from 'animejs';
import { useInView } from 'react-intersection-observer';
import { projectsData } from '../data/projects';
import { FaGithub } from 'react-icons/fa';

const ProjectsSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      anime({
        targets: '.project-card',
        translateY: [150, 0],
        opacity: [0, 1],
        delay: anime.stagger(200),
        easing: 'easeOutQuart',
        duration: 1500
      });
    }
  }, [inView]);

  return (
    <Box ref={ref} sx={{ py: 15, minHeight: '100vh', backgroundColor: '#000' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ mb: 8, textAlign: 'center' }}>
          Proyectos
        </Typography>
        
        <Grid container spacing={6}>
          {projectsData.map((project, index) => (
            <Grid item xs={12} md={6} lg={4} key={project.id}>
              <Card 
                className="project-card glass"
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  opacity: 0,
                  overflow: 'hidden',
                  transition: 'transform 0.4s ease',
                  '&:hover': {
                    transform: 'translateY(-15px)',
                  }
                }}
              >
                <Box sx={{ overflow: 'hidden' }}>
                  <CardMedia
                    component="img"
                    height="240"
                    image={project.image}
                    alt={project.title}
                    sx={{ 
                      transition: 'transform 0.6s ease',
                      filter: 'grayscale(40%)',
                      '&:hover': {
                        transform: 'scale(1.05)',
                        filter: 'grayscale(0%)',
                      }
                    }}
                  />
                </Box>
                <CardContent sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3, flexGrow: 1 }}>
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
                    {project.technologies.map((tech, i) => (
                      <Typography 
                        key={i} 
                        variant="caption" 
                        sx={{ 
                          px: 1.5, py: 0.5, 
                          borderRadius: '4px',
                          backgroundColor: 'rgba(255,255,255,0.1)',
                          color: '#fff'
                        }}
                      >
                        {tech}
                      </Typography>
                    ))}
                  </Box>
                  <Button 
                    variant="outlined" 
                    fullWidth 
                    startIcon={<FaGithub />}
                    href={project.link}
                    target="_blank"
                  >
                    Ver Código
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProjectsSection;
