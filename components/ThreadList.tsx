'use server';

import Link from 'next/link';
import { Thread } from '@/models/models';
import { fetchApi } from '@/utils/api';

export default async function ThreadList() {
  let threads: Thread[] = [];

  try {
    const res = await fetchApi('/threads', { method: 'GET' });
    const data = await res.json();

    if (res.ok && data.threads) {
      threads = data.threads as Thread[];
    } else {
      console.error('Error fetching threads:', data.error);
    }
  } catch (error) {
    console.error('Error fetching threads: unknown error', error);
  }


  return (
    <>
      { threads.length === 0 ?
        <p>No threads found.</p> : 
        <ul className="space-y-2">
        {threads.map((thread) => (
          <li key={thread.id} className="border p-2 rounded">
            <Link href={`/threads/${thread.id}`}>
              {thread.title}
            </Link>
          </li>
        ))}
      </ul>
      }
    </>
  );
}
