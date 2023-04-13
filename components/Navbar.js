import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="h-14 p-2 flex items-center justify-center bg-poke-red shadow-[0_4px_50px_#EF5350]">
      <Link href="/">
        <h1 style={{ color: "#DDB755" }}>
          <b>Pokemon</b>
        </h1>
      </Link>
    </div>
  );
};

export default Navbar;
