import React from "react";
import { useNavigate, useParams } from "react-router";
import { tasks } from "../data/Taks";

export default function TaskDetail() {
  let param = useParams();
  console.log(param);

  const navigate = useNavigate();

  const task = tasks.find((t) => {
    return t.id === Number(param.id);
  });

  if (!task) {
    return <p className="text-center mt-20">Không tìm thấy công việc 😢</p>;
  }

  return (
    <div className="max-w-3xl mx-auto py-10 text-center">
      <h1 className="text-2xl font-bold mb-4">{task.title}</h1>
      <p className="text-gray-600 mb-6">{task.description}</p>
      <button
        onClick={() => navigate(-1)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Quay lại
      </button>
    </div>
  );
}
