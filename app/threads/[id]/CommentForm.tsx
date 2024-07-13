'use client';

import { createComment } from './actions';
import { useFormState, useFormStatus } from 'react-dom';

export default function CommentForm({ thread_id }: { thread_id: number }) {
  const initialState: { error: string, thread_id: number } = {
    error: '' as string,
    thread_id: thread_id
  };
  
  const [state, formAction] = useFormState(createComment, initialState);
  const { pending } = useFormStatus();

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-8">
      <h2 className="text-2xl font-semibold mb-4">Add a Comment</h2>
      <form action={formAction}>
        <label htmlFor="content">Content</label>
        <textarea
          name="content"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button type="submit" disabled={pending} aria-disabled={pending} className="bg-blue-500 text-white p-2 rounded my-2">
          Create
        </button>
        <p className="text-red-500">{state.error}</p>
      </form>
    </div>
  );
}
