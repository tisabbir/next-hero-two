import { getPosts } from "@/services/postsAPI";
import Link from "next/link";
import React from "react";


const PostsPage = async () => {
  const postsData = await getPosts();
  console.log(postsData);
  return (
    
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-[#A31D1D] mb-8 text-center">
          Posts
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {postsData?.slice(0,20).map((item) => (
            <div key={item.id} className="bg-[#FEF9E1] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-[#E5D0AC]">
            <h2 className="text-xl font-bold text-[#A31D1D] mb-2">{item.title}</h2>
            <p className="text-[#6D2323] mb-6">{item.body}</p>

            <Link href={`/posts/${item.id}`} className="bg-[#6D2323] text-[#FEF9E1] text-xl rounded-lg px-6 py-2 " >See Details</Link>
        </div>
          ))}
        </div>
      </div>
  );
};

export default PostsPage;
