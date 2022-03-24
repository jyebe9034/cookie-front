import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';

import tomatoVideo from 'assets/videos/tomato.mp4';

export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="fixed inset-0 after:content-[''] after:block after:absolute after:inset-0 after:bg-black after:opacity-40">
        <video
          autoPlay
          muted
          className="w-screen h-screen object-cover"
          src={tomatoVideo}
        />
      </div>
      <div className="relative z-10">
        <Link to="/">
          <h1 className="font-display text-6xl text-center text-white">
            tumuto
          </h1>
        </Link>
        <div className="grid gap-y-5 mt-28">
          <Button
            type="button"
            variant="contained"
            disableElevation
            sx={{
              width: 450,
              height: 55,
              borderRadius: 2,
              fontSize: 18,
            }}
          >
            네이버로 시작하기
          </Button>
          <Button
            type="button"
            variant="contained"
            disableElevation
            sx={{
              width: 450,
              height: 55,
              borderRadius: 2,
              fontSize: 18,
            }}
          >
            카카오로 시작하기
          </Button>
        </div>
      </div>
    </div>
  );
}
