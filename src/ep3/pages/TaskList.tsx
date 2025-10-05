import React from "react";
import { Link } from "react-router";
import { tasks } from "../data/Taks";

export default function TaskList() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        Danh sách công việc
      </h1>
      <div className="space-y-6">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="border rounded-lg p-5 bg-gray-50 hover:bg-gray-100 transition"
          >
            <h2 className="text-xl font-semibold">{task.title}</h2>
            <p className="text-gray-600">{task.description}</p>
            <Link
              to={`/task/${task.id}`}
              className="text-blue-600 mt-2 inline-block hover:underline"
            >
              Xem chi tiết
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
