import Navigation from "./navigation/navigation";
import Link from "next/link";


const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__brand">
          <Link href="/">
            <a>{"<DevStory />"}</a>
          </Link>
        </h1>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
