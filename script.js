const getColor = function () {
  // color codes = hex codes;
  const randomNumber = Math.floor(Math.random() * 16777215);
  const randomCode = "#" + randomNumber.toString(16);
  console.log(randomCode);
  document.body.style.backgroundColor = randomCode;
  let bg_color = document.getElementById("color-code");
  bg_color.innerText = randomCode;
};

document.getElementById("btn").addEventListener("click", getColor);
