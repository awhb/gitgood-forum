'use client';

import Link from 'next/link';
import { register } from '@/app/actions';
import { useFormState, useFormStatus } from 'react-dom';

const initialState = {
  success: '',
  error: '',
};

export default function Register() {
  const [state, formAction] = useFormState(register, initialState);
  const { pending } = useFormStatus();

  return (
    <div className="container mx-auto px-4 max-w-md">
      <h1 className="text-2xl font-bold my-4">Register</h1>
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
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input 
          name="confirmPassword"
          type="password" 
          className="w-full p-2 border rounded my-2"
          required
        />
        <button type="submit" aria-disabled={pending} className="w-full bg-blue-500 text-white p-2 rounded my-2">
          Register
        </button>
        <p className="text-red-500">{state.error}</p>
        <p className="text-green-500">{state.success}</p>
      </form>
      <Link className="text-blue-500" href="/auth/login">Login</Link>
    </div>
  );
}
