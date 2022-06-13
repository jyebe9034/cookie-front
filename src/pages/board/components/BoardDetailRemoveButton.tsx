import React from 'react';
import Button from '@mui/material/Button';

export default function BoardDetailRemoveButton() {
  return (
    <Button
      type="button"
      variant="contained"
      color="secondary"
      disableElevation
      sx={{ width: '100px' }}
    >
      삭제
    </Button>
  );
}
