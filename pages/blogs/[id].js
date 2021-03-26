import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { blogUrl } from "../../constants/baseurls";
// import Speed from "../public/peed.png"

const Blog = ({ result }) => {
  // console.log(result);
  return (
    <div>
      <Head>
        <title> Blogs - Dev Story</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="single">
        <div className="single__container">
          <div className="single__box">
            <h1>{result.title}</h1>
            <div className="single__meta">
              <p>by: {result.userId.fullName}</p>
              <p>{result.createdAt}</p>
            </div>
            <div className="single__img">
              <Image
                src={result.image}
                width={"100%"}
                height={"100%"}
                className="single__img-box"
              />
            </div>
            <div className="single__content">
              <p>{result.content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const res = await blogUrl.get("/get/blogs");

  const paths = res.data.blogs.map((blog) => {
    return {
      params: {
        id: blog.blogUrl.toString(),
      },
    };
  });
  //   console.log(paths)
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // console.log(params)
  const res = await blogUrl.get(`/blog/${params.id}`);

  return {
    props: {
      result: res.data.blog,
    },
  };
}
export default Blog;
