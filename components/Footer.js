import React from "react";

export default function Footer() {
  return (
    <footer className=" bg-[var(--dark-blue)] text-white">
      <div>
        <img src="/strip.png" alt="" />
      </div>
      <div className="container py-14">
        <p className="flex gap-x-1 justify-center mb-0">
          &copy; This website was built for apidays by{" "}
          <a href="http://www.platformable.com" target="_blank">
            <img
              src="../footer_platformable.png"
              alt=""
              className="footer-logo"
            />
          </a>
          proudly{" "}
          <img src="../footer_heart.png" alt="" className="footer-icon" /> based
          in Barcelona{" "}
        </p>
      </div>
    </footer>
  );
}
