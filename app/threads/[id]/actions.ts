'use server';

import { revalidatePath } from 'next/cache';
import { fetchApi } from '@/utils/api';

export async function createComment(prevState: { error: string, thread_id: number }, formData: FormData) {
  const content = formData.get('content') as string;
  const thread_id = prevState.thread_id
  
  try {
    const res = await fetchApi(`/comments`, {
      method: 'POST',
      body: JSON.stringify({ content, thread_id }),
    })
    const data = await res.json();
    if (!res.ok) {
      return {
        error: data.error as string || 'Unknown error',
        thread_id: thread_id,
      }
    }
  } catch (error) {
    console.error(error);
    return {
      error: 'Unknown error',
      thread_id: thread_id,
    }
  }
  revalidatePath(`/threads/${thread_id}`);
  return {
    error: '',
    thread_id: thread_id,
  }
}
