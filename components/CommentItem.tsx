'use client';

import { useState } from 'react';
import { Comment, User } from '@/models/models';
import { fetchApi } from '@/utils/api';

interface CommentItemProps {
  comment: Comment;
  currentUser: User | null;
}

export default function CommentItem({ comment, currentUser }: CommentItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(comment.content);
  const [error, setError] = useState('');

  const handleEdit = async () => {
    try {
      const res = await fetchApi(`/comments/${comment.ID}`, {
        method: 'PUT',
        body: JSON.stringify({ content: editedContent }),
      });
      const data = await res.json();
      if (res.ok) {
        comment.content = editedContent;
        setIsEditing(false);
      } else {
        setError(data.error || 'Failed to update comment');
      }
    } catch (error) {
      setError('An unexpected error occurred');
    }
  };

  return (
    <li className="border p-4 rounded">
      {isEditing ? (
        <div>
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <div className="mt-2">
            <button onClick={handleEdit} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
              Save
            </button>
            <button onClick={() => setIsEditing(false)} className="bg-gray-300 px-4 py-2 rounded">
              Cancel
            </button>
          </div>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
      ) : (
        <div>
          <p>{comment.content}</p>
          <p className="text-sm text-gray-500 mt-2">
            Posted by {comment.user.username}
          </p>
          {currentUser && currentUser.ID === comment.user.ID && (
            <button
              onClick={() => setIsEditing(true)}
              className="text-blue-500 mt-2"
            >
              Edit
            </button>
          )}
        </div>
      )}
    </li>
  );
}
