import Link from "next/link";
import "./styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="logo">
        <li>MG[dev]</li>
      </ul>
      <ul className="nav-primary">
        <li>
          <Link href="/about" className="nav-link">
            about
          </Link>
        </li>
        <li>
          <Link href="/work" className="nav-link">
            work
          </Link>
        </li>
        <li>
          <Link href="/resources" className="nav-link">
            resources
          </Link>
        </li>
        <li>
          <Link href="/contact" className="nav-link">
            contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
