export interface User {
    id: number;
    username: string;
    createdAt: Date;
    token: string;
}

export interface Comment {
    content: string;
    thread_id: number;
    user_id: number;
    createdAt: Date;
    updatedAt: Date;
    user: User;
}

export interface Thread {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    content: string;
    tags: string[];
    comments: Comment[];
    user_id: number;
    user: User;
    upvotes: number;
}
