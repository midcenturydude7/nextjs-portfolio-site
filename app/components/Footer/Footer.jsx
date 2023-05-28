import Link from "next/link";
import { FaGithub, FaCodepen, FaTelegram } from "react-icons/fa";

import style from "./styles/Footer.module.css";

const Footer = ({ isHovered }) => {
  return (
    <div className={!isHovered ? style.footer : style.nofooter}>
      <p>
        Copyright &copy; 2023<span>&#x2022; MG[dev]</span>
      </p>
      <ul>
        <li>
          <Link href="https://github.com/midcenturydude7" target="_blank">
            <FaGithub />
          </Link>
        </li>
        <li>
          <Link href="https://github.com/midcenturydude7" target="_blank">
            <FaCodepen />
          </Link>
        </li>
        <li>
          <Link href="https://github.com/midcenturydude7" target="_blank">
            <FaTelegram />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
