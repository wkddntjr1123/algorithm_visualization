import Head from "next/head";
import { useState } from "react";
import InsertionSort from "../components/InsertionSort";

const init_arr = [2, 6, 1, 10, 9, 7, 3, 8, 4, 5]; //배열값. 나중에 fs를 통해 1~100까지의 수가 있는 파일을 받을 예정

//배열을 섞는 함수
const shuffle = (init_arr) => {
    let arr = [...init_arr];
    var j, x, i;
    for (i = arr.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = arr[i - 1];
        arr[i - 1] = arr[j];
        arr[j] = x;
    }
    return arr;
};

export default function Home() {
    const [arr, setArr] = useState(init_arr); //배열이 섞이면 화면이 렌더링되게 하기 위해서 state 사용

    const handleShuffle = () => {
        setArr(shuffle(init_arr));
    };

    return (
        <div>
            <Head>
                <title>201515300 장우석 정렬알고리즘 시각화</title>
            </Head>
            <h1>Sort Algorithm Visualization</h1>
            <div className="board">{arr.join(",")}</div>
            <div className="buttonBox">
                <button onClick={handleShuffle}>shuffle</button>
                <button>sort</button>
            </div>

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
