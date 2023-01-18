import { createTheming } from '@callstack/react-theme-provider';

const palette = {
  brandColorsVoxoMobileBlack: 'rgb(3,23,31)',
  brandColorsVoxoMobileRed: 'rgb(248,30,29)',
  uiColorsWhite: '#ffffff',
  uiColorsTan: '#fbf7f3',
  uiColorsBlack: '#1c1c1c',
  uiColorsUiSuccess: '#28c350',
  uiColorsUiWarning: '#ff9533',
  uiColorsUiDanger: '#f54d43',
  uiColorsUiDisabled: '#bcc7d3',
  uiColorsText: '#001520'
};

export const theme = {
  colors: {
    primary: '#184163',
    lightPrimary: '#031e23',
    secondary: palette.brandColorsVoxoMobileRed,
    action: palette.brandColorsVoxoMobileRed,
    danger: palette.uiColorsUiDanger,
    success: palette.uiColorsUiSuccess,
    white: '#ffffff',
    grey: 'grey',
    lightGrey: '#555',
    borderColor: '#d4d4d4',
    dropDownText: '#536068',
    title: '#2E3F48',
    switchOffColor: '#788287',
    switchOnColor: '#1782FF',
    placeholderColor: '#D4D5D6'
  },
  gradients: {

  },
  fonts: {
    normal: '400',
    regular: '500',
    medium: '600',
    semiBold: '700',
    bold: '900'
  },
  animation: {
    scale: 1.0,
  },
};


const { ThemeProvider, withTheme, useTheme } = createTheming(theme);

export { ThemeProvider, withTheme, useTheme };
