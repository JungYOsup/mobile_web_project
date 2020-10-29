"use strict";

let coaches_obj = {
  a: {
    img: "/assets/img/coache.png",
    name: "갈코치",
    inform:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque architecto aliquam perspiciatis doloribus neque ipsa nulla,    obcaecati rem sunt dolor fugiat optio ad quasi assumenda eos    consectetur delectus maiores commodi.",

    certificate: [
      "한국협회인증",
      "라이프코치KAC",
      "공요가스튜디오 인증 요가지도자격",
      "대한적십자인증 수상인명구조원",
      "한국교육인증평가원인증 독서지도사1급",
    ],
    career: [
      "변화전문 아카데미 코칭센터 대표",
      "힐링,바크람,아쉬탕가,반야사요가 지도자과정 수료",
      "러닝크로 대상 요가지도 중",
      "동국명상원 명상지도자과정 중",
      "울트라마라톤 120KM 완주경력",
    ],

    position: "Head coach",
  },

  b: {
    img: "/assets/img/coache.png",
    name: "정코치",
    inform:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque architecto aliquam perspiciatis doloribus neque ipsa nulla,    obcaecati rem sunt dolor fugiat optio ad quasi assumenda eos    consectetur delectus maiores commodi.",

    certificate: ["한국협회인증", "라이프코치", "abc"],
    career: ["변화전문 아카데미 코칭센터 대표"],
    position: "Sub coach",
  },
};

// slider

var swiper = new Swiper(".coaches_main", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// slider
const swiperSlides = document.querySelector(".swiper-slide");
let html = "";

Object.keys(coaches_obj).forEach((key) => {
  const key_name = document.querySelector(`.swiper-slide[name=${key}]`);

  const titleNode = `<div class="coaches__title">
  <h4>${coaches_obj[key].position}</h4></div>`;

  const imgNode = `<div class="coaches__img">
  <img src="${coaches_obj[key].img}" alt="img" /></div>`;

  const nameNode = `<div class="coaches__name">
  <h4>${coaches_obj[key].name}</h4></div>`;

  const informNode = `<div class="coaches__inform">
  <p>${coaches_obj[key].inform}</p></div>`;

  const skillNode = `<div class="coaches__skill">
    <h4>보유자격</h4>
    <p>${coaches_obj[key].certificate}</p></div>`;
  const careerNode = `<div class="coaches__career">
  <h4>경력</h4>
  <p>${coaches_obj[key].career}</p></div>`;

  const node = `<div class="item">${titleNode}${imgNode}${nameNode}${informNode}${skillNode}${careerNode}</div>`;

  key_name.innerHTML = node;
});

// override title
