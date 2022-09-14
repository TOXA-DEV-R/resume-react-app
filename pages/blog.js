/** @format */

import React from "react";
import SimpleBar from "simplebar-react";

const Blog = () => {
  return (
    <SimpleBar className="w-full h-full rounded-2xl blog shadow-md shadow-gray-400 pt-12 pb-12 pl-10 pr-10 overflow-scroll overflow-x-hidden">
      <h2 className="text-2xl font-medium title works__title">Blog</h2>
      <div className="blog__list mt-16">
        <h2 className="font-bold text-lg">Coming Soon</h2>
      </div>
    </SimpleBar>
  );
};

export default Blog;
