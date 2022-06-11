import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    naver: Palette['primary'];
    kakao: Palette['primary'];
    secondary: Palette['secondary'];
  }
  interface PaletteOptions {
    naver: PaletteOptions['primary'];
    kakao: PaletteOptions['primary'];
    secondary: PaletteOptions['secondary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    naver: true;
    kakao: true;
    secondary: true;
  }
}
