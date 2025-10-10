import React from "react";
import { useNavigate } from "react-router";

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100 flex flex-col items-center">
      <div className="max-w-3xl mx-auto py-10">
        <h1 className="text-3xl font-bold text-center pb-4">About</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae velit
          eum enim expedita officiis ea quas aut voluptatibus aperiam nam illum
          quae, id, perferendis ipsum exercitationem illo eveniet incidunt
          consequuntur!
        </p>
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Quay lại
        </button>
      </div>
    </div>
  );
}
