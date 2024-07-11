'use client';

import Link from 'next/link';
import { login } from '@/app/actions';
import { useFormState, useFormStatus } from 'react-dom';

const initialState = {
  message: '',
};

export default function Login() {
  const [state, formAction] = useFormState(login, initialState);
  const { pending } = useFormStatus();

  return (
    <div className="container mx-auto px-4 max-w-md">
      <h1 className="text-2xl font-bold my-4">Login</h1>
      <form action={formAction}>
        <label htmlFor="username">Username</label>
        <input
          name="username"
          type="text"
          className="w-full p-2 border rounded my-2"
          required
          autoFocus
        />
        <label htmlFor="password">Password</label>
        <input 
          name="password"
          type="password" 
          className="w-full p-2 border rounded my-2"
          required
        />
        <button type="submit" aria-disabled={pending} className="w-full bg-blue-500 text-white p-2 rounded my-2">
          Login
        </button>
        <p className="text-red-500">{state.message}</p>
      </form>
      <Link className="text-blue-500" href="/auth/register">Register</Link>
    </div>
  );
}
