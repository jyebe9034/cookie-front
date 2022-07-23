import React, { useRef } from 'react';

import Input from '@mui/material/Input';
import SearchIcon from '@mui/icons-material/Search';

interface Props {
  onSetTitle(title: string): void;
}

export default function BoardListSearch({ onSetTitle }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <Input
        type="text"
        inputRef={inputRef}
        placeholder="검색어를 입력해 주세요"
        sx={{
          width: '300px',
          fontSize: '1.125rem',
        }}
      />
      <button
        type="button"
        className="text-gray-400"
        onClick={() => onSetTitle(inputRef.current?.value ?? '')}
      >
        <SearchIcon
          sx={{
            width: '30px',
            height: '30px',
          }}
        />
      </button>
    </div>
  );
}
