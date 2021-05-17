import BrowserBeep from "browser-beep";

let order = [];

const swap = async (arr, i, j, beepA) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  for (let k = 0; k < document.getElementsByClassName("value").length; k++) {
    if (Number(document.getElementsByClassName("value")[k].innerHTML) === arr[i]) {
      beepA(0.2);
      document.getElementsByClassName("value")[k].parentNode.style.backgroundColor = "#007ad8";

      document.getElementsByClassName("value")[k].parentNode.style.backgroundColor = "#007ad8";
    }
    if (Number(document.getElementsByClassName("value")[k].innerHTML) === arr[j]) {
      document.getElementsByClassName("value")[k].parentNode.style.backgroundColor = "#007ad8";

      document.getElementsByClassName("value")[k].parentNode.style.backgroundColor = "#007ad8";
    }
  }
};

const partition = async (dupBlocks, l, r, setArr, setIdxI, setIdxJ, speed, beepA) => {
  const pivot = l;
  let j = l;

  for (let i = l + 1; i <= r; i++) {
    order.push([i, pivot, null, null]);
    if (dupBlocks[i] < dupBlocks[pivot]) {
      j += 1;

      await swap(dupBlocks, i, j, beepA);
      order.push([i, j, dupBlocks.slice(), null]);
    }
  }

  await swap(dupBlocks, pivot, j, beepA);
  order.push([pivot, j, dupBlocks.slice(), null]);
  order.push([null, null, null, j]);

  return j;
};

const quickSortHelper = async (dupBlocks, l, r, setArr, setIdxI, setIdxJ, speed, beepA) => {
  if (l >= r) {
    if (l === r) order.push([null, null, null, l]);
    return;
  }

  const pivot = l + Math.floor(Math.random() * (r - l));
  setIdxI(l);
  setIdxJ(r);
  await swap(dupBlocks, l, pivot, beepA);
  order.push([l, pivot, dupBlocks.slice(), null]);

  const m = await partition(dupBlocks, l, r, setArr, setIdxI, setIdxJ, speed, beepA);
  let newSpeed = 100;
  if (Number(speed) === 5) {
    newSpeed = 100;
  } else {
    newSpeed = 350;
  }
  console.log(newSpeed);
  await new Promise((resolve, reject) => {
    setArr(dupBlocks);
    setTimeout(resolve, newSpeed);
  });
  await quickSortHelper(dupBlocks, l, m - 1, setArr, setIdxI, setIdxJ, speed, beepA);
  await quickSortHelper(dupBlocks, m + 1, r, setArr, setIdxI, setIdxJ, speed, beepA);

  return;
};

const quickSort = async (blocks, setArr, setIdxI, setIdxJ, speed) => {
  const dupBlocks = blocks.slice();
  order = [];
  const beepA = BrowserBeep({ frequency: 200 }); //beep음 i

  await quickSortHelper(dupBlocks, 0, dupBlocks.length - 1, setArr, setIdxI, setIdxJ, speed, beepA);
  setArr(dupBlocks);
  setIdxI(-2);
  setIdxJ(-2);

  return order;
};

export default quickSort;
