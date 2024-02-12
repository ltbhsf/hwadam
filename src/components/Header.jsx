import { useState } from "react";
import logo from "../assets/logo.png";

export default function Header({ onClick, navigation }) {

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-[1px] border-gray-200 border-solid bg-white bg-opacity-[0.99]">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <button className="-m-1.5 p-1.5 flex flex-row items-end text-sm text-gray-800" onClick={() => onClick("main")}>
            <img className="h-8 w-auto" src={logo} alt="법률사무소 화담 로고" />
            <span>화담 법무사 사무소 </span>

            
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 lg:[&>*:nth-child(1)]:hover:border-pink-400 lg:[&>*:nth-child(5)]:hover:border-pink-400">
          {navigation.map((item) => (
            <button
              key={item.name}
              className="text-sm font-semibold leading-6 text-gray-900 hover:border-solid hover:border-b-2 hover:hoverColor: border-indigo-400"
              onClick={() => onClick(item.id)}
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className="flex flex-1 justify-end text-sm font-semibold leading-6 text-gray-900">
          <a className="group w-fit relative px-2.5">
            문의하기<span aria-hidden="true">&rarr;</span>
            <span className="absolute top-0 left-0 w-0 h-full bg-[#ffe812] transition-all ease-in group-hover:w-full rounded-full"></span>
            <span className="absolute top-50 left-1/2 -translate-x-2/4 opacity-0 group-hover:opacity-100 transition-all ease-in w-full">
              카카오톡<span aria-hidden="true">&rarr;</span>
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
}
