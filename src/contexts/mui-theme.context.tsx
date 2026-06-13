'use client';
import { theme } from '@/styles/themes';
import { ThemeProvider } from '@mui/material';

export default function MuiThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
