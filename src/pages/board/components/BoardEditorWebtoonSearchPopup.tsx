import React from 'react';
import classNames from 'classnames';

import Webtoon from 'components/Webtoon';

interface Props {
  isOpened: boolean;
  onSelectWebtoon(value: string): void;
}

export default function BoardEditorWebtoonSearchPopup({ isOpened, onSelectWebtoon }: Props) {
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
      <button
        type="button"
        className="w-full transition-colors hover:bg-gray-100"
        onClick={() => onSelectWebtoon('1')}
      >
        <Webtoon hasUtils={false} />
      </button>
      <button
        type="button"
        className="w-full transition-colors hover:bg-gray-100"
        onClick={() => onSelectWebtoon('2')}
      >
        <Webtoon hasUtils={false} />
      </button>
      <button
        type="button"
        className="w-full transition-colors hover:bg-gray-100"
        onClick={() => onSelectWebtoon('3')}
      >
        <Webtoon hasUtils={false} />
      </button>
    </div>
  );
}
