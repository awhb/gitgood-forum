'use client';
import Link from 'next/link';
import { Thread } from '@/models/models';
import { useState, useEffect } from 'react';
import { fetchApi } from '@/utils/api';

export default function ThreadList({ threads }: { threads: Thread[] }) {
    
  return (
    <ul className="space-y-2">
      {threads.map((thread) => (
        <li key={thread.id} className="border p-2 rounded">
          <Link href={`/threads/${thread.id}`}>
            {thread.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
