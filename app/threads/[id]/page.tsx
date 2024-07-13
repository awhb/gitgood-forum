'use server';

// import CommentList from '@/components/CommentList';
// import CommentForm from '@/components/CommentForm';

import { fetchApi } from '@/utils/api';
import { Thread } from '@/models/models';

export default async function ThreadDetail({ params }: { params: { id: string } }) {
  // Fetch thread details from API
  let thread = null;
  
  try {
    const res = await fetchApi(`/threads/${params.id}`, { method: 'GET' });
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
    <div className="container mx-auto px-4">
      { thread ? 
        <>
          <h1 className="text-3xl font-bold my-4">{thread.title}</h1>
          <p>{thread.content}</p>
        </>
        : <p>No thread found.</p>
      }
      {/* <CommentList /> */}
      {/* <CommentForm /> */}
    </div>
  );
}
