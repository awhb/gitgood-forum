import React, { useEffect, useState } from 'react';
import { getThreads } from '../../services/api';

interface Thread {
  id: number;
  title: string;
  content: string;
  user: { username: string };
}

const ThreadList: React.FC = () => {
  const [threads, setThreads] = useState<Thread[]>([]);

  useEffect(() => {
    getThreads().then((response) => setThreads(response.data));
  }, []);

  return (
    <div>
      {threads.map((thread) => (
        <div key={thread.id}>
          <h2>{thread.title}</h2>
          <p>{thread.content}</p>
          <small>by {thread.user.username}</small>
        </div>
      ))}
    </div>
  );
};

export default ThreadList;
