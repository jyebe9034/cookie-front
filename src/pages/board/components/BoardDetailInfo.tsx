import React from 'react';

import Avatar from '@mui/material/Avatar';

import PostInfo from 'components/PostInfo';

export default function BoardDetailInfo() {
  return (
    <div className="flex items-center gap-x-4 mt-5">
      <Avatar sx={{ width: 50, height: 50 }} />
      <div>
        <p>유저 닉네임</p>
        <div className="flex items-center gap-x-4">
          {/* <PostInfo /> */}
        </div>
      </div>
    </div>
  );
}
