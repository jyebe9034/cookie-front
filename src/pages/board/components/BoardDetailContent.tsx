import React from 'react';
import { Viewer } from '@toast-ui/react-editor';

import './ToastUIEditor.css';

interface Props {
  content?: string;
}

export default function BoardDetailContent({ content }: Props) {
  return (
    <div className="toastui-editor-box">
      <Viewer initialValue={content} />
    </div>
  );
}
