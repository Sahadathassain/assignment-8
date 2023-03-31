import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Show from '../Show/Show';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Main = () => {
  const [card, setCard] = useState([]);
  const [blogs, setBlogs]=useState([]);
  const [bookmark, setBookmark] = useState([]);

  useEffect(()=>{
    fetch("programming.json")
    .then((res)=>res.json())
    .then(data=> setBlogs(data))
  },[])
  const handleReadTime = (blog) => {
    const newBlog = [...card, blog];
    setCard(newBlog);
  };
  const handleBookmarks = (blog) => {
    const bookmarkItem = bookmark.find((bookM) => bookM.id === blog.id);
    if (!bookmarkItem) {
      setBookmark([...bookmark, blog]);
    } else {
      toast.error("Already this Item ad");
    }
  };

  return (
    <div>
    <div className="container md:grid grid-cols-3 gap-4">
      <div className="col-span-2">
        {blogs.map((blog) => (
          <Blog
            handleReadTime={handleReadTime}
            handleBookmarks={handleBookmarks}
            key={blog.id}
            blog={blog}></Blog>
            
        ))}
      </div>
      <Show bookmark={bookmark} card={card}></Show> 
      <ToastContainer></ToastContainer>
    </div>
  </div>
  );
};

export default Main;