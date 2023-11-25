import React from "react";

async function getBlog(id) {
  try {
    const response = await fetch(`http://localhost:3001/blogs/${id}`,{cache:"no-store"});
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
async function BlogPage({ params }) {
  const blog = await getBlog(params.id);
  return (
    <div className="mt-10 flex">
      <img className="w-[500px] rounded-md mr-5" src="/application.png" alt="" />
      <div>
        <h2 className="text-3xl font-bold text-slate-300">{blog.title}</h2>
        <p> {blog.content}</p>
      </div>
    </div>
  );
}

export default BlogPage;
