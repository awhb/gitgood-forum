import React, { useEffect, useState } from 'react';
import { getComments } from '../../services/api';

interface Comment {
  id: number;
  content: string;
  user: { username: string };
}

interface CommentListProps {
  threadId: string;
}

const CommentList: React.FC<CommentListProps> = ({ threadId }) => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    getComments(threadId).then((response) => setComments(response.data));
  }, [threadId]);

  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.content}</p>
          <small>by {comment.user.username}</small>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
