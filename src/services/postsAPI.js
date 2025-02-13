import { redirect } from "next/dist/server/api-utils";

export const getPosts = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/posts`);
    const data = res.json();

    return data;
  };