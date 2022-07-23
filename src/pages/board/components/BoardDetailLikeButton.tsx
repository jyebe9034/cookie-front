import React from 'react';
import { useParams } from 'react-router-dom';
import { useQueryClient } from 'react-query';
import classNames from 'classnames';

import IconFavorite from '@mui/icons-material/Favorite';
import IconFavoriteBorder from '@mui/icons-material/FavoriteBorder';

import useLikePost from '../hooks/mutations/useLikePost';

export interface Props {
  isLiked?: boolean;
  likeCount?: number;
}

export default function BoardDetailLikeButton({ isLiked, likeCount }: Props) {
  const { postId } = useParams();

  const queryClient = useQueryClient();
  const { mutate } = useLikePost();

  const handleLikePost = () => {
    mutate(
      { boardSeq: postId },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(['post', postId]);
        },
      },
    );
  };

  return (
    <button
      type="button"
      onClick={handleLikePost}
    >
      <p className={classNames('flex items-center gap-x-1.5 text-lg font-medium', {
        'text-gray-400': !isLiked,
        'text-red-500': isLiked,
      })}
      >
        {isLiked ? <IconFavorite /> : <IconFavoriteBorder />}
        {likeCount}
      </p>
    </button>
  );
}
