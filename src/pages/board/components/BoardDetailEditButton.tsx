import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function BoardDetailEditButton() {
  const navigate = useNavigate();

  return (
    <Button
      type="button"
      variant="contained"
      color="secondary"
      disableElevation
      sx={{ width: '100px' }}
      onClick={() => navigate('/board')}
    >
      수정
    </Button>
  );
}
