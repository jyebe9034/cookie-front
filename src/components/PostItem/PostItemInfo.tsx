import React from 'react';

import IconVisibility from '@mui/icons-material/Visibility';
import IconFavorite from '@mui/icons-material/Favorite';
import IconChat from '@mui/icons-material/Chat';

import Tag from 'components/Tag';

export default function PostItemInfo() {
  return (
    <div className="grid flex-1 gap-y-3">
      <div className="flex gap-x-2">
        <Tag name="네이버" />
        <Tag name="드라마" />
      </div>

      <p className="text-lg truncate">
        달글 제목 달글 제목 달글 제목 달글 제목 달글 제목 달글 제목 달글 제목 달글 제목 달글 제목
      </p>

      <div className="flex items-center gap-x-4 -mt-1">
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
      </div>
    </div>
  );
}
