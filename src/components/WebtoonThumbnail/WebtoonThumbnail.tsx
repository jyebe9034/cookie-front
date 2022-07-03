import React from 'react';
import classnames from 'classnames';

interface Props {
  size?: 'medium' | 'large';
  src: string;
}

export default function WebtoonThumbnail({ size = 'medium', src }: Props) {
  return (
    <div className={classnames('shrink-0 overflow-hidden relative bg-gray-600 rounded-md', {
      'w-16': size === 'medium',
      'h-13': size === 'medium',
      'w-31': size === 'large',
      'h-26': size === 'large',
    })}
    >
      <img
        src={src}
        className="w-full"
      />
      <div className={classnames('flex items-center justify-center absolute bottom-0 bg-naver rounded-tr-md', {
        'w-5': size === 'medium',
        'h-5': size === 'medium',
        'w-8': size === 'large',
        'h-8': size === 'large',
      })}
      >
        <p className={classnames('font-bold text-sm text-white', {
          'text-sm': size === 'medium',
          'text-xl': size === 'large',
        })}
        >
          N
        </p>
      </div>
    </div>
  );
}
