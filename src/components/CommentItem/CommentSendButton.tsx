import React from 'react';

interface Props {
  onClick(): void;
}

export default function CommentSendButton({ onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
    >
      작성
    </button>
  );
}
