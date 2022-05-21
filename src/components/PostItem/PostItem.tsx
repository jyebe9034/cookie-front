/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import IconVisibility from '@mui/icons-material/Visibility';
import IconFavorite from '@mui/icons-material/Favorite';
import IconChat from '@mui/icons-material/Chat';

import WebtoonThumbnail from 'components/WebtoonThumbnail';
import Tag from 'components/Tag';

export default function PostItem() {
  return (
    <div className="flex items-center p-5 rounded-lg transition-colors hover:bg-gray-100">
      <Link
        to="/"
        className="flex flex-1 items-center gap-x-5 mr-6"
      >
        <WebtoonThumbnail size="large" />
        <div className="grid flex-1 gap-y-3">
          <div className="flex gap-x-2">
            <Tag name="네이버" />
            <Tag name="드라마" />
          </div>
          <p className="text-lg truncate">
            달글 제목 달글 제목 달글 제목 달글 제목 달글 제목 달글 제목 달글 제목 달글 제목 달글 제목 달글 제목 달글 제목 달글 제목 달글 제목 달글 제목 달글 제목 달글 제목 달글 제목 달글 제목 달글 제목 달글 제목 달글 제목 달글 제목 달글 제목 달글 제목 달글 제목 달글 제목 달글 제목 달글 제목 달글 제목 달글 제목 달글 제목 달글 제목 달글 제목 달글 제목
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
      </Link>
      <Button
        type="button"
        size="large"
        variant="outlined"
        disableElevation
      >
        웹툰 보기
      </Button>
    </div>
  );
}
