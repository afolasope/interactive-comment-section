import React, { useEffect, useState, useRef } from 'react';
import { UseGlobalContext } from './context';
import { v4 as uuidv4 } from 'uuid';

const ChatBox = () => {
  const {
    user,
    chatInput,
    setUserIsReplying,
    userIsReplying,
    replyRef,
    setUser,
  } = UseGlobalContext();

  const time = new Date();
  let hour = time.getHours();
  let minute = time.getMinutes();
  if (hour < 10 || minute < 10) {
    hour = `0${hour}`;
    minute = `0${minute}`;
  }

  const updateComments = () => {
    const newId = uuidv4();
    setUser(
      user,
      user.comments.push({
        content: chatInput.current.value,
        createdAt: `${hour}:${minute}`,
        id: newId,
        replies: [],
        score: 0,
        user: {
          image: {
            png: '././images/avatars/image-amyrobson.png',
            webp: './images/avatars/image-amyrobson.webp',
          },
          username: user.currentUser.username,
        },
      })
    );
    console.log(user);
  };

  const updateReplies = () => {
    const newId = uuidv4();

    const parentId = parseInt(replyRef.current.id);
    const check = user.comments.find((item) => {
      return item.id === parentId;
    });
    const updatedReplies = check.replies.push({
      content: chatInput.current.value,
      createdAt: '2 days ago',
      id: newId,
      replyingTo: 'somebody',
      score: 2,
    });
    console.log(user);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let input = chatInput.current.value;
    if (input && !userIsReplying) {
      updateComments(input);
    }
    if (userIsReplying && input) {
      updateReplies();
    }
    if (!chatInput.current.focus) {
      setUserIsReplying(false);
    }
    chatInput.current.value = '';
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          name="chat"
          id="chat"
          cols="30"
          ref={chatInput}
          rows="10"
          //   onKeyDown={}
        ></textarea>
        <img
          src={
            !user
              ? user.currentUser.image.png
              : '../../images/avatars/image-juliusomo.png'
          }
          alt="user-image"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatBox;
