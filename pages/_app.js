import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>201515300 장우석 정렬 시각화</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
