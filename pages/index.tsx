import type { NextPage } from "next";
import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import ContentSection from "../components/ContentSection";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import { content } from "./../public/data";

export async function getStaticProps() {
  return {
    props: {},
  };
}

const Home: NextPage = (props) => {
  useEffect(() => {
    document.addEventListener("scroll", () => {
      console.log("position", window.scrollY);
    });
  });

  return (
    <>
      <Header></Header>
      <div className="container absolute top-7 -z-10 max-w-screen-xl">
        <div>
          <h1 className="font-lg-body font-bold text-8xl pt-8 text-left text-black first-letter:text-blue">
            david
          </h1>
          <h1 className=" font-lg-body font-bold text-6xl text-right text-black first-letter:text-orange">
            cerniglia
          </h1>
        </div>
        <h2 className="text-center mt-4 font-sm-heading text-4xl font-extrabold">
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
        {content.sections.map((s, i) => (
          <ContentSection key={i} title={s.title} body={s.body} />
        ))}
      </div>
    </>
  );
};

export default Home;
