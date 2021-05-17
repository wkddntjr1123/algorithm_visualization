const blinkColor = (i, j, speed) => {
  return new Promise((resolve, reject) => {
    document.getElementsByClassName("bar")[i].style.backgroundColor = "#007ad8";
    document.getElementsByClassName("bar")[j].style.backgroundColor = "#007ad8";
    setTimeout(resolve, speed);
  });
};
export default blinkColor;
