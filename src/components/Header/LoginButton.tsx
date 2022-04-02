import React from 'react';
import Button from '@mui/material/Button';

export default function LoginButton() {
  return (
    <Button
      type="button"
      variant="contained"
      disableElevation
      sx={{ color: '#fff' }}
    >
      로그인
    </Button>
  );
}
