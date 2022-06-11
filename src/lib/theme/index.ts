import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ef4444',
    },
    secondary: {
      main: '#d1d5db',
      dark: '#9ca3af',
    },
    naver: {
      main: '#02d564',
      dark: '#019e4a',
    },
    kakao: {
      main: '#ffdf02',
      dark: '#b59e02',
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            'border-radius': '0.375rem',
            color: '#fff',
          },
        },
        {
          props: { variant: 'outlined' },
          style: {
            'border-radius': '0.375rem',
          },
        },
        {
          props: { size: 'large' },
          style: {
            width: '150px',
          },
        },
      ],
    },
  },
});

export default theme;
