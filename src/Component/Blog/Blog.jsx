import React from 'react';

const Blog = ({blog}) => {

  const{ author_name, blog_title, images, author_image,read_time,publish_date}=blog;
  return (
    <>
     <div className="bg-yellow-200 text-black m-6 shadow-xl rounded-2xl">
        <img className="h-ful w-screen" src={images} alt="images" />
        <div className="flex justify-between m-6 ">
          <div className="flex">
            <img className="w-16 h-16 rounded-full" src={author_image} alt="" />
            <div className="ms-4">
              <h2 className="md:text-2xl text-xl font-semibold">
                {author_name}
              </h2>
              <p className="text-sm">{publish_date}</p>
            </div>
          </div>
          <div className="flex gap-4 mt-4">
            <p>{read_time} min read</p>
            <p className="cursor-pointer">
             
            </p>
          </div>
        </div>
        <h2 className="md:text-2xl mx-6 text-xl font-bold">{blog_title}</h2>
        <button
          
          className="btn ms-2 btn-active btn-link">
          Mark as read
        </button>
      </div>
    </>
  );
};

export default Blog;