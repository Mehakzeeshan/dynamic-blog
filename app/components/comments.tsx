"use client";

import { useState } from 'react';

const CommentBox = () => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<{ name: string; text: string }[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && comment) {
      setComments([...comments, { name, text: comment }]);
      setName('');
      setComment('');
    }
  };

  return (
    <div className="p-4 max-w-lg mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-4">Leave a Comment</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-2">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded bg-[#fffbf2]"
            required
          />
        </div>
        <div className="mb-2">
          <textarea
            placeholder="Your Comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded bg-[#fffbf2]"
            rows={3}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-blue-600 font-semibold"
        >
          Submit
        </button>
      </form>
      <div>
        <h3 className="text-lg font-medium mb-2 underline">Comments:</h3>
        {comments.length > 0 ? (
          comments.map((c, index) => (
            <div key={index} className="border-t border-gray-200 pt-2">
              <p className="font-semibold">{c.name}:</p>
              <p>{c.text}</p>
            </div>
          ))
        ) : (
          <p>No comments yet. Be the first to comment!</p>
        )}
      </div>
    </div>
  );
};

export default CommentBox;
