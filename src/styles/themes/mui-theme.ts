import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: '#09637E',
    },
    secondary: {
      main: '#088395',
    },
    info: {
      main: '#758A93',
    },
    success: {
      main: '#06923e',
    },
    warning: {
      main: '#ff7d29',
      contrastText: '#ffffff',
    },
    error: {
      main: '#ef4b4b',
    },
    light: {
      main: '#ffffff',
    },
    dark: {
      main: '#000000',
      contrastText: '#ffffff',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
    },
  },
});

declare module '@mui/material/styles' {
  interface PaletteOptions {
    light: {
      main: string;
    };
    dark: {
      main: string;
      contrastText: string;
    };
  }
}
