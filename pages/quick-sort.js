import { uniqueId } from "lodash";
import { useState } from "react";
import Navbar from "../components/Navbar";
import shuffle from "../lib/shuffle";
import Bar from "../components/bar";
import quickSort from "../lib/quickSort";

//배열값. 나중에 fs를 통해 1~100까지의 수가 있는 파일을 받을 예정
const h = 10;
const w = 10;

//맨 처음에 나오는 1~100까지 정렬된 배열
const init_arr = Array(h * w)
  .fill()
  .map((arr, i) => {
    return i + 1;
  });

const QuickSort = () => {
  const [arr, setArr] = useState(init_arr); //배열이 섞이면 화면이 렌더링되게 하기 위해서 state 사용
  const [idxI, setIdxI] = useState(-1); //bar밑에 i인덱스
  const [idxJ, setIdxJ] = useState(-1); //bar밑에 j인덱스
  const [isRunning, setIsRunning] = useState(false); //sorting중이면 버튼 숨기기 위함
  const [speed, setSpeed] = useState(5); //정렬 시각화 속도

  //배열 shuffle
  const handleShuffle = () => {
    setArr(shuffle(arr));
  };

  //txt파일 숫자들 읽어서 배열화 --> arr state값 변경
  const fileInput = (setArr) => {
    let input = document.createElement("input");

    input.type = "file";
    input.accept = "text/plain";

    input.click();

    input.onchange = (e) => {
      let reader = new FileReader();
      reader.readAsText(e.target.files[0], "UTF-8");

      reader.onload = () => {
        let rawArr = reader.result.split(",", 100); //쉼표 기준으로 나눠서 배열로
        let txtArr = [];

        for (let i = 0; i < rawArr.length; i++) {
          txtArr[i] = parseInt(rawArr[i]); //문자열을 숫자로 변환
        }
        txtArr = txtArr.filter((elem) => {
          return !!elem; //NaN값 제거
        });

        setArr(txtArr); //정렬할 배열을 txt파일로 변경
      };
    };
  };

  return (
    <div>
      <Navbar />
      <h1>Quick Sort</h1>
      <div className="board">
        {arr.map((value, i) => (
          <Bar key={`${uniqueId("set")}${i}`} value={value} index={i} /> //lodash uniqueId로 고유키값 설정
        ))}
      </div>
      <div className="index" style={{ left: `${idxI}%` }}>
        i
      </div>
      <div className="index" style={{ left: `${idxJ}%` }}>
        j
      </div>
      <div className="buttonBox">
        {!isRunning && (
          <select className="speedBox" onChange={(e) => setSpeed(e.target.value)}>
            <option value={5}>속도 : 빠르게</option>
            <option value={50}>속도 : 느리게</option>
          </select>
        )}
        {!isRunning && <button onClick={() => fileInput(setArr)}>File</button>}
        {!isRunning && <button onClick={handleShuffle}>Shuffle</button>}
        {!isRunning && <button onClick={() => quickSort(arr, setArr, setIdxI, setIdxJ, speed)}>Sort</button>}
        {isRunning && <div style={{ fontSize: "30px", fontWeight: "bold", marginTop: "20px", marginRight: "20px" }}>Running!</div>}
      </div>

      <style jsx>
        {`
          h1 {
            text-align: center;
          }
          .board {
            width: 100%;
            height: 70vh;
            background-color: black;
            color: white;
            font-size: 10px;
            transform: rotateX(180deg);
          }
          .buttonBox {
            width: 100%;
            height: 4.5vh;
            text-align: right;
          }
          button {
            font-size: 35px;
            height: 65px;
            margin: 20px 20px 0px 0px;
            border-radius: 10px;
          }
          .index {
            position: absolute;
            width: 0.9%;
            color: black;
            font-size: 20px;
            font-weight: bold;
            text-align: center;
          }
          .speedBox {
            width: 200px;
            height: 65px;
            border: 2px solid black;
            font-size: 30px;
            margin-right: 30px;
          }
        `}
      </style>
    </div>
  );
};

export default QuickSort;
