import React, {useEffect} from 'react'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import { CompanyProvider } from '../context/CompanyContext';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
}, []);

  return <>
  <CompanyProvider>
  <Component {...pageProps} />
  </CompanyProvider>
  </>
}

export default MyApp
