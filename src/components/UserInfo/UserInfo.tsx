import React, { useState } from 'react';

import UserInfoButton from './UserInfoButton';
import UserInfoPopup from './UserInfoPopup';

export default function UserInfo() {
  const [isOpenedPopup, setIsOpenedPopup] = useState(false);

  return (
    <div className="relative">
      <UserInfoButton onClick={() => setIsOpenedPopup(!isOpenedPopup)} />
      <UserInfoPopup isOpened={isOpenedPopup} />
    </div>
  );
}
