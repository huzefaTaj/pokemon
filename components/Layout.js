import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";

const Layout = ({ title, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />

      <div>{children}</div>
    </div>
  );
};

export default Layout;
