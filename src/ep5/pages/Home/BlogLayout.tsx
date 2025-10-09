import React, { useState } from "react";

import { Link, Outlet } from "react-router";

export default function BlogLayout() {
  return (
    <div className="min-h-screen flex bg-white">
      {/* Sidebar */}
      <aside
        className="w-60 flex-shrink-0 flex flex-col justify-between
                        bg-gradient-to-b from-indigo-600 via-purple-700 to-sky-500
                        text-white"
      >
        <div>
          {/* Logo */}
          <Link to='/blog' className="flex items-center gap-3 px-5 py-6">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-lg">
              📄
            </div>
            <div>
              <div className="font-bold text-lg leading-tight">My Blog</div>
              <div className="text-xs opacity-90 mt-1">Create & Share</div>
            </div>
          </Link>

          {/* Nav (UI-only) */}
          <nav className="px-4 mt-6">
            <ul className="space-y-3">
              <li>
                <Link to='/blog/post'
                  className="flex items-start gap-3 p-3 rounded-lg
                                bg-white/5 hover:bg-white/10 transition"
                >
                  <span className="text-xl">📊</span>
                  <div className="text-sm font-semibold">Posts</div>
                </Link>
              </li>

              <li>
                <div
                  className="flex items-start gap-3 p-3 rounded-lg
                                bg-white/5 hover:bg-white/10 transition"
                >
                  <span className="text-xl">📝</span>
                  <div className="text-sm font-semibold">Write</div>
                </div>
              </li>

              <li>
                <div
                  className="flex items-start gap-3 p-3 rounded-lg
                                bg-white/5 hover:bg-white/10 transition"
                >
                  <span className="text-xl">⚙️</span>
                  <div className="text-sm font-semibold">Settings</div>
                </div>
              </li>
            </ul>
          </nav>
        </div>

        {/* Footer */}
        <div className="px-5 pb-5 pt-6 text-xs opacity-90">© 2025 My Blog</div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        <Outlet />
        {/* <h1 className="text-2xl font-bold mb-6">Danh sách bài viết</h1>
        <div className="space-y-5 max-w-4xl">
          {blogs.map((b) => (
            <article
              key={b.id}
              className="rounded-lg border border-slate-300 bg-slate-50 p-5"
            >
              <Link
                to={`/blog/post/${b.id}`}
                className="text-blue-700 font-semibold text-lg mb-1"
              >
                {b.title}
              </Link>
              <p className="text-slate-500 m-0">{b.excerpt}</p>
            </article>
          ))}
        </div> */}
      </main>
    </div>
  );
}
