export interface User {
    ID: number;
    username: string;
    CreatedAt: Date;
    UpdatedAt: Date;
    DeletedAt: Date;
}

export interface Comment {
    content: string;
    thread_id: number;
    user_id: number;
    upvotes: number;
    CreatedAt: Date;
    UpdatedAt: Date;
    DeletedAt: Date;
}

export interface Thread {
    ID: number;
    CreatedAt: Date;
    UpdatedAt: Date;
    DeletedAt: Date;
    title: string;
    content: string;
    tags: string[];
    comments: Comment[];
    user_id: number;
    upvotes: number;
}
