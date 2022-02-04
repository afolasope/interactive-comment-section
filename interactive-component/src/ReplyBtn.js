import React from 'react';
import { UseGlobalContext } from './context';

export const ReplyBtn = ({ id, comments, parentId }) => {
  const { chatInput, setUserIsReplying, replyRef } = UseGlobalContext();
  const handleReply = () => {
    chatInput.current.focus();
    setUserIsReplying(true);
    replyRef.current.id = parentId;
  };

  return (
    <div>
      <button ref={replyRef} type="submit" onClick={handleReply}>
        reply
      </button>
    </div>
  );
};
