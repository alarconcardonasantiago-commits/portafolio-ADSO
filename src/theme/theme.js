import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffffff', // White for high contrast minimalism
    },
    secondary: {
      main: '#a1a1aa', // Subtle gray
    },
    background: {
      default: '#000000', // Deep black for Apple/Vercel feel
      paper: 'rgba(20, 20, 20, 0.6)', // Glassmorphism base
    },
    text: {
      primary: '#ffffff',
      secondary: '#a1a1aa',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '4rem',
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1.125rem',
      lineHeight: 1.6,
      color: '#a1a1aa',
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          padding: '10px 24px',
          transition: 'all 0.3s ease',
        },
        contained: {
          backgroundColor: '#ffffff',
          color: '#000000',
          '&:hover': {
            backgroundColor: '#e4e4e7',
            transform: 'translateY(-2px)',
          },
        },
        outlined: {
          borderColor: 'rgba(255, 255, 255, 0.2)',
          color: '#ffffff',
          '&:hover': {
            borderColor: '#ffffff',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          borderRadius: '16px',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none', // Remove default MUI overlay in dark mode
        },
      },
    },
  },
});

export default theme;
