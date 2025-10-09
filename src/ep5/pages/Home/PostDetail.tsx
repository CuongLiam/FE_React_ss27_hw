import React from "react";
import { useNavigate, useParams } from "react-router";
import { blogs } from "../../data/fakeData";

export default function PostDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const post = blogs.find((p) => p.id.toString() === id);

  if (!post) {
    return <div className="text-red-500">Bài viết không tồn tại.</div>;
  }

  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700 leading-relaxed">{post.content}</p>
      <button
        onClick={() => navigate(-1)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Quay lại
      </button>
    </div>
  );
}
