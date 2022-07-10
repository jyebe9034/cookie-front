import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Button from '@mui/material/Button';

export default function BoardDetailEditButton() {
  const navigate = useNavigate();
  const { postId } = useParams();

  return (
    <Button
      type="button"
      variant="contained"
      color="secondary"
      disableElevation
      sx={{ width: '100px' }}
      onClick={() => navigate(`/board/${postId}`)}
    >
      수정
    </Button>
  );
}
