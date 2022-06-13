import React from 'react';
import Button from '@mui/material/Button';

export default function LoginNaverButton() {
  return (
    <Button
      type="button"
      variant="contained"
      color="naver"
      disableElevation
      sx={{
        width: 450,
        height: 55,
        fontSize: 18,
        fontWeight: 'bold',
      }}
    >
      네이버로 시작하기
    </Button>
  );
}
