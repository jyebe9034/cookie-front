import React, { useRef } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

export default function BoardEditFormContent() {
  const editorRef = useRef(null);
  const { control } = useFormContext();

  return (
    <section className="w-full">
      <p className="flex items-center text-xl">
        내용
      </p>
      <div className="mt-[15px]">
        <Controller
          name="content"
          control={control}
          render={({ field }) => (
            <Editor
              ref={editorRef}
              language="ko"
              height="600px"
              useCommandShortcut
              initialEditType="wysiwyg"
              placeholder="내용을 입력해주세요"
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
