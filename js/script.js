//1
let btn1 = document.querySelector(
  ".questions-cards__card:first-child .questions-cards__btn"
);
let text1 = document.querySelector(".questions-cards__text");

btn1.onclick = () => {
  if (btn1.style.transform === "rotate(0deg)") {
    btn1.style.transform = "rotate(135deg)";
    text1.style.display = "block";
    text1.style.transform = "translateY(0)";
  } else {
    btn1.style.transform = "rotate(0)";
    text1.style.display = "none";
    text1.style.transform = "translateY(-100%)";
  }
};

//2
let btn2 = document.querySelector(
  ".questions-cards__card:nth-child(2) .questions-cards__btn"
);
let text2 = document.querySelector(
  ".questions-cards__card:nth-child(2) .questions-cards__text"
);

btn2.onclick = () => {
  if (btn2.style.transform === "rotate(0deg)") {
    btn2.style.transform = "rotate(135deg)";
    text2.style.display = "block";
    text2.style.transform = "translateY(0)";
  } else {
    btn2.style.transform = "rotate(0)";
    text2.style.display = "none";
    text2.style.transform = "translateY(-100%)";
  }
};

//3
let btn3 = document.querySelector(
  ".questions-cards__card:nth-child(3) .questions-cards__btn"
);
let text3 = document.querySelector(
  ".questions-cards__card:nth-child(3) .questions-cards__text"
);

btn3.onclick = () => {
  if (btn3.style.transform === "rotate(0deg)") {
    btn3.style.transform = "rotate(135deg)";
    text3.style.display = "block";
    text3.style.transform = "translateY(0)";
  } else {
    btn3.style.transform = "rotate(0)";
    text3.style.display = "none";
    text3.style.transform = "translateY(-100%)";
  }
};

//4
let btn4 = document.querySelector(
  ".questions-cards__card:last-child .questions-cards__btn"
);
let text4 = document.querySelector(
  ".questions-cards__card:last-child .questions-cards__text"
);

btn4.onclick = () => {
  if (btn4.style.transform === "rotate(0deg)") {
    btn4.style.transform = "rotate(135deg)";
    text4.style.display = "block";
    text4.style.transform = "translateY(0)";
  } else {
    btn4.style.transform = "rotate(0)";
    text4.style.display = "none";
    text4.style.transform = "translateY(-100%)";
  }
};
