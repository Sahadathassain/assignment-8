import React from 'react';

const Show = ({card}) => {
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
      </div>
    );
};

export default Show;