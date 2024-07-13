'use server';

import { fetchApi } from '@/utils/api';
import EditThreadForm from "./EditThreadForm";
import { Thread } from '@/models/models';

export default async function EditThreadPage({ params }: { params: { id: string } }) {
  let thread: Thread | null = null;
  let error: string | null = null;
  
  try {
    const res = await fetchApi(`/threads/${params.id}`, { method: 'GET', cache: 'no-store' });
    const data = await res.json();
    if (res.ok && data.thread) {
      thread = data.thread;
    } else {
      error = data.error || 'Failed to fetch thread';
    }
  } catch (err) {
    error = 'An unexpected error occurred';
  }

  
  if (error || !thread) {
    return <div className="text-red-500">{error}</div>;
  } else {
    return <EditThreadForm thread={thread}/>;
  }
}
