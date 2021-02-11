// @ts-nocheck
import { useEffect } from "react";
import "../styles/globals.css";
import Head from "next/head";
import Layout from "../components/layout";
import axios from "axios";

function MyApp({ Component, pageProps }) {
  useEffect(async () => {
    const token = localStorage.getItem("token");
    try {
      const verified = await axios.post("pages/api/verify.js", { token });
    } catch (error) {}
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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
