// src/app/threads/new/page.tsx
'use client';
import ThreadForm from '@/components/ThreadForm';

export default function NewThread() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold my-4">Create New Thread</h1>
      <ThreadForm />
    </div>
  );
}
