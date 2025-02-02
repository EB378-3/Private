import HeaderAuth from "@components/Front/Nav/header-auth";
import Navbar from "@components/Front/Nav/Navbar";
import React from "react";
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar locale={""}>
        <HeaderAuth
          params={{
            locale: "",
          }} />
      </Navbar>
      <div className="w-screen flex flex-col gap-12 items-start">{children}</div>
    </>
  );
}
