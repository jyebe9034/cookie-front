import React from 'react';
import classnames from 'classnames';

interface Props {
  size?: 'medium' | 'large';
}

export default function ProfileThumbnail({ size = 'medium' }: Props) {
  return (
    <div className={classnames('shrink-0 overflow-hidden relative bg-gray-300 rounded-full', {
      'w-16': size === 'medium',
      'h-16': size === 'medium',
      'w-32': size === 'large',
      'h-32': size === 'large',
    })}
    />
  );
}
