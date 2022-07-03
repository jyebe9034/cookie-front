import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';

import Button from '@mui/material/Button';

import BoardEditorWebtoonSearch from '../components/BoardEditorWebtoonSearch';
import BoardEditorFormTitle from '../components/BoardEditorFormTitle';
import BoardEditorFormContent from '../components/BoardEditorFormContent';

interface FormData {
  webtoon: string;
  title: string;
  content: string;
}

export default function BoardEditorView() {
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-y-16">
          <BoardEditorWebtoonSearch />
          <BoardEditorFormTitle />
          <BoardEditorFormContent />
        </div>
        <div className="flex justify-end mt-8">
          <Button
            type="submit"
            size="large"
            variant="contained"
            disableElevation
            disabled={!webtoon || !title || !content}
          >
            등록
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}