'use client';
import { useState } from 'react';

export default function ThreadForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('New thread:', { title, content });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Thread Title"
        className="w-full p-2 border rounded"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Thread Content"
        className="w-full p-2 border rounded"
        rows={5}
        required
      ></textarea>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Create Thread
      </button>
    </form>
  );
}
