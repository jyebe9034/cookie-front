import React from 'react';

import BannerImage from 'assets/images/img_main_banner.jpeg';

export default function MainBanner() {
  return (
    <div
      className="flex flex-col-reverse h-[35vw] p-10 bg-cover rounded-xl"
      style={{
        backgroundImage: `url(${BannerImage})`,
        backgroundPosition: 'center 40%',
      }}
    >
      <h2 className="font-jalnan text-[1.8vw] leading-snug text-white">
        투 머치 토커들의
        <br />
        즐거운 웹툰 이야기
      </h2>
    </div>
  );
}
