import BrowserBeep from "browser-beep";

let order = [];

const merge = async (dupBlocks, l, mid, r, setArr, setIdxI, setIdxJ, speed, beepA) => {
  let i = l,
    j = mid + 1;

  const arr = [];
  setIdxI(l);
  setIdxJ(r);
  while (i <= mid && j <= r) {
    order.push([i, j, null, null]);
    if (dupBlocks[i] <= dupBlocks[j]) {
      arr.push(dupBlocks[i++]);
    } else {
      arr.push(dupBlocks[j++]);
    }
  }

  while (i <= mid) {
    order.push([i, null, null, null]);
    arr.push(dupBlocks[i++]);
  }

  while (j <= r) {
    order.push([null, j, null, null]);
    arr.push(dupBlocks[j++]);
  }

  for (i = l; i <= r; i++) {
    dupBlocks[i] = arr[i - l];
    order.push([i, null, dupBlocks.slice(), null]);
  }
  let check = false;
  arr.map(async (value) => {
    for (let i = 0; i < document.getElementsByClassName("value").length; i++) {
      if (Number(document.getElementsByClassName("value")[i].innerHTML) === value) {
        document.getElementsByClassName("value")[i].parentNode.style.backgroundColor = "#007ad8";
        check = true;
        await new Promise((resolve, reject) => {
          document.getElementsByClassName("value")[i].parentNode.style.backgroundColor = "#007ad8";

          setTimeout(resolve, speed);
        });
      }
    }
  });
  beepA(1);
};

const mergeSortHelper = async (dupBlocks, l, r, setArr, setIdxI, setIdxJ, speed, beepA) => {
  if (l >= r) return;

  const mid = Math.floor((l + r) / 2);

  await mergeSortHelper(dupBlocks, l, mid, setArr, setIdxI, setIdxJ, speed, beepA);
  await mergeSortHelper(dupBlocks, mid + 1, r, setArr, setIdxI, setIdxJ, speed, beepA);
  await merge(dupBlocks, l, mid, r, setArr, setIdxI, setIdxJ, speed, beepA);
  let newSpeed = 100;
  if (Number(speed) === 5) {
    newSpeed = 100;
  } else {
    newSpeed = 400;
  }

  await new Promise((resolve, reject) => {
    setArr([...dupBlocks]);
    setTimeout(resolve, newSpeed);
  });
};

const mergeSort = async (blocks, setArr, setIdxI, setIdxJ, speed) => {
  order = [];
  const dupBlocks = blocks.slice();
  const beepA = BrowserBeep({ frequency: 700 }); //beep음 i

  await mergeSortHelper(dupBlocks, 0, dupBlocks.length - 1, setArr, setIdxI, setIdxJ, speed, beepA);

  for (let i = 0; i < dupBlocks.length; i++) {
    order.push([null, null, null, i]);
  }
  for (let i = 0; i < document.getElementsByClassName("bar").length; i++) {
    document.getElementsByClassName("bar")[i].style.backgroundColor = "#d08181";
  }
  setIdxI(-1);
  setIdxJ(-1);
  return order;
};

export default mergeSort;
