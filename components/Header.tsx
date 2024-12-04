"use client"

import Image from "next/image";
import Link from "next/link";
import 'boxicons/css/boxicons.min.css';
import { useState } from "react";

export default function Header() {
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleNav = () => {
    setIsNavActive((prev) => !prev);
  };


  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <Image src={"/logo.png"} alt="Logo" width={50} height={50} />
        </div>
        <div className="hamburger" id="hamburger" onClick={toggleNav}>
          <i className="bx bx-menu"></i>
          <i className='x bx bx-x'></i>
        </div>
        <ul className={`nav-links ${isNavActive ? "active" : ""}`} id="nav-links">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/project">Projects</Link></li>
          <li><Link href="/skill">Skills</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <img src="moon.png" id="moon" alt="Moon" />
        </ul>
      </nav>

    </div>
  );
}
