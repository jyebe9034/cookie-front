import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    naver: Palette['primary'];
    kakao: Palette['primary'];
  }
  interface PaletteOptions {
    naver: PaletteOptions['primary'];
    kakao: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    naver: true;
    kakao: true;
  }
}
