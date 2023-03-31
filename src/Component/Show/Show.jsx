import React from 'react';

const Show = ({card,bookmark}) => {
  let totalTime = 0;
  for (const blog of card) {
    totalTime = totalTime + blog.read_time;
  }
    return (
        <div className="m-6">
        <div>
          <h2 className=" p-4 rounded-lg border-2 bg-orange-500 text-black font-semibold">
            Spent time on read :{totalTime} min
          </h2>
        </div>
        <div className=" bg-slate-300 text-black rounded-lg py-3 m-6">
          <h2 className="bg-slate-50  border-2 border-emerald-400  text-black text-xl p-4 rounded-lg font-bold">
            Bookmarked Blogs : {bookmark.length}
          </h2>
          <div>
            {bookmark.map((bookM) => (
              <h3
                className="bg-slate-50  text-black text-sm p-4 rounded-lg font-semibold my-4"
                key={bookM.id}>
                {bookM.blog_title}
              </h3>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Show;