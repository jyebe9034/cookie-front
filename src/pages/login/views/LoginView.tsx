import React from 'react';
import { Link } from 'react-router-dom';

import TomatoVideo from '../components/TomatoVideo';
import NaverLoginButton from '../components/NaverLoginButton';
import KakaoLoginButton from '../components/KakaoLoginButton';

export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen">
      <TomatoVideo />
      <div className="relative z-10 -mt-16">
        <Link to="/">
          <h1 className="font-display text-6xl text-center text-white">
            tumuto
          </h1>
        </Link>
        <div className="grid gap-y-5 mt-28">
          <NaverLoginButton />
          <KakaoLoginButton />
        </div>
      </div>
    </div>
  );
}
