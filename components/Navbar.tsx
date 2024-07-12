'use server';

import Link from 'next/link';
import { User } from '@/models/models';
import { getUser, logout } from '@/app/actions';

export default async function Navbar() {
  const user = await getUser();

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          GitGOod Forum
        </Link>
        <ul className="flex space-x-4">
          {
            user
              ? <>
                <li>
                  <Link href={`/profile/${encodeURIComponent(user.username)}`}>
                    Welcome, {user.username}
                  </Link>
                </li>
                <li>
                  <form action={logout}>
                    <button type="submit">Logout</button>
                  </form>
                </li>
              </>
              : <>
                <li>
                  <Link href="/auth/login">Login</Link>
                </li>
                <li>
                  <Link href="/auth/register">Register</Link>
                </li>
              </>
          }
        </ul>
      </div>
    </nav>
  );
}
