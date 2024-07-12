'use server';

import { redirect } from 'next/navigation';
import { fetchApi } from '@/utils/api';

export default async function createThread (prevState: { error: string }, formData: FormData) {
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;
  const tags = formData.get('tags') as string;
  const tagArray: string[] = tags.split(',').map(tag => tag.trim());

  try {
    const res = await fetchApi('/threads', {
      method: 'POST',
      body: JSON.stringify({ title, content, tags: tagArray }),
    })
    const data = await res.json();
    if (!res.ok) {
      return {
        error: data.error || 'Unknown error',
      }
    }
  } catch (error) {
    console.error(error);
    return {
      error: 'Unknown error',
    }
  } 
  redirect('/');
}
