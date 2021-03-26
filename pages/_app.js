// @ts-nocheck
import { useEffect, useState } from "react";
import "../styles/globals.css";
import Head from "next/head";
import Layout from "../components/layout";
import axios from "axios";
import TokenContext from "../tokenContext";
import useSwr from "swr";
let fetcher;
if (typeof window !== "undefined") {
  const token = localStorage.getItem("token");
  fetcher = (url) => axios.post(url, { token }).then((res) => res);
} else {
  console.log(false);
}

function MyApp({ Component, pageProps }) {
  const [isVerified, setIsVerified] = useState();

  const { data } = useSwr("/api/verify", fetcher);
  useEffect(() => {
    if (!data) {
      setIsVerified(true);
    } else {
      setIsVerified(false);
    }
  }, []);
 

  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <TokenContext.Provider value={isVerified}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </TokenContext.Provider>
    </div>
  );
}

export default MyApp;
