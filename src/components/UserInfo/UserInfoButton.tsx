import React from 'react';

import Avatar from '@mui/material/Avatar';

interface Props {
  onClick(): void;
}

export default function UserInfoButton({ onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
    >
      <Avatar sx={{ width: 30, height: 30 }} />
    </button>
  );
}
