import Link from "next/link";
import { FaGithub, FaCodepen, FaTelegram } from "react-icons/fa";

import "./styles/Navbar.module.css";

const Navbar = () => {
  return (
    <header className="header">
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
      <nav className="nav">
        <ul className="nav-utility">
          <li>
            <Link href="#" className="nav-link">
              <FaGithub />
            </Link>
          </li>
          <li>
            <Link href="#" className="nav-link">
              <FaCodepen />
            </Link>
          </li>
          <li>
            <Link href="#" className="nav-link">
              <FaTelegram />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
