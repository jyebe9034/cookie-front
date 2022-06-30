import React from 'react';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

export default function UserInfoProfile() {
  return (
    <div className="flex items-center p-4">
      <div className="flex flex-1 items-center">
        <Avatar sx={{ width: 40, height: 40 }} />
        <p className="ml-4 leading-tight line-clamp-2">
          아주아주 길어서 영역 밖으로 벗어나는 유저의 닉네임입니다. 말줄임표가 적용되어야 해요.
        </p>
      </div>
      <Button
        href="/my-page"
        size="small"
        variant="outlined"
        disableElevation
        sx={{ marginLeft: '20px' }}
      >
        내정보
      </Button>
    </div>
  );
}
