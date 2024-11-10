import connectDB from "@/app/lib/db.Connect";
import lmsModels from "@/app/lib/modals/lmsModals";

// const todos = [
//   {
//     id: "1",
//     title: "Learn Next JS",
//     timeLimit: "7 Days",
//     desc: "Learning complete next js within days and make LMS",
//   },
//   {
//     id: "2",
//     title: "Learn React JS",
//     timeLimit: "10 Days",
//     desc: "Learning complete React js within days and make LMS",
//   },
//   {
//     id: "3",
//     title: "Learn React Native",
//     timeLimit: "10 Days",
//     desc: "Learning complete React Native within days and make LMS",
//   },
// ];

export async function GET(response) {
  await connectDB();
  const todo = await lmsModels.find();
  console.log("🚀 ~ GET ~ todo:", todo);
  return Response.json({
    data: todo,
    msg: "sho sho se hogayaaa",
  });
}

// export async function POST(request) {
//   const newTodo = await request.json();
//   const newTodoObj = {
//     ...newTodo,
//     id: (todos.length + 1).toString(),
//   };
//   todos.push(newTodoObj);
//   console.log("🚀 ~ POST ~ newTodo:", newTodo);
//   return Response.json({
//     data: todos,
//     msg: "todo added successfully",
//   });
// }
