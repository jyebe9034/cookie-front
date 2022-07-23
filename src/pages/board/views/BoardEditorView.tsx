import React, { useEffect, useMemo } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useQueryClient } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';

import Button from '@mui/material/Button';

import usePost from '../hooks/queries/usePost';
import useCreatePost, { Params as FormData } from '../hooks/mutations/useCreatePost';

import BoardEditorWebtoonSearch from '../components/BoardEditorWebtoonSearch';
import BoardEditorFormTitle from '../components/BoardEditorFormTitle';
import BoardEditorFormContents from '../components/BoardEditorFormContents';

export default function BoardEditorView() {
  const navigate = useNavigate();
  const { postId } = useParams();

  const queryClient = useQueryClient();
  const { data: post } = usePost(
    { id: postId },
    { suspense: true },
  );
  const { mutate } = useCreatePost();

  const formMethods = useForm({
    defaultValues: {
      webtoonSeq: null,
      title: '',
      contents: '',
    },
  });
  const { watch, reset, handleSubmit } = formMethods;
  const formValues = watch();

  useEffect(() => {
    if (post?.board) {
      reset(post.board);
    }
  }, [post?.board]);

  const isDisabledSubmitButton = useMemo(() => {
    const formKeys = Object.keys(formValues) as Array<keyof typeof formValues>;
    return formKeys.some((key) => !formValues[key]);
  }, [formValues]);

  const onSubmit = (data: FormData) => {
    mutate(
      data,
      {
        onSuccess: async (response: any) => {
          const { boardSeq } = await response.json();
          queryClient.removeQueries(['posts']);
          navigate(`/board/${boardSeq}`);
        },
      },
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
