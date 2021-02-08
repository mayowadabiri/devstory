import Link from "next/link";

const NavigationItem = ({ children, extra }) => {
  return (
    <li className="nav__item">
      <Link href="/">
        <a className={["nav__link", extra].join(" ")}>{children}</a>
      </Link>
    </li>
  );
};

export default NavigationItem;
