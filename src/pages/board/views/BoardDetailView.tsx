import React from 'react';
import { useParams } from 'react-router-dom';

import CommentItem from 'components/CommentItem';
import CommentEditor from 'components/CommentItem/CommentEditor';

import usePost from '../hooks/queries/usePost';

import BoardDetailTitle from '../components/BoardDetailTitle';
import BoardDetailInfo from '../components/BoardDetailInfo';
import BoardDetailContent from '../components/BoardDetailContent';
import BoardDetailUtils from '../components/BoardDetailUtils';

export default function BoardDetailView() {
  const { postId } = useParams();
  const { data } = usePost(
    { id: postId },
    { suspense: true },
  );

  return (
    <>
      <div className="pb-7 border-b">
        <BoardDetailTitle
          title={data?.board.title}
          genre={data?.board.genre}
        />
        <BoardDetailInfo post={data?.board} />
      </div>
      <div className="min-h-[600px] mt-7">
        <BoardDetailContent content={data?.board.contents} />
      </div>
      <div className="mt-7 pt-4 border-t">
        <BoardDetailUtils
          isLiked={data?.board.hasLiked}
          likeCount={data?.board.likeCount}
        />
      </div>

      <div className="grid gap-y-4 mt-10">
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
      </div>
      <div className="grid mt-3">
        <CommentEditor />
      </div>
    </>
  );
}
