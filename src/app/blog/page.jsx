import { revalidatePath } from "next/cache";
import Link from "next/link";
import React from "react";

async function getBlogs() {
  try {
    const response = await fetch("http://localhost:3001/blogs",{cache:"no-store"});
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function Blog() {
  const blogs = await getBlogs();
  console.log(blogs);
  return (
    <div className="mt-10 ">
      {blogs.map(blog => (
        <Link href={`/blog/${blog.id}`} className="flex w-full justify-between items-start mt-4 ">
          <img src="/illustration.png" className="w-[300px] rounded-md" alt="" />
          <div className="w-[50%]">
            <h2 className="text-3xl font-bold">{blog.title}</h2>
            <p className="text-slate-400 mt-4 truncate-4-lines">{blog.content}</p>
            <div className="mt-4 flex gap-4">
              {
                blog.tags.map(tag=>
                  <span className="text-xs px-4 py-2 bg-slate-700 text-slate-200 rounded-full">{tag}</span>
                )
              }
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Blog;
