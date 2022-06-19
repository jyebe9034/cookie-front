import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';

import Button from '@mui/material/Button';

import Avatar from 'components/Avatar';
import Nickname from 'components/Nickname';
import Taste from 'components/Taste';
import MyPageResign from '../components/MyPageResign';

interface Data {
  avatar: FileList | null;
  nickname: string;
  taste: string[];
}

export default function MyPageView() {
  const formMethods = useForm({
    defaultValues: {
      avatar: null,
      nickname: '',
      taste: [],
    },
  });
  const { watch, handleSubmit } = formMethods;
  const nickname = watch('nickname');
  const taste = watch('taste');

  const onSubmit = ({ avatar, ...data }: Data) => {
    const formData = new FormData();

    if (avatar) {
      formData.append('avatar', avatar[0]);
    }

    // POST
    const newData = { ...data, avatar: formData };
  };

  return (
    <FormProvider {...formMethods}>
      <form
        className="flex flex-col items-center w-[800px] mt-[80px] mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid gap-y-28">
          <Avatar />
          <Nickname />
          <Taste />
          <MyPageResign />
        </div>
        <Button
          type="submit"
          variant="contained"
          disabled={!nickname || taste.length === 0}
          disableElevation
          sx={{
            width: '600px',
            marginTop: '120px',
            padding: '10px 0',
            fontSize: '1.25rem',
          }}
        >
          변경하기
        </Button>
      </form>
    </FormProvider>
  );
}
