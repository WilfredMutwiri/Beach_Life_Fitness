import { Link, useLocation } from "react-router-dom";
import { Navbar } from "flowbite-react";
import logo from "../assets/logo-520698693.webp"
export default function NavBarComp() {
  const location = useLocation();
  return (
    <div className="z-50 fixed w-full">
         <Navbar fluid rounded>
      <Navbar.Brand as={Link} to="" className="">
        <img src={logo} className="mr-3 w-auto h-14  " alt="sycamore Logo" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link className="text-lg" as={Link} to="/" active={location.pathname === "/"}>
          Home
        </Navbar.Link>
        <Navbar.Link className="text-lg" as={Link} to="/about" active={location.pathname === "/about"}>
          Updates
        </Navbar.Link>
        <Navbar.Link className="text-lg" as={Link} to="/services" active={location.pathname === "/services"}>
          Products
        </Navbar.Link>
        <Navbar.Link className="text-lg" as={Link} to="/pricing" active={location.pathname === "/pricing"}>
          Media
        </Navbar.Link>
        <Navbar.Link className="text-lg" as={Link} to="/Defence" active={location.pathname === "/contact"}>
          More Pages
        </Navbar.Link>
        <Navbar.Link className="text-lg" as={Link} to="/contact" active={location.pathname === "/contact"}>
          Contact Us
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
}
