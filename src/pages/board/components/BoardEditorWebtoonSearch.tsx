import React, { useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import Input from '@mui/material/Input';
import IconSearch from '@mui/icons-material/Search';
import ClickAwayListener from '@mui/material/ClickAwayListener';

import useWebtoons from '../hooks/queries/useWebtoons';

import BoardEditorWebtoonSearchPopup from './BoardEditorWebtoonSearchPopup';

export default function BoardEditorWebtoonSearch() {
  const inputRef = useRef(null);
  const { setValue } = useFormContext();

  const [title, setTitle] = useState('');
  const [isOpenedWebtoonSearchPopup, setIsOpenedWebtoonSearchPopup] = useState(false);

  const { data: webtoons } = useWebtoons({ title });

  const handleSearchWebtoons = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setTitle(inputRef.current?.value ?? '');
    setIsOpenedWebtoonSearchPopup(true);
  };

  return (
    <section className="w-full">
      <p className="flex items-center text-xl">
        웹툰 검색
      </p>
      <ClickAwayListener onClickAway={() => setIsOpenedWebtoonSearchPopup(false)}>
        <div className="inline-flex items-center gap-x-2 mt-[15px]">
          <div className="relative w-[500px]">
            <Input
              inputRef={inputRef}
              fullWidth
              sx={{ fontSize: '1.25rem' }}
              placeholder="웹툰 이름을 입력해 주세요"
            />
            <BoardEditorWebtoonSearchPopup
              isOpened={isOpenedWebtoonSearchPopup}
              webtoons={webtoons}
              onSelectWebtoon={(value: number) => {
                setValue('webtoonSeq', value);
                setIsOpenedWebtoonSearchPopup(false);
              }}
            />
          </div>
          <button
            type="button"
            className="flex items-center justify-center w-9 h-9 bg-gray-100 rounded-md text-gray-400 transition-colors"
            onClick={handleSearchWebtoons}
          >
            <IconSearch />
          </button>
        </div>
      </ClickAwayListener>
    </section>
  );
}
