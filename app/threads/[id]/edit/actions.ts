'use server';

import { redirect } from 'next/navigation';
import { fetchApi } from '@/utils/api';

export async function editThread(prevState: { error: string, thread_id: number }, formData: FormData) {
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const tags = formData.get('tags') as string;
    const tagArray: string[] = tags.split(',').map(tag => tag.trim());
    
    try {
      const res = await fetchApi(`/threads/${prevState.thread_id.toString()}`, {
        method: 'PUT',
        body: JSON.stringify({ title, content, tags: tagArray }),
      })
      const data = await res.json();
      if (!res.ok) {
        return {
          error: data.error as string || 'Unknown error',
          thread_id: prevState.thread_id,
        }
      }
    } catch (error) {
      console.error(error);
      return {
        error: 'Unknown error',
        thread_id: prevState.thread_id,
      }
    }
    redirect(`/threads/${prevState.thread_id}`);
  }
  