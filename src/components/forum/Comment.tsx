import React, { useState } from 'react';
import { createComment } from '../../services/api';

interface CommentProps {
  threadId: string;
}

const Comment: React.FC<CommentProps> = ({ threadId }) => {
  const [content, setContent] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createComment(threadId, content);
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Add a comment"
      />
      <button type="submit">Post Comment</button>
    </form>
  );
};

export default Comment;
