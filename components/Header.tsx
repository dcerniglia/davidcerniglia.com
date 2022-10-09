import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="h-18 w-full p-4 pt-5 fixed backdrop-blur-lg">
      <ul className="flex items-center justify-around w-full font-sm-heading text-xl font-semibold">
        {/* {TODO: change these to link elements} */}
        <li className="inline">
          <Link href={"#about"}>about</Link>
        </li>
        <li className="inline">
          <Link href={"#work"}>work</Link>
        </li>
        <li className="inline">
          <Link href={"#play"}>play</Link>
        </li>
        <li className="inline">
          <Link href={"#build"}>build</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
