import { redirect } from 'next/dist/server/api-utils';
import React from 'react';


export const generateMetadata = async ({ params }) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`, {
        cache: 'no-store', // Fetch fresh data for each request
    });

    if (!res.ok) {
        throw new Error("Failed to fetch post data");
    }

    const data = await res.json();

    return {
        title: `${data.title}`, // Dynamic title
        description: `${data.body}`, // Dynamic description
    };
};       

const getPostsDetails =  async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = res.json();
    return data;
}

const PostDetailsPage = async({params}) => {
   const postDetails = await getPostsDetails(params.id)
    return (
        <div>
           <div key={postDetails.id} className="bg-[#FEF9E1] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-[#E5D0AC]">
            <h2 className="text-xl font-bold text-[#A31D1D] mb-2">{postDetails.title}</h2>
            <p className="text-[#6D2323] mb-6">{postDetails.body}</p>
            <p className="text-[#6D2323] mb-6">{postDetails.body}</p>
            <p className="text-[#6D2323] mb-6">{postDetails.body}</p>
            <p className="text-[#6D2323] mb-6">{postDetails.body}</p>
            </div>
        </div>
    );
};

export default PostDetailsPage;