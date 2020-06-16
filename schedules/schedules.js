"use strict";

let schedule_arr = {
  sunday: {
    1: {
      url: "http://127.0.0.1:5500/session/session.html",
      title: "새벽을 깨우는 요가1",
      time: "AM 6:10-7:20",
      attend: "7/8명",
    },
    2: {
      url: "http://127.0.0.1:5500/session/session.html",
      title: "새벽을 깨우는 요가2",
      time: "AM 6:10-7:20",
      attend: "7/8명",
    },
    3: {
      url: "http://127.0.0.1:5500/session/session.html",
      title: "새벽을 깨우는 요가3",
      time: "AM 6:10-7:20",
      attend: "7/8명",
    },
    4: {
      url: "http://127.0.0.1:5500/session/session.html",
      title: "새벽을 깨우는 요가4",
      time: "AM 6:10-7:20",
      attend: "7/8명",
    },
    5: {
      url: "http://127.0.0.1:5500/session/session.html",
      title: "새벽을 깨우는 요가5",
      time: "AM 6:10-7:20",
      attend: "7/8명",
    },
  },

  monday: {
    1: {
      url: "http://127.0.0.1:5500/session/session.html",
      title: "새벽을 깨우는 요가2",
      time: "AM 6:10-7:20",
      attend: "7/8명",
    },
    2: {
      url: "http://127.0.0.1:5500/session/session.html",
      title: "새벽을 깨우는 요가3",
      time: "AM 6:10-7:20",
      attend: "7/8명",
    },
    3: {
      url: "http://127.0.0.1:5500/session/session.html",
      title: "새벽을 깨우는 요가4",
      time: "AM 6:10-7:20",
      attend: "7/8명",
    },
    4: {
      url: "http://127.0.0.1:5500/session/session.html",
      title: "새벽을 깨우는 요가5",
      time: "AM 6:10-7:20",
      attend: "7/8명",
    },
  },

  tuesday: {
    1: {
      url: "http://127.0.0.1:5500/session/session.html",
      title: "화요일 깨우는 요가1",
      time: "AM 6:10-7:20",
      attend: "7/8명",
    },
    2: {
      url: "http://127.0.0.1:5500/session/session.html",
      title: "화요일 깨우는 요가2",
      time: "AM 6:10-7:20",
      attend: "7/8명",
    },
    3: {
      url: "http://127.0.0.1:5500/session/session.html",
      title: "화요일  깨우는 요가3",
      time: "AM 6:10-7:20",
      attend: "7/8명",
    },
    4: {
      url: "http://127.0.0.1:5500/session/session.html",
      title: "화요일 깨우는 요가4",
      time: "AM 6:10-7:20",
      attend: "7/8명",
    },
  },

  wednesday: {
    1: {
      url: "http://127.0.0.1:5500/session/session.html",
      title: "새벽을 깨우는 요가1",
      time: "AM 6:10-7:20",
      attend: "7/8명",
    },
    2: {
      url: "http://127.0.0.1:5500/session/session.html",
      title: "새벽을 깨우는 요가2",
      time: "AM 6:10-7:20",
      attend: "7/8명",
    },
    3: {
      url: "http://127.0.0.1:5500/session/session.html",
      title: "새벽을 깨우는 요가3",
      time: "AM 6:10-7:20",
      attend: "7/8명",
    },
    4: {
      url: "http://127.0.0.1:5500/session/session.html",
      title: "새벽을 깨우는 요가4",
      time: "AM 6:10-7:20",
      attend: " 7/8명",
    },
  },

  thursday: {
    1: {
      url: "http://127.0.0.1:5500/session/session.html",
      title: "새벽을 깨우는 요가1",
      time: "AM 6:10-7:20",
      attend: "7/8명",
    },
    2: {
      url: "http://127.0.0.1:5500/session/session.html",
      title: "새벽을 깨우는 요가2",
      time: "AM 6:10-7:20",
      attend: "7/8명",
    },
    3: {
      url: "http://127.0.0.1:5500/session/session.html",
      title: "새벽을 깨우는 요가3",
      time: "AM 6:10-7:20",
      attend: "7/8명",
    },
    4: {
      url: "http://127.0.0.1:5500/session/session.html",
      title: "새벽을 깨우는 요가4",
      time: "AM 6:10-7:20",
      attend: "7/8명",
    },
  },

  friday: {
    1: {
      url: "http://127.0.0.1:5500/session/session.html",
      title: "새벽을 깨우는 요가1",
      time: "AM 6:10-7:20",
      attend: "7/8명",
    },
    2: {
      url: "http://127.0.0.1:5500/session/session.html",
      title: "새벽을 깨우는 요가2",
      time: "AM 6:10-7:20",
      attend: "7/8명",
    },
    3: {
      url: "http://127.0.0.1:5500/session/session.html",
      title: "새벽을 깨우는 요가3",
      time: "AM 6:10-7:20",
      attend: "7/8명",
    },
    4: {
      url: "http://127.0.0.1:5500/session/session.html",
      title: "새벽을 깨우는 요가4",
      time: "AM 6:10-7:20",
      attend: "7/8명",
    },
  },

  saturday: {
    1: {
      url: "http://127.0.0.1:5500/session/session.html",
      title: "새벽을 깨우는 요가1",
      time: "AM 6:10-7:20",
      attend: "7/8명",
    },
    2: {
      url: "http://127.0.0.1:5500/session/session.html",
      title: "새벽을 깨우는 요가2",
      time: "AM 6:10-7:20",
      attend: "7/8명",
    },
    3: {
      url: "http://127.0.0.1:5500/session/session.html",
      title: "새벽을 깨우는 요가3",
      time: "AM 6:10-7:20",
      attend: "7/8명",
    },
    4: {
      url: "http://127.0.0.1:5500/session/session.html",
      title: "새벽을 깨우는 요가4",
      time: "AM 6:10-7:20",
      attend: "7/8명",
    },
  },
};

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
const curYear = date.getFullYear();
const curDay = date.getDay();
const curDate = date.getDate();
const curMonth = date.getMonth() + 1;
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

// Object.keys 는 객체의 키값을 배열로 리턴함
// 데이터를 밖에로 뺴내는 방법

Object.keys(schedule_arr).forEach((key) => {
  const temp_obj = schedule_arr[key];

  const node = document.querySelector(`.swiper-slide[name=${key}]`);

  let temp_str = "";

  Object.keys(temp_obj).forEach((element) => {
    const title = `<h4>${temp_obj[element].title}</h4>`;
    const time = `<span>${temp_obj[element].time}</span>`;
    const attend = `<span>참가인원: ${temp_obj[element].attend}</span>`;

    temp_str += `<a class="item" href="${temp_obj[element].url}"><div>
    ${title}${time}${attend}</div></a>`;
  });

  node.innerHTML = temp_str;
});

// page 분할

function init() {
  setCurrentDate();
}

init();
