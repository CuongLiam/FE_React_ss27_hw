import React from "react";
import { Route, Routes } from "react-router";
import BlogLayout from "./pages/Home/BlogLayout";
import PostDetail from "./pages/Home/PostDetail";
import PostList from "./pages/Home/PostList";

export default function RouterSetup() {
  return (
    <Routes>
      <Route path="/blog" element={<BlogLayout />}>
        <Route path="post" element={<PostList />} />
        <Route path="post/:id" element={<PostDetail />} />
      </Route>
    </Routes>
  );
}
