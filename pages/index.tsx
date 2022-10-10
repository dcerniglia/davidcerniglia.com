import type { NextPage } from "next";
import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import ContentSection from "../components/ContentSection";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Home: NextPage = (props) => {
  const content = {
    sections: [
      {
        title: "about",
        body: "Sunt id quis aliquip reprehenderit ad veniam adipisicing magna consectetur incididunt sunt eu. Minim proident qui dolore minim anim nisi elit culpa nulla reprehenderit et minim duis reprehenderit. Velit duis duis id elit ut quis Lorem est cupidatat deserunt do ullamco cupidatat labore excepteur. Enim nisi mollit consectetur incididunt nisi ullamco enim. Fugiat reprehenderit id adipisicing ad reprehenderit. Consectetur nulla et est sit ipsum non. Ut consequat voluptate fugiat quis cupidatat irure excepteur adipisicing Lorem deserunt velit laboris officia do in. Consectetur enim consequat et cillum veniam sint aliqua incididunt reprehenderit officia excepteur consectetur id nostrud.",
      },
      {
        title: "work",
        body: "Sunt id quis aliquip reprehenderit ad veniam adipisicing magna consectetur incididunt sunt eu. Minim proident qui dolore minim anim nisi elit culpa nulla reprehenderit et minim duis reprehenderit. Velit duis duis id elit ut quis Lorem est cupidatat deserunt do ullamco cupidatat labore excepteur. Enim nisi mollit consectetur incididunt nisi ullamco enim. Fugiat reprehenderit id adipisicing ad reprehenderit. Consectetur nulla et est sit ipsum non. Ut consequat voluptate fugiat quis cupidatat irure excepteur adipisicing Lorem deserunt velit laboris officia do in. Consectetur enim consequat et cillum veniam sint aliqua incididunt reprehenderit officia excepteur consectetur id nostrud.",
      },
      {
        title: "play",
        body: "Sunt id quis aliquip reprehenderit ad veniam adipisicing magna consectetur incididunt sunt eu. Minim proident qui dolore minim anim nisi elit culpa nulla reprehenderit et minim duis reprehenderit. Velit duis duis id elit ut quis Lorem est cupidatat deserunt do ullamco cupidatat labore excepteur. Enim nisi mollit consectetur incididunt nisi ullamco enim. Fugiat reprehenderit id adipisicing ad reprehenderit. Consectetur nulla et est sit ipsum non. Ut consequat voluptate fugiat quis cupidatat irure excepteur adipisicing Lorem deserunt velit laboris officia do in. Consectetur enim consequat et cillum veniam sint aliqua incididunt reprehenderit officia excepteur consectetur id nostrud.",
      },
      {
        title: "build",
        body: "Sunt id quis aliquip reprehenderit ad veniam adipisicing magna consectetur incididunt sunt eu. Minim proident qui dolore minim anim nisi elit culpa nulla reprehenderit et minim duis reprehenderit. Velit duis duis id elit ut quis Lorem est cupidatat deserunt do ullamco cupidatat labore excepteur. Enim nisi mollit consectetur incididunt nisi ullamco enim. Fugiat reprehenderit id adipisicing ad reprehenderit. Consectetur nulla et est sit ipsum non. Ut consequat voluptate fugiat quis cupidatat irure excepteur adipisicing Lorem deserunt velit laboris officia do in. Consectetur enim consequat et cillum veniam sint aliqua incididunt reprehenderit officia excepteur consectetur id nostrud.",
      },
    ],
  };
  useEffect(() => {
    document.addEventListener("scroll", () => {
      console.log("position", window.scrollY);
    });
  });

  return (
    <div className="flex justify-center">
      <Header></Header>
      <div className="container absolute top-7 -z-10 scroll-m-7 max-w-3xl" id="top">
        <div className="max-w-md mx-auto">
          <h1 className="font-lg-body font-bold text-8xl pt-8 text-left text-black first-letter:text-blue">
            david
          </h1>
          <h1 className=" font-lg-body font-bold text-6xl text-right text-black first-letter:text-orange">
            cerniglia
          </h1>
        </div>
        <h2 className="text-center mt-4 font-sm-heading text-3xl font-extrabold">
          software developer
        </h2>
        <p className="font-body mt-6">
          Nisi commodo magna fugiat officia irure deserunt qui fugiat{" "}
          <span className="before:block before:absolute relative inline-block before:inset-1  before:bg-orange before:opacity-25 before:-mx-2 before:h-3 before:top-2">
            <span className="relative font-semibold">ccaecat</span>
          </span>{" "}
          enim exercitation. Amet dolor dolor sit nulla non sint magna enim
          mollit irure esse duis dolore eiusmod nulla. Qui non et duis minim
          nisi adipisicing occaecat in culpa officia. Veniam cillum consectetur
          ea ut sit dolore non occaecat velit est.
        </p>
        <p>
          Consectetur aliqua ullamco magna dolor fugiat duis Lorem. Pariatur
          amet voluptate fugiat labore aute ex culpa excepteur adipisicing.
          Labore ut est magna sit fugiat dolore. Officia enim laboris sit.
        </p>
        <p>
          Consectetur aliqua ullamco magna dolor fugiat duis Lorem. Pariatur
          amet voluptate fugiat labore aute ex culpa excepteur adipisicing.
          Labore ut est magna sit fugiat dolore. Officia enim laboris sit.
        </p>
        <p>
          Consectetur aliqua ullamco magna dolor fugiat duis Lorem. Pariatur
          amet voluptate fugiat labore aute ex culpa excepteur adipisicing.
          Labore ut est magna sit fugiat dolore. Officia enim laboris sit.
        </p>
        {content.sections.map((s, i) => (
          <ContentSection key={i} title={s.title} body={s.body} />
        ))}
        <Link href={'#top'}><div className="blob h-20 w-20 fixed bottom-5 right-5 bg-yellow opacity-80 drop-shadow-xl backdrop-blur-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-10 h-10 relative top-5 left-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
            />
          </svg>
        </div></Link>
      </div>
    </div>
  );
};

export default Home;
