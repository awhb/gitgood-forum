// src/components/Forum/Thread.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getThread } from '../../services/api';
import CommentList from './CommentList';

interface Thread {
  id: number;
  title: string;
  content: string;
  user: { username: string };
}

const Thread: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [thread, setThread] = useState<Thread | null>(null);

  useEffect(() => {
    getThread(id!).then((response) => setThread(response.data));
  }, [id]);

  return (
    <div>
      {thread ? (
        <>
          <h1>{thread.title}</h1>
          <p>{thread.content}</p>
          <small>by {thread.user.username}</small>
          <CommentList threadId={thread.id.toString()} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Thread;
