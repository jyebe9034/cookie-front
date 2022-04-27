import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';

import Button from '@mui/material/Button';

import JoinAvatar from '../components/JoinAvatar';
import JoinNickname from '../components/JoinNickname';
import JoinTaste from '../components/JoinTaste';

interface Data {
  avatar: FileList | null;
  nickname: string;
  taste: string[];
}

export default function JoinView() {
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
    <div className="flex items-center justify-center min-h-screen">
      <div className="py-36">
        <h1 className="font-fredoka text-6xl text-red-500 text-center">
          tumuto
        </h1>
        <FormProvider {...formMethods}>
          <form
            className="flex flex-col items-center w-[800px] mt-[80px] mx-auto"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="grid gap-y-28">
              <JoinAvatar />
              <JoinNickname />
              <JoinTaste />
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
                borderRadius: '8px',
                fontSize: '1.25rem',
                color: '#fff',
              }}
            >
              가입하기
            </Button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
