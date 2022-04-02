import React from 'react';
import Button from '@mui/material/Button';

export default function NaverLoginButton() {
  return (
    <Button
      type="button"
      variant="contained"
      color="naver"
      disableElevation
      sx={{
        width: 450,
        height: 55,
        borderRadius: 2,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
      }}
    >
      네이버로 시작하기
    </Button>
  );
}
