import React from "react";
import Link from 'next/link'

export default function Header() {
  return (
      <>
{/*     <div className="navigation pt-3 bg-light">
      <div className="container nav-container d-flex">
      <div className="logo-container">
      <Link href="/"><img src="../homepage/logo_dark.png" alt="" className="img-fluid logo" /></Link>
      </div>

      <div className="link-container flex-grow-1">
        <ul className="d-flex justify-content-between text-uppercase">
          <li className="nav-link active">
          <Link className="nav-link active flex-grow-1" aria-current="page" href="/">Home</Link>
          </li>
  
          <li className="nav-link ">
          <Link className="nav-link flex-grow-1 disabled" aria-current="page" href="/homepage" disabled>Enhanced</Link>
          </li>
          <li className="nav-link active">
          <Link className="nav-link flex-grow-1" aria-current="page" href="/companies">Companies</Link>
          </li>
          <li className="nav-link active">
          <Link className="nav-link flex-grow-1" aria-current="page" href="/">About</Link>
          </li>
        </ul>
      </div>
      </div>
    </div> */} {/* nav */}


    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <div className="logox">
   <Link href="/"><img src="../logo_dark.png" alt="" className="img-fluid logo" /></Link>
   </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ">
       {/*  <li className="nav-item ">
          <Link className="nav-link active flex-grow-1" aria-current="page" href="/">Home</Link>
          </li>
          <li>
          <Link className="nav-link flex-grow-1" aria-current="page" href="/homepage">Enhanced</Link>
          </li>
          <li>
          <Link className="nav-link flex-grow-1" aria-current="page" href="/companies">Companies</Link>
          </li>
          <li>
          <Link className="nav-link flex-grow-1" aria-current="page" href="/about">ABOUT</Link>
          </li> */}
  
      </ul>
    </div>
  </div>
</nav>
    </>
  );
}
