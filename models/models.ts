export interface User {
    ID: number;
    username: string;
    CreatedAt: Date;
    UpdatedAt: Date;
    DeletedAt: Date;
}

export interface Comment {
    ID: number;
    content: string;
    thread_id: number;
    user_id: number;
    upvotes: number;
    user: User;
    CreatedAt: Date;
    UpdatedAt: Date;
    DeletedAt: Date;
}

export interface Thread {
    ID: number;
    title: string;
    content: string;
    tags: string[];
    comments: Comment[];
    user_id: number;
    user: User;
    upvotes: number;
    CreatedAt: Date;
    UpdatedAt: Date;
    DeletedAt: Date;
}
