import React from 'react';

import Button from '@mui/material/Button';

import ProfileThumbnail from 'components/ProfileThumbnail';
import CommentItemInfo from './CommentItemInfo';

export default function CommentItem() {
  return (
    <div className="flex items-center p-3 rounded-lg transition-colors">
      <div className="flex items-center p-3">
        <ProfileThumbnail />
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
