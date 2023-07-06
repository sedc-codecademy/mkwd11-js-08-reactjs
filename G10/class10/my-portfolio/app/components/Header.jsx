// "use client";

import Link from "next/link";
// import { useState } from "react";

const Header = () => {
  //   const [test, setTest] = useState("");

  return (
    <ul
      style={{
        display: "flex",
        gap: "15px",
        padding: "10px",
        listStyle: "none",
      }}
    >
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/about/education">Education</Link>
      </li>
      <li>
        <Link href="/projects">Projects</Link>
      </li>
    </ul>
  );
};

export default Header;
