import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Show from '../Show/Show';
const Main = () => {
  
  const [blogs, setBlogs]=useState([])

  useEffect(()=>{
    fetch("programming.json")
    .then((res)=>res.json())
    .then(data=> setBlogs(data))
  },[])
  return (
    <div>
    <div className="container md:grid grid-cols-3 gap-4">
      <div className="col-span-2">
        {blogs.map((blog) => (
          <Blog
            
            key={blog.id}
            blog={blog}></Blog>
        ))}
      </div>
      <Show></Show>
    </div>
  </div>
  );
};

export default Main;