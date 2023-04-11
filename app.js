const equal = document.querySelector(".equal");

const solve = () => {
  let x = document.querySelector("#display").value;
  let y = eval(x);
  document.querySelector("#display").value = y;
};

equal.addEventListener("click", solve);
