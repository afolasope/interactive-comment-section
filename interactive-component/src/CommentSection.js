import React, { useEffect } from 'react';
import { UseGlobalContext } from './context';
import Comment from './Comment';
import { useGetLocalStorage } from './getLocalStorage';

const CommentSection = () => {
  const { user } = UseGlobalContext();

  const comments = user.comments ? user.comments : [];

  return comments.map(({ id, content, replies, score, user, createdAt }) => {
    return (
      <Comment
        key={id}
        id={id}
        content={content}
        score={score}
        user={user}
        createdAt={createdAt}
        comments={comments}
        parentId={id}
      >
        {replies.map((reply) => {
          return (
            <Comment
              key={reply.id}
              parentId={id}
              id={reply.id}
              content={reply.content}
              score={reply.score}
              user={reply.user}
              createdAt={reply.createdAt}
              comments={comments}
            />
          );
        })}
      </Comment>
    );
  });
  // return <div>hello</div>;
};

export default CommentSection;
