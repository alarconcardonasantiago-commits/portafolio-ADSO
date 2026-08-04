import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar 
      position="fixed" 
      elevation={0}
      sx={{ 
        background: 'rgba(0, 0, 0, 0.5)', 
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', height: '80px' }}>
          <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: '-0.5px' }}>
            ADSO<span style={{ color: '#a1a1aa' }}>.dev</span>
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
            {['Sobre mí', 'Timeline', 'Tecnologías', 'Proyectos', 'Contacto'].map((item) => (
              <Button 
                key={item}
                sx={{ 
                  color: '#a1a1aa', 
                  '&:hover': { color: '#ffffff', backgroundColor: 'transparent' }
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
