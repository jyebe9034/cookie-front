import React from 'react';
import Button from '@mui/material/Button';

export default function BoardDetailRemoveButton() {
  return (
    <Button
      type="button"
      variant="contained"
      color="disabled"
      disableElevation
    >
      삭제
    </Button>
  );
}
