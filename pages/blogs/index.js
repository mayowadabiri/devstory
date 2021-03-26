import Head from "next/head";
import { useEffect, useState } from "react";
import Recent from "../../components/recent";
import { blogUrl } from "../../constants/baseurls";

const Blogs = ({ result }) => {
  return (
    <div>
      <Head>
        <title> Blogs - Dev Story</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="blogs">
        <div className="blogs__recent">
          <div className="blogs__recent-container">
            <h1 className="head">Recent Posts</h1>
            <div className="blogs__recent-list">
              {result.map((blog) => (
                <Recent key={blog._id} blog={blog} />
              ))}
            </div>
          </div>
        </div>
        <div>All posts section</div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const res = await blogUrl.get("/get/blogs");
  // console.log(res);
  return {
    props: {
      result: res.data.blogs.reverse().slice(0, 3),
    },
  };
}

export default Blogs;
