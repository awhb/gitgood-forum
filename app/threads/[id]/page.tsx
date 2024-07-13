'use server';

import { fetchApi } from '@/utils/api';
import { Thread } from '@/models/models';
import { getUser } from '@/app/actions';
import Link from 'next/link';
import CommentList from '@/components/CommentList';
import CommentForm from './CommentForm';

export default async function ThreadDetail({ params }: { params: { id: string } }) {
  // Fetch thread details from API
  let thread = null;
  const user = await getUser();
  
  try {
    const res = await fetchApi(`/threads/${params.id}`, { method: 'GET', cache: 'no-store'});
    const data = await res.json();
    if (res.ok && data.thread) {
      thread = data.thread as Thread;
    } else {
      console.error('Error fetching thread:', data.error);
    }
  } catch (error) {
    console.error('Error fetching thread: unknown error', error);
  }

  return (
    <div className="max-w-3xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      { !thread 
          ? <p className="text-center text-gray-600">No thread found.</p>
          : !user 
            ? <p className="text-center text-red-600 font-semibold">Unauthorized!</p>
            : <>
              <div className="mb-4 flex justify-between items-center">
                <p>Posted by <span className="font-semibold">{thread.user.username}</span></p>
                {user.ID === thread.user_id 
                  && (<Link href={`/threads/${params.id}/edit`} className="text-blue-600 hover:underline">
                    Edit
                  </Link>
                )}
              </div>
              <h1 className="text-2xl font-bold mb-4">{thread.title}</h1>
              <div className="flex items-center mb-4">
                <span className="mr-2 text-gray-600">Upvotes:</span>
                <span className="font-semibold">{thread.upvotes}</span>
              </div>
              <div className="prose max-w-none mb-8">{thread.content}</div>
              <hr className="my-8" />
              <h2 className="text-xl font-semibold mb-4">Comments</h2>
              <CommentList comments={thread.comments} />
              <CommentForm thread_id={thread.ID} />
            </>
      }
    </div>
  );
}
