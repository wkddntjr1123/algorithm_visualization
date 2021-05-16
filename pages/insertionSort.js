import { useState } from "react";
import Navbar from "../components/Navbar";
import shuffle from "../lib/shuffle";

//배열값. 나중에 fs를 통해 1~100까지의 수가 있는 파일을 받을 예정
const h = 10;
const w = 10;

const init_arr = Array(h * w)
  .fill()
  .map((arr, i) => {
    // (arr: 현재값, i:인덱스)
    return i;
  });

const InsertionSort = () => {
  const [arr, setArr] = useState(init_arr); //배열이 섞이면 화면이 렌더링되게 하기 위해서 state 사용
  const [idxI, setIdxI] = useState(-1); //bar밑에 i인덱스
  const [idxJ, setIdxJ] = useState(-1); //bar밑에 j인덱스
  const [isRunning, setIsRunning] = useState(false); //sorting중이면 버튼 숨기기 위함

  //배열 shuffle
  const handleShuffle = () => {
    setArr(shuffle(init_arr));
  };

  //삽입정렬 함수 : async/await를 사용해서 setArr을 통한 state업데이트 렌더링
  const handdleSort = async (arr) => {
    setIsRunning(true);
    let i = 1;
    while (i < arr.length) {
      let j = i;
      while (j > 0 && arr[j - 1] > arr[j]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
        await new Promise((resolve, reject) => {
          //0.01초 후 resolve함수가 실행되므로 0.01초의 딜레이를 갖게됌
          setArr([...arr]);
          setTimeout(resolve, 0.1);
        });
        j = j - 1;
        setIdxJ(j);
      }
      i = i + 1;
      setIdxI(i);
    }
    setIsRunning(false);
    setIdxI(-1);
    setIdxJ(-1);
  };

  //Bar컴포넌트
  const Bar = (props) => {
    const { value, index } = props;
    const style = { height: value * 2, left: `${index}%` };
    return (
      <div className="bar" style={style}>
        <style jsx>
          {`
            .bar {
              position: absolute;
              width: 0.9%;
              background-color: black;
            }
          `}
        </style>
      </div>
    );
  };

  return (
    <div>
      <Navbar />
      <h1>Insertion Sort</h1>
      <div className="board">
        {arr.map((value, i) => (
          <Bar key={i} value={value} index={i} />
        ))}
      </div>
      <div className="index" style={{ left: `${idxI}%` }}>
        i
      </div>
      <div className="index" style={{ left: `${idxJ}%` }}>
        j
      </div>
      <div className="buttonBox">
        {!isRunning && <button onClick={handleShuffle}>shuffle</button>}
        {!isRunning && <button onClick={() => handdleSort(arr)}>sort</button>}
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
            font-size: 10px;
            transform: rotateX(180deg);
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
          .index {
            position: absolute;
            width: 0.9%;
            background-color: white;
            color: black;
            font-size: 16px;
            text-align: center;
          }
        `}
      </style>
    </div>
  );
};

export default InsertionSort;
