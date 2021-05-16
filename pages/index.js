import Head from "next/head";
import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Home() {
    return (
        <div>
            <Head>
                <title>201515300 장우석 정렬알고리즘 시각화</title>
            </Head>
            <Navbar />
            <h1>Sort Algorithm Visualization</h1>

            <style jsx>
                {`
                    h1 {
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
