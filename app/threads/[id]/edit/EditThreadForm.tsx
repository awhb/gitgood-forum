'use client';

import { useState } from 'react';
import { useFormState } from 'react-dom';
import { Thread } from '@/models/models';
import { editThread } from './actions';

export default function EditThreadForm({ thread }: { thread: Thread }) {
  // form state
  const initialState: { error: string, thread_id: number } = { error: '', thread_id: thread.ID };
  const [state, formAction] = useFormState(editThread, initialState);
  
  // field state
  const [title, setTitle] = useState(thread.title);
  const [content, setContent] = useState(thread.content);
  const [tags, setTags] = useState(thread.tags.join(', '));

  return (
    <div className="container mx-auto px-4 max-w-md">
      <h1 className="text-2xl font-bold my-4">Edit Thread</h1>
      <form action={formAction}>
        <label htmlFor="title">Thread Title (unique)</label>
        <input
          name="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded my-2"
          required
          autoFocus
        />
        <label htmlFor="content">Content</label>
        <textarea 
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border rounded my-2"
          required
        />
        <label htmlFor="tags">Tags (comma separated)</label>
        <input
          name="tags"
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className="w-full p-2 border rounded my-2"
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded my-2">
          Edit Thread
        </button>
        <p className="text-red-500">{state.error}</p>
      </form>
    </div>
  );
}
