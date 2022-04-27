import React from 'react';

import { ReactComponent as BannerImage } from 'assets/images/img_main_banner.svg';

export default function MainBanner() {
  return (
    <div className="h-[616px]">
      <div className="flex justify-center overflow-hidden absolute top-0 left-0 -z-10 w-screen h-[700px] bg-red-50">
        <div className="flex items-center relative w-[1300px]">
          <h2 className="font-jalnan text-6xl leading-snug">
            <span className="text-red-500">
              투 머치 토커
            </span>
            들의
            <br />
            재미있는 세상 이야기
          </h2>
          <div className="absolute right-0 top-[150px] -z-10 scale-[2.5]">
            <div className="-scale-x-100">
              <BannerImage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
