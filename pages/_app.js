import React, {useEffect} from 'react'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import { CompanyProvider } from '../context/CompanyContext';
import Script from 'next/script' 

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
}, []);

  return <>
  <Script src={`https://www.googletagmanager.com/gtag/js?id=G-KEPJR2KRS1`} strategy='lazyOnload'/>
  <Script
  dangerouslySetInnerHTML={{
    __html: `
    window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-KEPJR2KRS1');
  `
  }}>
  </Script>
  <CompanyProvider>
  <Component {...pageProps} />
  </CompanyProvider>
  </>
}

export default MyApp
