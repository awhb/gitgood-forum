import CommentList from '@/components/CommentList';
import CommentForm from '@/components/CommentForm';

export default function ThreadDetail({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold my-4">Thread Title</h1>
      <p className="mb-4">Thread content goes here...</p>
      <CommentList threadId={params.id} />
      <CommentForm threadId={params.id} />
    </div>
  );
}
