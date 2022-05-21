import React from 'react';
import { useFormContext } from 'react-hook-form';

import Input from '@mui/material/Input';

export default function BoardEditFormTitle() {
  const { register } = useFormContext();

  return (
    <section className="w-full">
      <p className="flex items-center text-xl">
        제목
      </p>
      <Input
        {...register('title')}
        placeholder="제목을 입력해 주세요"
        fullWidth
        sx={{
          marginTop: '15px',
          fontSize: '1.25rem',
        }}
      />
    </section>
  );
}
