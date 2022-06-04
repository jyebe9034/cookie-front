import React, { useRef } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

import './BoardEditFormContent.css';

export default function BoardEditFormContent() {
  const editorRef = useRef(null);
  const { control } = useFormContext();

  const addImageBlobHook = (file: Blob | File) => {
    const formData = new FormData();
    formData.append('contentImage', file);
  };

  return (
    <section className="w-full">
      <p className="flex items-center text-xl">
        내용
      </p>
      <div className="mt-[15px] text-lg">
        <Controller
          name="content"
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

// setEditor() {
//   this.noticeEditor = new Editor({

//     hooks: {
//       addImageBlobHook: (file, callback) => {
//         const formData = new FormData()
//         formData.append('contentImage', file)
// boardService.uploadImageFile(formData).then(response => {
//   callback(response.data.imageUrl, response.data.fileName)
// })
//       }
//     },
//   })
// }
