import React from 'react';

import HeaderLogo from './HeaderLogo';
import HeaderMenu from './HeaderMenu';
import UserInfo from '../UserInfo';
// import HeaderLoginButton from './HeaderLoginButton';

export default function Header() {
  return (
    <div className="flex items-center justify-between px-10 py-6">
      <div className="flex items-center">
        <HeaderLogo />
        <HeaderMenu />
      </div>
      <UserInfo />
      {/* <HeaderLoginButton /> */}
    </div>
  );
}
