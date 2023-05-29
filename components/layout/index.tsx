import Navigation from "./Navigation";

export default function MainLayout({ children }) {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full">
        <Navigation />
        <main>{children}</main>
      </div>
    </>
  );
}
