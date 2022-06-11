import React, { useState } from 'react';
import classNames from 'classnames';

import IconFavorite from '@mui/icons-material/Favorite';
import IconFavoriteBorder from '@mui/icons-material/FavoriteBorder';

export default function BoardDetailLikeButton() {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setIsLiked(!isLiked)}
    >
      <p className={classNames('flex items-center gap-x-1.5 text-xl font-medium', {
        'text-gray-400': !isLiked,
        'text-red-500': isLiked,
      })}
      >
        {isLiked ? <IconFavorite fontSize="large" /> : <IconFavoriteBorder fontSize="large" />}
        2,900
      </p>
    </button>
  );
}
