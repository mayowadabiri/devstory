import Link from "next/link";

const Anchor = ({ children, link, extra }) => {
    return (
      <Link href={link}>
        <a className={["link", extra].join(" ")}>{children}</a>
      </Link>
    );
};


export default Anchor