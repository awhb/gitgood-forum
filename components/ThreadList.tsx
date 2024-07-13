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
          <li key={thread.ID} className="border p-2 rounded">
            <Link href={`/threads/${thread.ID.toString()}`}>
              <div className="flex justify-between">
                <p>{thread.title}</p>
                <p className="text-gray-500">Posted by {thread.user.username}</p>
                <p className="text-gray-500">Upvotes: {thread.upvotes}</p>
                <p className="text-gray-500">Comments: {thread.comments.length}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      }
    </>
  );
}
