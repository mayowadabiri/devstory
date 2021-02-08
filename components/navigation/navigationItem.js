import Link from "next/link";

const NavigationItem = ({ children, extra, link }) => {
  return (
    <li className="nav__item">
      <Link href={link}>
        <a className={["nav__link", extra].join(" ")}>{children}</a>
      </Link>
    </li>
  );
};

export default NavigationItem;
