import React from "react";

export default function About() {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col items-center bg-white m-11 rounded-lg border drop-shadow-2xl shadow-md md:flex-row md:max-w-xl hover:bg-gray-100">
        <img
          class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-96 md:rounded-none md:rounded-l-lg"
          src="https://images.unsplash.com/photo-1616684552752-f36d0f9f5f81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
          alt=""
        />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight">About</h5>
          <p class="mb-3 font-normal">
            Portland State University Graduate with a Bachelor's Degree in
            Computer Science.
          </p>
          <p>
            A beginning is the time for taking the most delicate care that the
            balances are correct. This every sister of the Bene Gesserit knows.
            To
          </p>
          <p>– from “Manual of Muad’Dib” by the Princess Irulan</p>
        </div>
      </div>
    </div>
  );
}
