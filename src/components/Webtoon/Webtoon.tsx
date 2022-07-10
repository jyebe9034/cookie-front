import React from 'react';

import { Webtoon as WebtoonType } from 'types/Webtoon';

import WebtoonThumbnail from '../WebtoonThumbnail/WebtoonThumbnail';
import WebtoonInfo from './WebtoonInfo';
import WebtoonUtils from './WebtoonUtils';

interface Props {
  webtoon: WebtoonType;
  hasUtils?: boolean;
}

export default function Webtoon({ webtoon, hasUtils }: Props) {
  return (
    <div className="flex items-center p-4">
      <WebtoonThumbnail src={webtoon.thumbnail} />
      <div className="flex flex-col gap-y-1 overflow-hidden ml-3">
        <WebtoonInfo webtoon={webtoon} />
        {hasUtils && <WebtoonUtils webtoon={webtoon} />}
      </div>
    </div>
  );
}

Webtoon.defaultProps = {
  hasUtils: true,
};
