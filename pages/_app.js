import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>201515300 장우석 정렬 시각화</title>
      </Head>
      <Component {...pageProps} />
      <br />
      <br />
      <br />
      <div className="footer">
        GitHub :{" "}
        <a href="https://github.com/wkddntjr1123/nextjs_algorithm_visualization" target="_blank">
          https://github.com/wkddntjr1123/nextjs_algorithm_visualization
        </a>
      </div>
      <style jsx>
        {`
          .footer {
            text-align: center;
            font-weight: bold;
            font-size: 20px;
          }
          .footer a {
            font-weight: 400;
            color: #7d7dff;
          }
        `}
      </style>
    </>
  );
}

export default MyApp;
