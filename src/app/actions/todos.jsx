"use server";

import { revalidatePath } from "next/cache";

export async function formTodos(formData) {
  const title = formData.get("title");
  const timeLimit = formData.get("timeLimit");
  const desc = formData.get("desc");
  try {
    await fetch("http://localhost:3000/api/todos", {
      method: "POST",
      body: JSON.stringify({ title, timeLimit, desc }),
      cache: "no-cache",
    });
    revalidatePath("/todos");
  } catch (error) {
    console.log(error.message);
  }
  console.log(title);
}
