import React from 'react';
import { useFormContext } from 'react-hook-form';

import Input from '@mui/material/Input';

export default function JoinNickname() {
  const { register } = useFormContext();

  return (
    <section className="w-full">
      <p className="flex items-center text-xl before:content-['*'] before:block before:mr-1.5 before:text-red-500">
        닉네임
      </p>
      <Input
        {...register('nickname')}
        placeholder="닉네임을 입력해 주세요"
        fullWidth
        sx={{
          marginTop: '15px',
          fontSize: '1.25rem',
        }}
      />
    </section>
  );
}
