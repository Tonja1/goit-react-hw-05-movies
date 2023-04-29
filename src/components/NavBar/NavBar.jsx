import { Outlet, useLocation } from "react-router-dom";
import { Nav, NavList, NavLink } from './NavBarStyled';

const NavBar = () => {
    const location = useLocation
    return (
        <>
            <Nav>
                <NavList>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Movies" state={{from: location}}>Movies</NavLink>
                    </li>
                </NavList>
            </Nav>
            <Outlet />
        </>
    );
};

export default NavBar;