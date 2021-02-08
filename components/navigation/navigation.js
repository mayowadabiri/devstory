// @ts-nocheck
import NavigationItem from "./navigationItem"

const Navigation = () => {
    return (
        <nav className="nav">
            <ul className="nav__list"> 
                <NavigationItem>Posts</NavigationItem>
                <NavigationItem>Create</NavigationItem>
                <NavigationItem>Login</NavigationItem>
                <NavigationItem extra="nav__link-reg">Register</NavigationItem>
            </ul>
        </nav>
    )
}

export default Navigation