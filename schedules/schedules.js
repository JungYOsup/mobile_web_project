"use strict";

// swiper

let day;

const swiper = new Swiper(".swiper-container", {
  pagination: {
    el: ".schedules__date ul",
    clickable: true,
    renderBullet: function (index, className) {
      switch (index) {
        case 0:
          day = "Sunday";
          break;
        case 1:
          day = "Monday";
          break;
        case 2:
          day = "Tuesday";
          break;
        case 3:
          day = "Wednesday";
          break;
        case 4:
          day = "Thursday";
          break;
        case 5:
          day = "Friday";
          break;
        case 6:
          day = "Saturday";
          break;
      }

      return `<li class=${className} name=${day}>${day.slice(0, 3)}</li>`;
    },
  },
});

// function current date

// current date

const date = new Date();
const curYear = date.getFullYear(); //년도
const curDay = date.getDay(); //요일 (ex 월 , 화 , 수 를 날짜로 나타냄)
const curDate = date.getDate(); //일
const curMonth = date.getMonth() + 1; //월
const fullDay = document.querySelector(".schedules__days> span");
var options = { weekday: "long" };
const convertcurDay = new Intl.DateTimeFormat("en-US", options).format(curDay);
const listsName = document.querySelectorAll(".schedules__date li");

function setCurrentDate() {
  fullDay.textContent = `${curDate}/0${curMonth}/${curYear}`;
  listsName.forEach((listName) => {
    if (listName.getAttribute("name") === convertcurDay) {
      // 별로 안좋은 코딩인것 같은데..
      listName.click();
    }
  });
}

// page 분할

function init() {
  setCurrentDate();
}

init();
