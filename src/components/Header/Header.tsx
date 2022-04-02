import React from 'react';

import Logo from './Logo';
import Menu from './Menu';
import UserInfo from '../UserInfo';
import LoginButton from './LoginButton';

export default function Header() {
  return (
    <div className="flex items-center justify-between px-10 py-6">
      <div className="flex items-center">
        <Logo />
        <Menu />
      </div>
      <UserInfo />
      {/* <LoginButton /> */}
    </div>
  );
}
