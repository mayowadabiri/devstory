// @ts-nocheck
import NavigationItem from "./navigationItem";
import TokenContext from "../../tokenContext";
import { useContext } from "react";

const Navigation = () => {
  const token = useContext(TokenContext);
  // console.log(token)
  // console.log(token)
  return (
    <nav className="nav">
      <ul className="nav__list">
        <NavigationItem link="/blogs">Posts</NavigationItem>
        {token ? (
          <>
            <NavigationItem link="/new">Create</NavigationItem>
            <div className="nav__user">

            </div>
            </>
        ) : (
          <>
            <NavigationItem link="/login">Login</NavigationItem>
            <NavigationItem link="/register">Register</NavigationItem>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
