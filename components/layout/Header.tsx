import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const links = [
  { slug: "/", label: "Home" },
  { slug: "/custom-layout", label: "Custom layout" },
];

// This is the place responsible for wrapping your app.
// Add here components like Footer, Nav etc.
export const HeadersDetails = ({ children }: Props) => (
  <div>
    <header className="bg-slate-900 p-4">
      <div className="bg-header">
        <div className="box-movies">
          <div className="poster"></div>
          <div className="metadata">
            <div className="description"></div>
            <div className="scoring-budged"></div>
            <div className="overviews"></div>
          </div>
        </div>
      </div>
    </header>
    <main className="bg-[#FCFCFC]">{children}</main>;
  </div>
);

/*
<header className="bg-white shadow">
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
    <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Dashboard
    </h1>
    </div>
</header>
*/
