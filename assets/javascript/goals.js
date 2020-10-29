"use strict";

let objects = {
  one: {
    state: "current",
    title: "허리 뒤틀림 교정",
    date: "+D50",
  },
  two: {
    state: "past",
    title: "허리 뒤틀림 교정",
    date: "complete",
  },

  three: {
    state: "past",
    title: "거북목 교정",
    date: "complete",
  },
  four: {
    state: "current",
    title: "용사자세 교정",
    date: "+D31",
  },
  five: {
    state: "current",
    title: "다운독자세 교정",
    date: "+D27",
  },
  six: {
    state: "current",
    title: "얼굴 교정",
    date: "+D27",
  },
  seven: {
    state: "past",
    title: "윤곽 교정",
    date: "complete",
  },
};

// main change
// 화면이 보이고 안보이느고는 CSS에서 해결하였다.

document.querySelector(".goals__main");
const main__list = document.querySelector(".main__list");
let temp_str = "";

Object.keys(objects).forEach((key) => {
  if (objects[key].state == "current") {
    const titleNode = `<h2>${objects[key].title}</h2>`;
    const dateNode = `<span>${objects[key].date}</span>`;

    temp_str += `<li class="list"><div class="list__box">${titleNode}${dateNode}</div></li>`;
  } else if (objects[key].state == "past") {
    const titleNode = `<h2>${objects[key].title}</h2>`;
    const dateNode = `<span>${objects[key].date}</span>`;

    temp_str += `<li class="list past"><div class="list__box">${titleNode}${dateNode}</div></li>`;
  }

  main__list.innerHTML = temp_str;
});

// switch change
// switch를 눌렀을때 현재에 있던것들이 과거의 값으로 바뀌는 함수
const switch_btn = document.querySelector(".switch_btn");
const switch_name = document.querySelectorAll(".switch_name");

const switch__title = document.querySelectorAll(".switch__title");

const lists = document.querySelectorAll(".list");

switch_btn.addEventListener("click", () => {
  switch_name[0].classList.toggle("switch_open");
  switch_name[1].classList.toggle("switch_open");
  switch__title[0].classList.toggle("obj_open");
  switch__title[1].classList.toggle("obj_open");

  lists.forEach((list) => {
    list.classList.toggle("past");
  });
});
