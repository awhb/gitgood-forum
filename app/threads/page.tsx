'use client';

import ThreadList from '@/components/ThreadList';
import { fetchApi } from '@/utils/api';
import { Thread } from '@/models/models';
import { useEffect, useState } from 'react';

export default function ThreadsPage() {
  const [threads, setThreads] = useState<Thread[]>([]);

  useEffect(() => {
    fetchApi('/threads').then((data) => {
      setThreads(data);
    })
  })

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold my-4">All Threads</h1>
      <ThreadList threads={threads}/>
    </div>
  );
}
