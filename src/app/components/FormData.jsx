"use client";
import React, { useRef } from "react";
import { formTodos } from "../actions/todos";

function FormData() {
  const formRef = useRef(null);
  return (
    <form
      ref={formRef}
      action={async (formData) => {
        await formTodos(formData);
        formRef?.current?.reset();
      }}
      className="flex  justify-center items-center flex-col gap-8"
    >
      <div className="felx flex-col gap-8">
        <label htmlFor="title">
          Title:
          <br />
          <input
            type="text"
            name="title"
            id="title"
            required
            className=" h-10 w-80 border-2 outline-none"
          />{" "}
          <br />
        </label>
        <label htmlFor="timeLimit">
          Time Limit:
          <br />
          <input
            type="text"
            name="timeLimit"
            id="timeLimit"
            required
            className=" h-10 w-80 border-2 outline-none"
          />{" "}
          <br />
        </label>
        <label htmlFor="desc">
          Description:
          <br />
          <input
            type="text"
            name="desc"
            id="desc"
            required
            className=" h-20 w-96 border-2 outline-none"
          />
        </label>{" "}
      </div>
      <button className="px-5 py-2 bg-orange-500 text-white rounded text-xl  font-semibold">
        Add Todo
      </button>
    </form>
  );
}

export default FormData;
