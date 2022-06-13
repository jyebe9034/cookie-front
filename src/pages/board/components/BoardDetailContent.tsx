import React from 'react';
import { Viewer } from '@toast-ui/react-editor';

import './ToastUIEditor.css';

export default function BoardDetailContent() {
  return (
    <div className="toastui-editor-box">
      <Viewer initialValue="<p>글 내용 입니다. 에디터를 적용했어요.</p>" />
    </div>
  );
}
