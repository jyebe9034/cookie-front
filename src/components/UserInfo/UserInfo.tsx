import React, { useState } from 'react';

import ClickAwayListener from '@mui/material/ClickAwayListener';

import UserInfoButton from './UserInfoButton';
import UserInfoPopup from './UserInfoPopup';

export default function UserInfo() {
  const [isOpenedPopup, setIsOpenedPopup] = useState(false);

  return (
    <ClickAwayListener onClickAway={() => setIsOpenedPopup(false)}>
      <div className="relative">
        <UserInfoButton onClick={() => setIsOpenedPopup(!isOpenedPopup)} />
        <UserInfoPopup isOpened={isOpenedPopup} />
      </div>
    </ClickAwayListener>
  );
}
