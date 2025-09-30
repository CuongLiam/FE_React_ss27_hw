import React from "react";
import RouterConfig from "./RouterConfig";
import Header from "./pages/Header";


export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 border-l border-r border-gray-800/60">
      <Header />
      <main className="flex justify-center pt-24 pb-32">
        <RouterConfig />
      </main>
    </div>
  );
}
