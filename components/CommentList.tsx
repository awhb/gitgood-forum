'use server';

import { Comment } from '@/models/models';
import { getUser } from '@/app/actions';
import CommentItem from './CommentItem';

export default async function CommentList({ comments }: { comments: Comment[] }) {
  const currentUser = await getUser();
  
  return (
    <>
      { comments.length === 0 ?
        <p>No comments found.</p> : 
        <ul className="space-y-2">
        {comments.map((comment) => (
          <CommentItem key={comment.ID} comment={comment} currentUser={currentUser} />
        ))}
      </ul>
      }
    </>
  );
}
