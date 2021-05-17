import Head from "next/head";
import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>201515300 장우석</h1>
      <br />
      <div className="container">
        <h2>2021 알고리즘 텀 프로젝트</h2>
        <h2>정렬 알고리즘 시각화</h2>
        <br />
        <p>
          <strong>사용 언어</strong> : Javascript
        </p>
        <p>
          <strong>프레임워크</strong> : React (Next.js)
        </p>
        <br />
        <br />

        <p>
          <strong>File</strong> : txt파일에 있는 수를 읽어서 배열화 (각 숫자는 <strong>,</strong> 로 구분)
        </p>
        <p>
          <strong>Shuffle</strong> : 현재 배열을 무작위로 섞음
        </p>

        <p>
          <strong>Sort</strong> : 정렬 시작
        </p>
        <p>
          <strong>속도</strong> : 속도를 설정하고 Sort를 누르면 해당 속도로 시각화를 보여줌
        </p>
      </div>
      <style jsx>
        {`
          .container {
            text-align: center;
          }

          h1 {
            margin-top: 10%;
            text-align: center;
          }
          .board {
            width: 100%;
            height: 200px;
            background-color: green;
            color: white;
            font-size: 25px;
          }
          .buttonBox {
            width: 100%;
            height: 40px;
            background-color: gray;
            text-align: right;
          }
          button {
            font-size: 20px;
          }
        `}
      </style>
    </div>
  );
}
