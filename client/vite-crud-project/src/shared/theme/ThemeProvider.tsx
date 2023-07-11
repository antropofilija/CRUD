import { ReactNode } from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';

const theme = {
  palette: {
    white: 'hsl(0, 0%, 100%)',
    light: 'hsl(0, 0%, 96%)',
    black: 'hsl(0, 0%, 4%)',
    dark: 'hsl(0, 0%, 21%)',
    accent: '#485fc7',
    primary: {
      dark: 'hsl(171, 100%, 29%)',
      main: 'hsl(171, 100%, 41%)',
      light: 'hsl(171, 100%, 96%)',
    },
    link: {
      dark: 'hsl(217, 71%, 45%)',
      main: 'hsl(217, 71%, 53%)',
      light: 'hsl(219, 70%, 96%)',
    },
    info: {
      dark: 'hsl(204, 71%, 39%)',
      main: 'hsl(204, 86%, 53%)',
      light: 'hsl(206, 70%, 96%)',
    },
    success: {
      dark: 'hsl(141, 53%, 31%)',
      main: 'hsl(141, 71%, 48%)',
      light: 'hsl(142, 52%, 96%)',
    },
    warning: {
      dark: 'hsl(48, 100%, 29%)',
      main: 'hsl(48, 100%, 67%)',
      light: 'hsl(48, 100%, 96%)',
    },
    danger: {
      dark: 'hsl(348, 86%, 43%)',
      main: 'hsl(348, 100%, 61%)',
      light: 'hsl(347, 90%, 96%)',
    },
    shades: {
      blackBis: 'hsl(0, 0%, 7%)',
      blackTer: 'hsl(0, 0%, 14%)',
      greyDarker: 'hsl(0, 0%, 21%)',
      greyDark: 'hsl(0, 0%, 29%)',
      grey: 'hsl(0, 0%, 48%)',
      greyLight: 'hsl(0, 0%, 71%)',
      greyLighter: 'hsl(0, 0%, 86%)',
      whiteTer: 'hsl(0, 0%, 96%)',
      whiteBis: 'hsl(0, 0%, 98%)',
    },
  },
};

interface IThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: IThemeProviderProps) => {
  return (
    <StyledComponentsThemeProvider theme={theme}>
      {children}
    </StyledComponentsThemeProvider>
  );
};

export default ThemeProvider;
