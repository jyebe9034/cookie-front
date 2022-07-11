import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQueryClient } from 'react-query';

import Button from '@mui/material/Button';

import useDeletePost from '../hooks/mutations/useDeletePost';

export default function BoardDetailDeleteButton() {
  const navigate = useNavigate();
  const { postId } = useParams();

  const { mutate } = useDeletePost();
  const queryClient = useQueryClient();

  const handleDeletePost = () => {
    mutate(
      { id: postId },
      {
        onSuccess: () => {
          queryClient.removeQueries(['posts']);
          queryClient.removeQueries(['post', postId]);
          navigate('/board');
        },
      },
    );
  };

  return (
    <Button
      type="button"
      variant="contained"
      color="secondary"
      disableElevation
      sx={{ width: '100px' }}
      onClick={handleDeletePost}
    >
      삭제
    </Button>
  );
}
