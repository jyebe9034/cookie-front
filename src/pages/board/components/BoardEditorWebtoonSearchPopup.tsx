import React from 'react';
import classNames from 'classnames';

import IconSearchOff from '@mui/icons-material/SearchOff';

import { Webtoon as WebtoonType } from 'types/Webtoon';

import Webtoon from 'components/Webtoon';

interface Props {
  isOpened: boolean;
  webtoons?: WebtoonType[];
  onSelectWebtoon(value: number): void;
}

export default function BoardEditorWebtoonSearchPopup({
  isOpened, webtoons, onSelectWebtoon,
}: Props) {
  return (
    <div className={classNames('overflow-y-auto absolute left-0 w-full max-h-[450px] bg-white rounded-lg shadow-xl transition-all', {
      '-z-10': !isOpened,
      'top-8': !isOpened,
      'opacity-0': !isOpened,
      'z-30': isOpened,
      'top-12': isOpened,
      'opacity-100': isOpened,
    })}
    >
      {webtoons?.length === 0 && (
        <div className="flex flex-col gap-y-3 items-center justify-center py-8 text-gray-400">
          <IconSearchOff
            sx={{
              width: '50px',
              height: '50px',
            }}
          />
          검색하신 웹툰을 찾을 수 없습니다. 다시 확인해 주세요.
        </div>
      )}
      {webtoons?.map((webtoon) => (
        <button
          type="button"
          key={webtoon.webtoonSeq}
          className="w-full transition-colors hover:bg-gray-100"
          onClick={() => onSelectWebtoon(webtoon.webtoonSeq)}
        >
          <Webtoon
            webtoon={webtoon}
            hasUtils={false}
          />
        </button>
      ))}
    </div>
  );
}
