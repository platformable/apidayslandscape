import React from "react";
import Link from "next/link";
import Banner from "./Banner";

export default function Footer() {
  return (
    <footer className=" bg-[var(--dark-blue)] text-white">
      <Banner />
      <div className="container mx-auto px-1 md:px-0 py-14">
        <p className="flex gap-x-1 items-center justify-center mb-0 text-[12px] md:text-base flex-wrap">
          &copy; This website was built for apidays by{" "}
          <Link href="https://www.platformable.com" target="_blank" className="flex  items-center gap-x-1">
            <img
              src="/footer_platformable.png"
              alt=""
              className="max-w-[125px]"
            />
            <span className="text-white font-semibold">Platformable.com</span>
          </Link>
          proudly{" "}
          <img src="/heart_icon.png" alt="" className="footer-icon" /> based
          in Barcelona{" "}
        </p>
      </div>
      <div
        className={`text-white flex flex-col justify-center items-center  pt-5 pb-8 border-t border-white border-solid border-opacity-50`}
      >
        <Link href="#header">
          <div className="text-white flex flex-col items-center gap-2">
            <img
              src="/arrow_collapse_top.svg"
              alt="arrow icon"
              className="cursor-pointer"
            />
            GO TO TOP
          </div>
        </Link>
      </div>
    </footer>
  );
}
