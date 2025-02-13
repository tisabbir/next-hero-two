import { redirect } from "next/dist/server/api-utils";

export const getPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = res.json();

    return data;
  };