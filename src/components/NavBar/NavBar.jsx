import { Outlet } from "react-router-dom";
import { Nav, NavList, NavLink } from './NavBarStyled';

const NavBar = () => {
    return (
        <>
            <Nav>
                <NavList>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Movies">Movies</NavLink>
                    </li>
                </NavList>
            </Nav>
            <Outlet />
        </>
    );
};

export default NavBar;