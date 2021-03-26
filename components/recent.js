// import Speed from "../public/peed.png"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
const Recent = ({ blog }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="recent">
      <div className="recent__container">
        <div className="recent__img-box">
          <Image
            src={blog.image}
            width={"100%"}
            height={"100%"}
            className="recent__img"
          />
        </div>
        <div className="recent__content">
          <h3 className="title">{blog.title}</h3>
          <p>
            {blog.content.substring(0, 100)}...
            <Link href={`/blogs/${blog.blogUrl}`}>continue reading</Link>
          </p>
          {show ? (
            <BsHeartFill
              className="icon"
              size="2em"
              title="like icon"
              onClick={() => setShow(false)}
              color="red"
            />
          ) : (
            <BsHeart
              className="icon"
              size="2em"
              title="like icon"
              onClick={() => setShow(true)}
            />
          )}
          <p>2/10/2021</p>
          <p>10:20am</p>
        </div>
      </div>
    </div>
  );
};

export default Recent;
