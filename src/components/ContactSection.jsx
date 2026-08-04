import { useEffect } from 'react';
import { Box, Container, Typography, Grid, TextField, Button, Paper } from '@mui/material';
import anime from 'animejs';
import { useInView } from 'react-intersection-observer';
import { contactData } from '../data/portfolioData';

const ContactSection = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      anime({
        targets: '.contact-anim',
        translateY: [50, 0],
        opacity: [0, 1],
        delay: anime.stagger(150),
        easing: 'easeOutQuad',
        duration: 1000
      });
    }
  }, [inView]);

  return (
    <Box ref={ref} sx={{ py: 15, backgroundColor: '#000' }}>
      <Container maxWidth="md">
        <Typography variant="h2" className="contact-anim" sx={{ mb: 3, textAlign: 'center', opacity: 0 }}>
          {contactData.title}
        </Typography>
        <Typography variant="body1" className="contact-anim" sx={{ mb: 8, textAlign: 'center', color: 'text.secondary', opacity: 0 }}>
          {contactData.subtitle}
        </Typography>
        
        <Paper 
          className="contact-anim glass"
          sx={{ 
            p: { xs: 4, md: 8 }, 
            opacity: 0,
            borderRadius: '24px'
          }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <TextField 
                fullWidth 
                label="Nombre" 
                variant="outlined" 
                InputProps={{
                  sx: { borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.02)' }
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField 
                fullWidth 
                label="Correo electrónico" 
                variant="outlined" 
                InputProps={{
                  sx: { borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.02)' }
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                fullWidth 
                label="Mensaje" 
                variant="outlined" 
                multiline 
                rows={4}
                InputProps={{
                  sx: { borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.02)' }
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button 
                variant="contained" 
                size="large" 
                fullWidth
                sx={{ py: 2, fontSize: '1.1rem' }}
              >
                Enviar Mensaje
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default ContactSection;
