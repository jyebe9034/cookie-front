import React from 'react';

import Button from '@mui/material/Button';

export default function MyPageResign() {
  return (
    <section>
      <p className="flex text-xl">
        회원 탈퇴
        <span className="ml-2 text-lg text-red-500">
          탈퇴 후에도 등록된 게시물은 삭제되지 않습니다
        </span>
      </p>
      <div className="mt-[25px] text-lg">
        <Button
          type="button"
          size="large"
          variant="outlined"
          disableElevation
          sx={{ fontSize: '1.125rem' }}
        >
          탈퇴하기
        </Button>
      </div>
    </section>
  );
}
