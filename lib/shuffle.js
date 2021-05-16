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

export default shuffle;
