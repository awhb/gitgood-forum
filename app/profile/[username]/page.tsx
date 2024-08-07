'use server';

import { User } from '@/models/models';
import { getUser } from '@/app/actions';

export default async function ProfilePage({ params }: { params: { username: string } }) {
    const user = await getUser() as User | null;
    
    return (
        <div>
            <h1 className="text-2xl font-bold my-4">Profile</h1>
            <p className="mb-4">Username: {params.username}</p>
            { user && user.username === params.username && <p>You are logged in as {user.username}</p> }
        </div>
    );
}
