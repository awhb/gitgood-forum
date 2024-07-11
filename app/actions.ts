'use server';

import { cookies } from 'next/headers';
import { fetchApi } from '@/utils/api';
import { redirect } from 'next/navigation';
import { User } from '@/models/models';

/**
 * Retrieves the user information from the server if an authorization token is present.
 *
 * @return {Promise<User | null>} A promise that resolves to the user object if the request is successful, or null if there is an error or the token is not present.
 */
export const getUser = async () => {
  const token = cookies().get('Authorization')?.value;
  if (token) {
    try {
      const res = await fetchApi('/validate', {
        method: 'GET',
      });
      const data = await res.json();
      if (res.ok && data.user) {
        return data.user as User;
      } else {
        return null;
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  return null;
};


/**
 * Registers a new user with the provided form data.
 *
 * @param {Object} prevState - The previous state object containing a message property.
 * @param {FormData} formData - The form data containing the username, password, and confirmPassword fields.
 * @return {Promise<Object>} An object containing a message property indicating the result of the registration.
 */
export const register = async (prevState: { success: string, error: string }, formData: FormData) => {
  const username = formData.get('username') as string;
  const password = formData.get('password') as string;
  const confirmPassword = formData.get('confirmPassword') as string;

  if (password !== confirmPassword) {
    return {
      success: '',
      error: 'Passwords do not match',
    }
  }
  
  try {
    const res = await fetchApi('/register', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    })
    const data = await res.json();
    if (res.ok && data.message) {
      return {
        success: data.message,
        error: '',
      }
    } else {
      return {
        success: '',
        error: data.error || 'Unknown error',
      }
    }
  } catch (error) {
    console.error(error);
    return {
      success: '',
      error: 'Unknown error',
    }
  }
}


/**
 * Logs in a user with the provided form data.
 *
 * @param {Object} prevState - The previous state object containing a message property.
 * @param {FormData} formData - The form data containing the username and password fields.
 * @return {Promise<Object>} An object containing a message property indicating the result of the login.
 */
export const login = async (prevState: { message: string }, formData: FormData) => {
  const username = formData.get('username') as string;
  const password = formData.get('password') as string;
  var loginSuccess = false;
  
  try {
    const res = await fetchApi('/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    })
    const data = await res.json();
    if (!res.ok) {
      return {
        message: data.error || 'Unknown error',
      }
    }
    cookies().set('Authorization', data.token, { expires: new Date(Date.now() + 24 * 3600 * 1000) }, );
  } catch (error) {
    console.error(error);
    return {
      message: 'Unknown error',
    }
  } 
  redirect('/');
}


/**
 * Logs out the user by deleting the 'Authorization' cookie and redirecting to the login page.
 *
 * @param {FormData} formData - The form data containing the user's input.
 * @return {Promise<void>} - A promise that resolves when the logout process is complete.
 */
export const logout = async (formData: FormData) => {
  cookies().delete('Authorization');
  redirect('/auth/login');
}
