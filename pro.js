let colors = document.querySelectorAll(".color input");
let grandBox = document.querySelector(".grandBox");
let selectMenu = document.querySelector(".seclect-box select");
let textarea = document.querySelector("textarea");
let refresh = document.querySelector(".refresh");
let copyBtn = document.querySelector(".copy");

const getRandomColor = () => {
  const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
  return `#${randomHex}`;
};
const copyCode = () => {
  navigator.clipboard.writeText(textarea.value);
  copyBtn.innerText = "code copied";
  setTimeout(() => (copyBtn.innerText = "copy code"), 1600);
};

const generateGradient = (isRandom) => {
  if (isRandom) {
    colors[0].value = getRandomColor();
    colors[1].value = getRandomColor();
  }

  const gradient = `linear-gradient(${selectMenu.value}, ${colors[0].value}, ${colors[1].value})`;
  grandBox.style.background = gradient;
  document.body.style.background = gradient;
  textarea.value = `background : ${gradient}`;
};

colors.forEach((input) => {
  input.addEventListener("input", () => generateGradient(false));
});

selectMenu.addEventListener("change", () => generateGradient(false));
refresh.addEventListener("click", () => generateGradient(true));
copyBtn.addEventListener("click", copyCode);
