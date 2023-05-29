import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="main">
      <Head>
        <title>Moovie Time - Next JS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container w-full flex min-h-[500px] items-center justify-center showcase">
        <div className="content text-center">
          <h1 className="text-[35px] font-bold">Frontend Test</h1>
          <h3>Create Moovie-time review using Next.JS & Typescript</h3>
          <Link
            href="/explore"
            className="btn block my-5 text-[16px] inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2  font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
          >
            Get started
          </Link>
        </div>
      </section>
    </div>
  );
}
