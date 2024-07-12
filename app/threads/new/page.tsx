'use client';

import { useFormState, useFormStatus } from 'react-dom';
import createThread from './actions';

const initialState: { error: string } = {
  error: '',
};

export default function CreateThreadPage() {
  const [state, formAction] = useFormState(createThread, initialState);
  const { pending } = useFormStatus();

  return (
    <div className="container mx-auto px-4 max-w-md">
      <h1 className="text-2xl font-bold my-4">Create New Thread</h1>
      <form action={formAction}>
        <label htmlFor="title">New Thread Title (unique)</label>
        <input
          name="title"
          type="text"
          className="w-full p-2 border rounded my-2"
          required
          autoFocus
        />
        <label htmlFor="content">Content</label>
        <input 
          name="content"
          type="text"
          className="w-full p-2 border rounded my-2"
          required
        />
        <label htmlFor="tags">Tags (comma separated)</label>
        <input
          name="tags"
          type="text"
          className="w-full p-2 border rounded my-2"
        />
        <button type="submit" disabled={pending} aria-disabled={pending} className="w-full bg-blue-500 text-white p-2 rounded my-2">
          Create Thread
        </button>
        <p className="text-red-500">{state.error}</p>
      </form>
    </div>
  );
}
