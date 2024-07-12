'use server';

import ThreadList from '@/components/ThreadList';
import Link from 'next/link';

export default async function Home() {

  return (
    <main className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-4">Git GOod or Git Chatting!</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-1">
          <Link className="bg-blue-500 text-white p-2 rounded" href="/threads/new">Create New Thread</Link>
        </div>
        <div className="md:col-span-3">
          <ThreadList />
        </div>
      </div>
    </main>
  );
}
