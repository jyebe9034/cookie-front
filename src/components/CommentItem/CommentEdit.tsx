import React from 'react';

import CommentSendButton from './CommentSendButton';

interface CommentData {
  contents: string;
}

export default function CommentEdit() {
  const onSubmit = () => {
    // Post
    console.log('아니..Comment.contents값을 꺼내고 싶다구요..');
  };

  return (
    <div className="flex items-center p-3 bg-gray-200">
      <textarea rows={5} className="w-11/12 resize-none rounded-md px-1.5 py-1 mx-2 my-1 text-base" />
      <CommentSendButton onClick={() => { onSubmit(); }} />
    </div>
  );
}
