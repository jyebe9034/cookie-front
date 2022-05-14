import React from 'react';

import LoginTomatoVideo from '../components/LoginTomatoVideo';
import LoginNaverButton from '../components/LoginNaverButton';
import LoginKakaoButton from '../components/LoginKakaoButton';

export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen">
      <LoginTomatoVideo />
      <div className="relative z-10 -mt-16">
        <h1 className="font-fredoka text-6xl text-center text-white">
          tumuto
        </h1>
        <div className="grid gap-y-5 mt-28">
          <LoginNaverButton />
          <LoginKakaoButton />
        </div>
      </div>
    </div>
  );
}
