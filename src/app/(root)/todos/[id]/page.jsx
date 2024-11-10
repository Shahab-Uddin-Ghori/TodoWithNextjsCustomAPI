import Link from "next/link";
import React from "react";

async function TodoDetails({ params }) {
  let response = await fetch("http://localhost:3000/api/todos", {
    cache: "no-cache",
  });
  response = await response.json();
  console.log("🚀 ~ fetchTodos ~ response:", response);
  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <p className="text-center text-4xl text-orange-500">Todo Detail Page</p>
      <div className="flex justify-center items-center">
        {response?.data?.map((todo) => {
          if (todo.id === params.id) {
            return (
              <div key={todo.id} className="flex flex-col gap-2 py-2 px-5">
                <p className="bg-orange-500 text-white py-2 px-5 rounded font-bold">
                  {todo.title}
                </p>
                <p>{todo.timeLimit}</p>
                <p>{todo.desc}</p>
                <div className="flex justify-center items-center mt-4">
                  <button className="bg-sky-700 w-28 text-md text-white py-2 rounded">
                    Update Todo
                  </button>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default TodoDetails;
