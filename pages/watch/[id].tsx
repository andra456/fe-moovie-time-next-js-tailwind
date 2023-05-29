import React from "react";
import Head from "next/head";
import MainLayout from "@/components/layout";
import { useDispatch, TypesActions } from "@/libs/contexts/action";
import { useRouter } from "next/router";
import WatchSectionOne from "@/components/pages/watch/section-1";
import WatchSectionTwo from "@/components/pages/watch/section-2";
import WatchSectionThree from "@/components/pages/watch/section-3";

export default function Watch() {
  const router = useRouter();
  const { mutations } = useDispatch();
  const Init = async () => {
    const detail = await mutations.mutateAsync({
      type: TypesActions.detail,
      payload: { id: router.query.id },
      method: "GET",
    });
    if (detail) {
      mutations.mutate({
        type: TypesActions.all,
        payload: {},
        method: "GET",
      });
    }
  };

  React.useEffect(() => {
    if (router.query.id) {
      Init();
    }
  }, [router.query]);

  return (
    <>
      <Head>
        <title>Moovie Time - Next JS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <WatchSectionOne />
        <WatchSectionTwo />
        <WatchSectionThree />
      </MainLayout>
    </>
  );
}
