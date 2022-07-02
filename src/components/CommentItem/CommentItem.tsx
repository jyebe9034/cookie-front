import React from 'react';

import Button from '@mui/material/Button';

import Avatar from '@mui/material/Avatar';
import CommentItemInfo from './CommentItemInfo';

export default function CommentItem() {
  return (
    <div className="flex items-center p-3 rounded-lg transition-colors">
      <div className="flex items-center p-3">
        <Avatar sx={{ width: 50, height: 50 }} />
      </div>
      <CommentItemInfo />
      <Button
        type="button"
        size="small"
        variant="text"
        disableElevation
      >
        답글
      </Button>
    </div>
  );
}
