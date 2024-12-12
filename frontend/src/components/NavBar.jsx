import { Link, useLocation } from "react-router-dom";
import { Navbar } from "flowbite-react";
import logo from "../assets/logo-520698693.webp"
export default function NavBarComp() {
  const location = useLocation();
  return (
    <div className="z-50 relative w-full bg-gray-100">
         <Navbar fluid rounded>
      <Navbar.Brand as={Link} to="" className="">
        <img src={logo} className=" w-auto h-12" alt="beachLife Logo" />
        <span className="pl-1  text-2xl text-orange-500">Beach Life Fitness</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link as={Link} to="/" active={location.pathname === "/"}>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} to="/updates" active={location.pathname === "/updates"}>
          Updates
        </Navbar.Link>
        <Navbar.Link as={Link} to="/products" active={location.pathname === "/products"}>
          Products
        </Navbar.Link>
        <Navbar.Link as={Link} to="/events" active={location.pathname === "/events"}>
          Events
        </Navbar.Link>
        <Navbar.Link as={Link} to="/sessions" active={location.pathname === "/sessions"}>
          Our Sessions
        </Navbar.Link>
        <Navbar.Link as={Link} to="/contacts" active={location.pathname === "/contacts"}>
          Contact Us
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
}
