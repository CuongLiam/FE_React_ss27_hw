import React from "react";
import { Link } from "react-router";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100 flex flex-col items-center">
      <div className="max-w-3xl mx-auto py-10">
        <h1 className="text-3xl font-bold text-center pb-4">Home</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae velit
          eum enim expedita officiis ea quas aut voluptatibus aperiam nam illum
          quae, id, perferendis ipsum exercitationem illo eveniet incidunt
          consequuntur!
        </p>
        <Link
          to="about"
          className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
        >
          About
        </Link>
      </div>
    </div>
  );
}
