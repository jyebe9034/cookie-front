import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';

import BoardEditFormTitle from '../components/BoardEditFormTitle';
import BoardEditFormContent from '../components/BoardEditFormContent';

export default function BoardEditView() {
  const formMethods = useForm({
    defaultValues: {
      title: '',
      content: '',
    },
  });
  const { handleSubmit } = formMethods;

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-y-16">
          <BoardEditFormTitle />
          <BoardEditFormContent />
        </div>
        <button type="submit">
          등록
        </button>
      </form>
    </FormProvider>
  );
}
