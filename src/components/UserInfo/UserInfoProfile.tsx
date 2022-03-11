import React from 'react';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

export default function UserInfoProfile() {
  return (
    <div className="flex items-center p-4 border-b">
      <div className="flex items-center">
        <Avatar sx={{ width: 50, height: 50 }} />
        <p className="ml-4 leading-tight line-clamp-2">
          아주아주 길어서 영역 밖으로 벗어나는 유저의 닉네임입니다. 말줄임표가 적용되어야 해요.
        </p>
      </div>
      <Button
        href="/"
        size="small"
        variant="contained"
        disableElevation
        sx={{ marginLeft: '20px', color: '#fff' }}
      >
        내정보
      </Button>
    </div>
  );
}
