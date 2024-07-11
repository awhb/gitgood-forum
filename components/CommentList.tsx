// src/components/CommentList.tsx
export default function CommentList({ threadId }: { threadId: string }) {
  // TODO: Fetch comments from API
  const comments = [
    { id: 1, content: 'Comment 1' },
    { id: 2, content: 'Comment 2' },
    { id: 3, content: 'Comment 3' },
  ];
  
  return (
    <div>
    <h2 className="text-xl font-bold my-4">Comments</h2>
    <ul className="space-y-2">
    {comments.map((comment) => (
      <li key={comment.id} className="border p-2 rounded">
      {comment.content}
      </li>
    ))}
    </ul>
    </div>
  );
}
