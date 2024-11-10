import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="flex justify-between items-center px-10 py-2">
      <Link href={"/"} className="flex gap-2">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRFesjHx2Sts0JyTVween-uVD8dm6TLivEsA&s"
          alt="Logo"
          className="w-20"
        />
      </Link>
      <div className="flex gap-8 justify-center items-center">
        <ul className="flex gap-4">
          <Link href={"/todos"}>
            <li className="text-xl text-orange-500">Todos</li>
          </Link>
        </ul>
        <div className="flex justify-center gap-2 items-center">
          <button className="w-20 h-8 bg-orange-500 rounded text-slate-50">
            login
          </button>
          <button className="w-20 h-8 bg-slate-100 rounded text-orange-500">
            Singup
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
