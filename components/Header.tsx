import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="h-18 w-full p-4 pt-5 fixed backdrop-blur-lg">
      <ul className="flex items-center justify-around w-full font-sm-heading text-xl font-semibold">
        {/* {TODO: change these to link elements} */}
        <li className="inline -rotate-12 active:rotate-0">
          <Link href={"#about"}>about</Link>
        </li>
        <li className="inline -rotate-12">
          <Link href={"#work"}>work</Link>
        </li>
        <li className="inline -rotate-12">
          <Link href={"#play"}>play</Link>
        </li>
        <li className="inline -rotate-12">
          <Link href={"#build"}>build</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
