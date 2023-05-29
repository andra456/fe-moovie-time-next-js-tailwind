import React from "react";
import { AppProvider } from "@/libs/contexts/store";
import { InitialState } from "@/libs/contexts/action";
import { QueryClientProvider } from "react-query";
import { queryClient } from "@/libs/util/query";
import "../styles/tailwind.css";
import { bodyFont } from "../styles/font";

export default function costumApp({ Component, pageProps }) {
  return (
    <main className={`${bodyFont.variable} font-body`}>
      <QueryClientProvider client={queryClient}>
        <AppProvider initialState={InitialState}>
          <Component {...pageProps} />
        </AppProvider>
      </QueryClientProvider>
    </main>
  );
}
