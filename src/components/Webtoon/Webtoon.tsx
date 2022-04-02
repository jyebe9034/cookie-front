import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import ClickAwayListener from '@mui/material/ClickAwayListener';
import MoreVert from '@mui/icons-material/MoreVert';

export default function Webtoon() {
  const [isShownUtil, setIsShownUtil] = useState(false);

  return (
    <div className="flex items-center p-4">
      <div className="shrink-0 overflow-hidden relative w-16 h-16 bg-gray-600 rounded-md">
        {/* 웹툰 썸네일 영역 */}
        <div className="flex items-center justify-center absolute bottom-0 w-5 h-5 bg-naver rounded-tr-md">
          <p className="font-bold text-sm text-white">
            N
          </p>
        </div>
      </div>

      <div className="flex-1 overflow-hidden ml-3">
        <ul className="flex">
          <li className="flex overflow-hidden after:content-['/'] after:block after:mx-2">
            <p className="truncate">
              세상에서 가장 긴 웹툰 제목입니다.
            </p>
          </li>
          <li className=" max-w-[90px]">
            <p className="truncate">
              세상에서 가장 긴 웹툰 작가 이름입니다.
            </p>
          </li>
        </ul>
        <p className="mt-0.5 text-sm text-gray-400 truncate">
          세상에서 가장 긴 웹툰 장르입니다. 말줄임표가 확인되어야 합니다.
        </p>
      </div>

      <ClickAwayListener onClickAway={() => setIsShownUtil(false)}>
        <div className="relative">
          <button
            type="button"
            className="py-4 px-1"
            onClick={() => setIsShownUtil(!isShownUtil)}
          >
            <MoreVert color="action" />
          </button>

          <ul className={classNames('absolute -top-1.5 bg-white border-[1px] border-gray-100 rounded-lg shadow-lg transition-all divide-y', {
            '-z-10': !isShownUtil,
            'right-4': !isShownUtil,
            'opacity-0': !isShownUtil,
            'z-0': isShownUtil,
            'right-8': isShownUtil,
            'opacity-100': isShownUtil,
          })}
          >
            <li>
              <a
                href="/"
                target="_blank"
                className="block w-28 py-2 text-sm text-center text-gray-500 transition-colors hover:bg-gray-100"
              >
                웹툰 보러가기
              </a>
            </li>
            <li>
              <Link
                to="/"
                className="block w-28 py-2 text-sm text-center text-gray-500 transition-colors hover:bg-gray-100"
              >
                달글 보러가기
              </Link>
            </li>
          </ul>
        </div>
      </ClickAwayListener>
    </div>
  );
}
