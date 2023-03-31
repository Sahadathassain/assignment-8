import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Show from '../Show/Show';
const Main = () => {
  const [card, setCard] = useState([]);
  const [blogs, setBlogs]=useState([])

  useEffect(()=>{
    fetch("programming.json")
    .then((res)=>res.json())
    .then(data=> setBlogs(data))
  },[])
  const handleReadTime = (blog) => {
    const newBlog = [...card, blog];
    setCard(newBlog);
  };
  return (
    <div>
    <div className="container md:grid grid-cols-3 gap-4">
      <div className="col-span-2">
        {blogs.map((blog) => (
          <Blog
            handleReadTime={handleReadTime}
            key={blog.id}
            blog={blog}></Blog>
            
        ))}
      </div>
      <Show card={card}></Show>
    </div>
  </div>
  );
};

export default Main;