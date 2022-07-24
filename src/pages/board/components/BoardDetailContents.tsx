import React from 'react';
import { Viewer } from '@toast-ui/react-editor';

import './ToastUIEditor.css';

interface Props {
  contents?: string;
}

export default function BoardDetailContents({ contents }: Props) {
  return (
    <div className="toastui-editor-box">
      <Viewer initialValue={contents} />
    </div>
  );
}
