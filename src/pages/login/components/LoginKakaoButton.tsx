import React from 'react';
import Button from '@mui/material/Button';

export default function LoginKakaoButton() {
  return (
    <Button
      type="button"
      variant="contained"
      color="kakao"
      disableElevation
      sx={{
        width: 450,
        height: 55,
        borderRadius: 2,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#371b1d',
      }}
    >
      카카오로 시작하기
    </Button>
  );
}
