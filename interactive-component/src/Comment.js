import './getLocalStorage';
import { ScoreCard } from './ScoreCard';
import { ReplyBtn } from './ReplyBtn';

const Comment = ({
  id,
  content,
  children,
  user,
  createdAt,
  comments,
  parentId,
}) => {
  let ownerIsTyping = false;
  if (user.username === 'juliusomo') {
    ownerIsTyping = true;
  }

  return (
    <div className="container" style={{ border: '1px solid red' }}>
      <article key={id} className="chat-container">
        <div className="chat-content">
          <div className="chat-details">
            <img src={user.image} alt={id} />
            <h3>{user.username}</h3>
            <p>{createdAt}</p>
            <p>{content}</p>
          </div>
          {ownerIsTyping ? (
            <div>
              <p>edit</p>
              <p>delete</p>
            </div>
          ) : (
            <div>
              <ScoreCard />
              <ReplyBtn
                id={id}
                user={user}
                comments={comments}
                parentId={parentId}
              />
            </div>
          )}
        </div>
        <div className="replies" style={{ paddingLeft: 100 }}>
          {children}
        </div>
      </article>
    </div>
  );
};

export default Comment;
