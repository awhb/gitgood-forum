'use server';

import { cookies } from 'next/headers';

export async function fetchApi(endpoint: string, options: RequestInit = {}) {
  try {
    const res = await fetch(`${process.env.BACKEND_API_URL}${endpoint}`, {
      ...options,
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${cookies().get('Authorization')?.value}`,
        ...options.headers,
      },
    });
    return res;
    
  } catch (error) {
    throw error;
  }
}
