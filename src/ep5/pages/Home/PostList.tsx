import React from "react";
import { Link } from "react-router";
import { blogs } from "../../data/fakeData";

export default function PostList() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Danh sách bài viết</h1>

      <div className="space-y-5 max-w-4xl">
        {blogs.map((b) => (
          <article
            key={b.id}
            className="rounded-lg border border-slate-300 bg-slate-50 p-5 hover:shadow transition"
          >
            <Link to={`/blog/post/${b.id}`}>
              <h2 className="text-blue-700 font-semibold text-lg mb-1 hover:underline">
                {b.title}
              </h2>
            </Link>
            <p className="text-slate-500">{b.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
