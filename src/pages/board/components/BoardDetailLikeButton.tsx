import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQueryClient } from 'react-query';
import classNames from 'classnames';

import IconFavorite from '@mui/icons-material/Favorite';
import IconFavoriteBorder from '@mui/icons-material/FavoriteBorder';

import useLikePost from '../hooks/mutations/useLikePost';

export default function BoardDetailLikeButton() {
  const { postId } = useParams();

  const [isLiked, setIsLiked] = useState(false);

  const queryClient = useQueryClient();
  const { mutate } = useLikePost();

  // const handleLikePost = () => {
  //   mutate({ boardSeq: postId });
  // };

  return (
    <button
      type="button"
      onClick={() => setIsLiked(!isLiked)}
    >
      <p className={classNames('flex items-center gap-x-1.5 text-lg font-medium', {
        'text-gray-400': !isLiked,
        'text-red-500': isLiked,
      })}
      >
        {isLiked ? <IconFavorite /> : <IconFavoriteBorder />}
        2,900
      </p>
    </button>
  );
}
