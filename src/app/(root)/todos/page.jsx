import FormData from "@/app/components/FormData";
import Link from "next/link";
import React from "react";

async function Todos() {
  let response = await fetch("http://localhost:3000/api/todos", {
    cache: "no-cache",
  });
  response = await response.json();
  console.log("🚀 ~ fetchTodos ~ response:", response);
  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <p className="text-center text-4xl text-orange-500">Todo Page</p>
      <FormData />
      <div className="flex justify-center gap-5  items-center">
        {response?.data?.map((todo) => {
          return (
            <div
              key={todo.id}
              className="flex flex-col justify-center items-center gap-5 rounded py-2 px-5 border-2"
            >
              <Link
                href={`/todos/${todo.id}`}
                className="bg-orange-500 text-white py-2 px-5 rounded font-bold"
              >
                {todo.title}
              </Link>
              <button className="bg-red-700 w-28 text-md text-white py-2 rounded">
                Delete Todo
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Todos;
