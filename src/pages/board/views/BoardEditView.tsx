import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';

import Button from '@mui/material/Button';

import BoardEditWebtoonSearch from '../components/BoardEditWebtoonSearch';
import BoardEditFormTitle from '../components/BoardEditFormTitle';
import BoardEditFormContent from '../components/BoardEditFormContent';

interface FormData {
  webtoon: string;
  title: string;
  content: string;
}

export default function BoardEditView() {
  const formMethods = useForm({
    defaultValues: {
      webtoon: '',
      title: '',
      content: '',
    },
  });
  const { watch, handleSubmit } = formMethods;
  const { webtoon, title, content } = watch();

  const onSubmit = (data: FormData) => {
    // POST
    console.log(data);
  };

  return (
    <FormProvider {...formMethods}>
      <form
        className="mt-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid gap-y-16">
          <BoardEditWebtoonSearch />
          <BoardEditFormTitle />
          <BoardEditFormContent />
        </div>
        <div className="flex justify-end mt-8">
          <Button
            type="submit"
            size="large"
            variant="contained"
            disableElevation
            sx={{ width: 150 }}
            disabled={!webtoon || !title || !content}
          >
            등록
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
