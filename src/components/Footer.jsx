import { Box, Container, Typography, IconButton, Stack } from '@mui/material';
import { footerData } from '../data/portfolioData';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box sx={{ py: 6, borderTop: '1px solid rgba(255,255,255,0.05)', backgroundColor: '#000' }}>
      <Container maxWidth="lg">
        <Stack 
          direction={{ xs: 'column', md: 'row' }} 
          justifyContent="space-between" 
          alignItems="center"
          spacing={4}
        >
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: '-0.5px', mb: 1 }}>
              ADSO<span style={{ color: '#a1a1aa' }}>.dev</span>
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', display: 'flex', alignItems: 'center', gap: 1 }}>
              <FaMapMarkerAlt /> {footerData.location}
            </Typography>
          </Box>

          <Stack direction="row" spacing={2}>
            <IconButton href={footerData.github} target="_blank" sx={{ color: 'text.secondary', '&:hover': { color: '#fff' } }}>
              <FaGithub />
            </IconButton>
            <IconButton href={footerData.linkedin} target="_blank" sx={{ color: 'text.secondary', '&:hover': { color: '#fff' } }}>
              <FaLinkedin />
            </IconButton>
            <IconButton href={`mailto:${footerData.email}`} sx={{ color: 'text.secondary', '&:hover': { color: '#fff' } }}>
              <FaEnvelope />
            </IconButton>
          </Stack>

          <Box sx={{ textAlign: { xs: 'center', md: 'right' } }}>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1, maxWidth: '400px', mx: { xs: 'auto', md: 0 } }}>
              Esta es una plantilla creada con fines educativos para un tecnólogo ADSO del SENA, desarrollado de manera virtual.
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              © {new Date().getFullYear()} Portafolio ADSO. Construido con React & Vite.
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
