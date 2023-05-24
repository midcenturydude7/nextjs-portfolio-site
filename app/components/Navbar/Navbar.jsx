import Link from "next/link";
import { FaGithub, FaCodepen, FaTelegram } from "react-icons/fa";

import "./styles/Navbar.module.css";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="logo">
          <li>
            <Link href="/" className="nav-link-home">
              MG[dev]
            </Link>
          </li>
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
            <Link
              href="https://github.com/midcenturydude7"
              className="nav-link"
              target="_blank">
              <FaGithub />
            </Link>
          </li>
          <li>
            <Link
              href="https://codepen.io/midcenturydude7"
              className="nav-link"
              target="_blank">
              <FaCodepen />
            </Link>
          </li>
          <li>
            <Link
              href="https://t.me/midcenturydude7"
              className="nav-link"
              target="_blank">
              <FaTelegram />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
