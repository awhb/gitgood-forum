// src/components/CommentForm.tsx
'use client';
import { useState } from 'react';

export default function CommentForm({ threadId }: { threadId: string }) {
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement comment creation logic
    console.log('New comment:', { threadId, content });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write a comment..."
        className="w-full p-2 border rounded"
        rows={3}
        required
      ></textarea>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-2">
        Post Comment
      </button>
    </form>
  );
}
