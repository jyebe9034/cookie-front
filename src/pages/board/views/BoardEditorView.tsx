import React, { useEffect, useMemo } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useQueryClient } from 'react-query';

import Button from '@mui/material/Button';

import useCreatePost, { Params as FormData } from '../hooks/mutations/useCreatePost';

import BoardEditorWebtoonSearch from '../components/BoardEditorWebtoonSearch';
import BoardEditorFormTitle from '../components/BoardEditorFormTitle';
import BoardEditorFormContents from '../components/BoardEditorFormContents';

export default function BoardEditorView() {
  const queryClient = useQueryClient();
  const { mutate: createMutate } = useCreatePost();

  const formMethods = useForm({
    defaultValues: {
      webtoonSeq: 1,
      title: '',
      contents: '',
      userSeq: 1, // 임시 유저 seq
    },
  });
  const { watch, register, handleSubmit } = formMethods;
  const formValues = watch();

  useEffect(() => {
    register('userSeq');
  }, []);

  const isDisabledSubmitButton = useMemo(() => {
    const formKeys = Object.keys(formValues) as Array<keyof typeof formValues>;
    return formKeys.some((key) => !formValues[key]);
  }, [formValues]);

  const onSubmit = (data: FormData) => {
    createMutate(
      data,
      { onSuccess: () => queryClient.invalidateQueries(['posts']) },
    );
  };

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-y-16">
          <BoardEditorWebtoonSearch />
          <BoardEditorFormTitle />
          <BoardEditorFormContents />
        </div>
        <div className="flex justify-end mt-8">
          <Button
            type="submit"
            size="large"
            variant="contained"
            disableElevation
            disabled={isDisabledSubmitButton}
          >
            등록
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
