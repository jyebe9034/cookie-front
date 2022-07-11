import React, { useRef } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

import useUploadImage from '../hooks/mutations/useUploadImage';

import './ToastUIEditor.css';

type HookCallback = (url: string, text?: string) => void;

export default function BoardEditorFormContents() {
  const editorRef = useRef(null);
  const { control } = useFormContext();
  const { mutate } = useUploadImage();

  const addImageBlobHook = (blob: Blob | File, callback: HookCallback) => {
    const formData = new FormData();
    formData.append('contentImage', blob);
    mutate(
      formData,
      // { onSuccess: () => callback() }
    );
  };

  return (
    <section className="w-full">
      <p className="flex items-center text-xl">
        내용
      </p>
      <div className="toastui-editor-box mt-[15px] text-lg">
        <Controller
          name="contents"
          control={control}
          render={({ field }) => (
            <Editor
              ref={editorRef}
              language="ko"
              height="600px"
              hideModeSwitch
              useCommandShortcut
              initialEditType="wysiwyg"
              placeholder="내용을 입력해주세요"
              hooks={{ addImageBlobHook }}
              onChange={() => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                const editorInstance = editorRef.current?.getInstance();
                field.onChange(editorInstance.getHTML());
              }}
            />
          )}
        />
      </div>
    </section>
  );
}
