import React, { useState } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import classNames from 'classnames';

import Input from '@mui/material/Input';
import IconSearch from '@mui/icons-material/Search';
import ClickAwayListener from '@mui/material/ClickAwayListener';

import BoardEditorWebtoonSearchPopup from './BoardEditorWebtoonSearchPopup';

export default function BoardEditorWebtoonSearch() {
  const { control, watch } = useFormContext();
  const selectedWebtoon = !!watch('webtoon');

  const [isOpenedPopup, setIsOpenedPopup] = useState(false);

  return (
    <section className="w-full">
      <p className="flex items-center text-xl">
        웹툰 검색
      </p>
      <ClickAwayListener onClickAway={() => setIsOpenedPopup(false)}>
        <div className="inline-flex items-center gap-x-2 mt-[15px]">
          <div className="relative w-[500px]">
            <Controller
              name="webtoon"
              control={control}
              render={({ field }) => (
                <>
                  <Input
                    fullWidth
                    sx={{ fontSize: '1.25rem' }}
                    placeholder="웹툰 이름을 입력해 주세요"
                    value={field.value}
                    onChange={(event) => field.onChange(event.target.value)}
                  />
                  <BoardEditorWebtoonSearchPopup
                    isOpened={isOpenedPopup}
                    onSelectWebtoon={(value: string) => {
                      field.onChange(value);
                      setIsOpenedPopup(false);
                    }}
                  />
                </>
              )}
            />
          </div>
          <button
            type="button"
            className={classNames('flex items-center justify-center w-9 h-9 bg-gray-100 rounded-md text-gray-400 transition-colors', {
              'hover:bg-gray-200': !!selectedWebtoon,
              'hover:text-gray-500': !!selectedWebtoon,
            })}
            disabled={!selectedWebtoon}
            onClick={() => setIsOpenedPopup(!isOpenedPopup)}
          >
            <IconSearch />
          </button>
        </div>
      </ClickAwayListener>
    </section>
  );
}
