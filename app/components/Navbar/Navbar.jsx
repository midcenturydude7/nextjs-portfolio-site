"use client";
import React from "react";
import Link from "next/link";
import { FaGithub, FaCodepen, FaTelegram } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgCloseO } from "react-icons/cg";

import style from "./styles/Navbar.module.css";

const Navbar = ({ isNavOpen, toggleNav }) => {
  return (
    <header className={style["header-nav"]}>
      <nav className={style["nav-left"]}>
        <Link href="/" className={style["nav-link-home"]}>
          <ul className={style.logo}>
            <li>MG[dev]</li>
          </ul>
        </Link>
        <ul
          className={`${style["nav-primary"]} ${
            isNavOpen ? style.isActive : ""
          }`}>
          <li>
            <Link href="/about" className={style["nav-link"]}>
              about
            </Link>
          </li>
          <li>
            <Link href="/work" className={style["nav-link"]}>
              work
            </Link>
          </li>
          <li>
            <Link href="/resources" className={style["nav-link"]}>
              resources
            </Link>
          </li>
          <li>
            <Link href="/contact" className={style["nav-link"]}>
              contact
            </Link>
          </li>
        </ul>
        <ul className={style["nav-mobile"]} onClick={toggleNav}>
          <li>
            {isNavOpen ? (
              <CgCloseO className={style["mobile-icon"]} />
            ) : (
              <GiHamburgerMenu className={style["mobile-icon"]} />
            )}
          </li>
        </ul>
      </nav>
      <nav className={style["nav-right"]}>
        <ul className={style["nav-utility"]}>
          <li>
            <Link
              href="https://github.com/midcenturydude7"
              className={style["nav-link"]}
              target="_blank">
              <FaGithub />
            </Link>
          </li>
          <li>
            <Link
              href="https://codepen.io/midcenturydude7"
              className={style["nav-link"]}
              target="_blank">
              <FaCodepen />
            </Link>
          </li>
          <li>
            <Link
              href="https://t.me/midcenturydude7"
              className={style["nav-link"]}
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
