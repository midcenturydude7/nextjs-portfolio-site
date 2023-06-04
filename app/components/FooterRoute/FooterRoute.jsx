import Link from "next/link";
import { FaGithub, FaCodepen, FaTelegram } from "react-icons/fa";

import style from "./styles/FooterRoute.module.css";

const FooterRoute = () => {
  return (
    <footer className={style["footer-container"]}>
      <div className={style["footer-content"]}>
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
    </footer>
  );
};

export default FooterRoute;
