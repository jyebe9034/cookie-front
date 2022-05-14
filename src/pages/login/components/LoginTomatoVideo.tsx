import React from 'react';
import tomatoVideo from 'assets/videos/tomato.mp4';

export default function LoginTomatoVideo() {
  return (
    <div className="fixed inset-0 after:content-[''] after:block after:absolute after:inset-0 after:bg-black after:opacity-40">
      <video
        autoPlay
        muted
        className="w-screen h-screen object-cover"
        src={tomatoVideo}
      />
    </div>
  );
}
