import React from 'react';

import WebtoonThumbnail from '../WebtoonThumbnail/WebtoonThumbnail';
import WebtoonInfo from './WebtoonInfo';
import WebtoonUtils from './WebtoonUtils';

interface Props {
  hasUtils?: boolean;
}

export default function Webtoon({ hasUtils }: Props) {
  return (
    <div className="flex items-center p-4">
      {/* <WebtoonThumbnail /> */}
      <div className="flex flex-col gap-y-1 overflow-hidden ml-3">
        <WebtoonInfo />
        {hasUtils && <WebtoonUtils />}
      </div>
    </div>
  );
}

Webtoon.defaultProps = {
  hasUtils: true,
};
