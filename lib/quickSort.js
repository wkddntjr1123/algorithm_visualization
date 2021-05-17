import BrowserBeep from "browser-beep";

let order = [];

const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const partition = (dupBlocks, l, r, setArr, setIdxI, setIdxJ, speed, beepA) => {
  const pivot = l;
  let j = l;

  for (let i = l + 1; i <= r; i++) {
    order.push([i, pivot, null, null]);
    if (dupBlocks[i] < dupBlocks[pivot]) {
      j += 1;
      swap(dupBlocks, i, j);
      order.push([i, j, dupBlocks.slice(), null]);
    }
  }

  swap(dupBlocks, pivot, j);
  order.push([pivot, j, dupBlocks.slice(), null]);
  order.push([null, null, null, j]);
  console.log(dupBlocks);
  return j;
};

const quickSortHelper = (dupBlocks, l, r, setArr, setIdxI, setIdxJ, speed, beepA) => {
  if (l >= r) {
    if (l === r) order.push([null, null, null, l]);
    return;
  }

  const pivot = l + Math.floor(Math.random() * (r - l));

  swap(dupBlocks, l, pivot);
  order.push([l, pivot, dupBlocks.slice(), null]);

  const m = partition(dupBlocks, l, r, setArr, setIdxI, setIdxJ, speed, beepA);

  quickSortHelper(dupBlocks, l, m - 1, setArr, setIdxI, setIdxJ, speed, beepA);
  quickSortHelper(dupBlocks, m + 1, r, setArr, setIdxI, setIdxJ, speed, beepA);

  return;
};

const quickSort = (blocks, setArr, setIdxI, setIdxJ, speed) => {
  const dupBlocks = blocks.slice(); // Copying blocks array
  order = [];
  const beepA = BrowserBeep({ frequency: 700 }); //beep음 i

  quickSortHelper(dupBlocks, 0, dupBlocks.length - 1, setArr, setIdxI, setIdxJ, speed, beepA);

  for (let i = 0; i < document.getElementsByClassName("bar").length; i++) {
    document.getElementsByClassName("bar")[i].style.backgroundColor = "#d08181";
  }
  setIdxI(-1);
  setIdxJ(-1);

  return order;
};

export default quickSort;
