// @ts-nocheck
import NavigationItem from "./navigationItem";

const Navigation = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <NavigationItem link="/posts">Posts</NavigationItem>
        <NavigationItem link="/create">Create</NavigationItem>
        <NavigationItem link="/login">Login</NavigationItem>
        <NavigationItem link="/register">Register</NavigationItem>
      </ul>
    </nav>
  );
};

export default Navigation;
