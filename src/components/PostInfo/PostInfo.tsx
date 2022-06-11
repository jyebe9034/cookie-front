import React from 'react';

import IconVisibility from '@mui/icons-material/Visibility';
import IconFavorite from '@mui/icons-material/Favorite';
import IconChat from '@mui/icons-material/Chat';

export default function PostInfo() {
  return (
    <>
      <div className="flex items-center gap-x-1.5 text-gray-400">
        <IconVisibility />
        2,900
      </div>
      <div className="flex items-center gap-x-1.5 text-gray-400">
        <IconFavorite />
        2,900
      </div>
      <div className="flex items-center gap-x-1.5 text-gray-400">
        <IconChat />
        2,900
      </div>
    </>
  );
}
