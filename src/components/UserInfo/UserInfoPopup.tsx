import React from 'react';
import classnames from 'classnames';

import UserInfoProfile from './UserInfoProfile';
import UserInfoWebtoon from './UserInfoWebtoon';
import UserInfoUtil from './UserInfoUtil';

interface Props {
  isOpened: boolean;
}

export default function UserInfoPopup({ isOpened }: Props) {
  return (
    <div className={classnames('absolute right-0 w-96 bg-white rounded-lg shadow-xl transition-all', {
      '-z-10': !isOpened,
      'top-8': !isOpened,
      'opacity-0': !isOpened,
      'z-10': isOpened,
      'top-12': isOpened,
      'opacity-100': isOpened,
    })}
    >
      <UserInfoProfile />
      <UserInfoWebtoon />
      <UserInfoUtil />
    </div>
  );
}
