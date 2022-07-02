import React from 'react';

import Input from '@mui/material/Input';
import SearchIcon from '@mui/icons-material/Search';

export default function BoardSearch() {
  return (
    <div>
      <Input
        type="text"
        placeholder="검색어를 입력해 주세요"
        sx={{
          width: '300px',
          fontSize: '1.125rem',
        }}
      />
      <button
        type="button"
        className="text-gray-400"
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
