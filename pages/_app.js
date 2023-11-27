import React, { useEffect } from "react";
import "../styles/globals.css";
// import 'bootstrap/dist/css/bootstrap.css';
import { CompanyProvider } from "../context/CompanyContext";
import Script from "next/script";
import PlausibleProvider from "next-plausible";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Script src={`https://www.googletagmanager.com/gtag/js?id=G-KEPJR2KRS1`} strategy='lazyOnload'/> */}
      {/* <Script
  dangerouslySetInnerHTML={{
    __html: `
    window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-KEPJR2KRS1');
  `
  }}>
  </Script> */}
      {/* <PlausibleProvider domain="openbankingvalue.platformable.com" enabled taggedEvents trackFileDownloads> */}

      <CompanyProvider>
        <Component {...pageProps} />
      </CompanyProvider>
      {/* </PlausibleProvider> */}
    </>
  )
  }

 

export default MyApp;
