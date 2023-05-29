import React from "react";
import Head from "next/head";
import MainLayout from "@/components/layout";
import MoviesSectionOne from "@/components/pages/listMovies/section-1";
import { useDispatch, TypesActions } from "@/libs/contexts/action";
import { useRouter } from "next/router";

export default function Movies() {
  const { mutations } = useDispatch();

  React.useEffect(() => {
    mutations.mutate({
      type: TypesActions.all,
      payload: {},
      method: "GET",
    });
  }, []);
  return (
    <>
      <Head>
        <title>Moovie Time - Next JS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <MoviesSectionOne />
      </MainLayout>
    </>
  );
}
