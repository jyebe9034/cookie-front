import React from 'react';
import { useFormContext } from 'react-hook-form';

import Checkbox from 'components/Checkbox';

export default function Taste() {
  const { register } = useFormContext();

  return (
    <section className="w-full">
      <p className="flex items-center text-xl before:content-['*'] before:block before:mr-1.5 before:text-red-500">
        웹툰 취향
        <span className="ml-2 text-lg text-gray-400">
          선택한 장르를 기반으로 웹툰을 추천해 드려요!
        </span>
      </p>
      <div className="flex flex-wrap gap-3 mt-[25px]">
        <Checkbox
          {...register('taste')}
          label="일상"
          value="test1"
        />
        <Checkbox
          {...register('taste')}
          label="개그"
          value="test2"
        />
        <Checkbox
          {...register('taste')}
          label="판타지"
          value="test3"
        />
        <Checkbox
          {...register('taste')}
          label="액션"
          value="test4"
        />
        <Checkbox
          {...register('taste')}
          label="드라마"
          value="test5"
        />
        <Checkbox
          {...register('taste')}
          label="순정"
          value="test6"
        />
        <Checkbox
          {...register('taste')}
          label="감성"
          value="test7"
        />
        <Checkbox
          {...register('taste')}
          label="스릴러"
          value="test8"
        />
        <Checkbox
          {...register('taste')}
          label="무협/사극"
          value="test9"
        />
        <Checkbox
          {...register('taste')}
          label="스포츠"
          value="test10"
        />
      </div>
    </section>
  );
}
