import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="w-full bg-zinc-800 backdrop-blur-2xl h-20 flex items-center justify-between p-4 font-bold tracking-widest ">
      <Link href="/">School</Link>
      <div className="flex gap-8 ">
        <Link href="/add-school" className="border px-4 py-2 rounded-lg ">
          Add School
        </Link>
        <Link href="/view-school" className="border px-4 py-2 rounded-lg ">
          View Schools
        </Link>
      </div>
    </header>
  );
}

export default Header;
