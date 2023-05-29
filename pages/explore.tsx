import React from "react";
import Head from "next/head";
import MainLayout from "@/components/layout";
import ExploreSectionOne from "@/components/pages/explores/section-1";
import ExploreSectionTwo from "@/components/pages/explores/section-2";

export default function Home() {
  return (
    <>
      <Head>
        <title>Moovie Time - Next JS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <ExploreSectionOne />
        <ExploreSectionTwo />
      </MainLayout>
    </>
  );
}
