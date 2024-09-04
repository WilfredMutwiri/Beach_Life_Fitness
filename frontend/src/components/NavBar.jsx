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
        <span className="pl-1  text-2xl text-red-700">Beach Life Fitness</span>
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
        <Navbar.Link as={Link} to="/media" active={location.pathname === "/media"}>
          Media
        </Navbar.Link>
        <Navbar.Link as={Link} to="/more-pages" active={location.pathname === "/more-pages"}>
          More Pages
        </Navbar.Link>
        <Navbar.Link as={Link} to="/contact" active={location.pathname === "/contact"}>
          Contact Us
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
}
