"use strict";

let journals_obj = {
  a: {
    title: "왜 요가를 해야하는지",
    name: "갈코치",
    date: "2020.05.15",
    content:
      "늘 깨어서 바라보기 걸을때나, 회원들과 대화할때, 책을 볼때, 핸드폰을 볼때도 내 자세와 호홉을 바라보고 필요한 자세와 바른 호홉으로...객관적 관점에서 바라보듯 떨어져 바라보기 제일 힘든것은  인간관계속 내마음의 변화를 재빨리 알아차리고 떨어져서 생각하기 마음대로 할수 없는 것에 집착하지않고  그상황 그대로 놓아두고 내가 내의지로 할수있는것을 바라보고 내의 지로 제어하는것! 그것이 최선! 그래서 결국  저자가 말한것처럼 나중에는  요가가 필요없게 되는것이.. 모든시간 치우치지 않는 중심점을 찾아 요가를 시간내어하는 행위 자체가 필요없도록 되는것이 목적이라 생각한다. 혹여 동요가 일더라도 금새알아차려. (늘 혼돈과 동요속이지만 ) 바라보는 지금의 나와 그어느 공간속 어느 시간속의 내가 늘 한결같이 깨어있고  동요됨없이나 자체로 호흡 하는것! 그것이 내가 요가를 하는 이유이다.",

    recommend:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque architecto aliquam perspiciatis doloribus neque ipsa nulla,    obcaecati rem sunt dolor fugiat optio ad quasi assumenda eos    consectetur delectus maiores commodi.",
  },

  b: {
    title: "영국에서 온 편지",
    name: "정코치",
    date: "2020.07.20",
    content:
      "편지는 영국에서 최초로 시작되어 일년에 한 바퀴 돌면서 받는 사람에게행운을 주었고 지금은 당신에게로 옮겨진 이 편지는 4일 안에 당신 곁을 떠나야 합니다.이 편지를 포함해서 7통을 행운이 필요한 사람에게 보내 주셔야 합니다.복사를 해도 좋습니다. 혹 미신이라 하실지 모르지만 사실입니다.영국에서 HGXWCH이라는 사람은 1930년에 이 편지를 받았습니다. 그는 비서에게 복사해서 보내라고 했습니다.며칠 뒤에 복권이 당첨되어 20억을 받았습니다. 어떤 이는 이 편지를 받았으나96시간 이내 자신의 손에서 떠나야 한다는 사실을 잊었습니다. 그는 곧 사직되었습니다.나중에야 이 사실을 알고 7통의 편지를 보냈는데 다시 좋은 직장을 얻었습니다.미국의 케네디 대통령은 이 편지를 받았지만 그냥 버렸습니다. 결국 9일 후 그는 암살 당했습니다.기억해 주세요. 이 편지를 보내면 7년의 행운이 있을 것이고 그렇지 않으면 3년의 불행이 있을 것입니다.그리고 이 편지를 버리거나 낙서를 해서는 절대로 안됩니다. 7통입니다.이 편지를 받은 사람은 행운이 깃들 것입니다. 힘들겠지만 좋은게 좋다고 생각하세요. 7년의 행운을 빌면서",

    recommend:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque architecto aliquam perspiciatis doloribus neque ipsa nulla,    obcaecati rem sunt dolor fugiat optio ad quasi assumenda eos    consectetur delectus maiores commodi.",
  },
};

// slider

var swiper = new Swiper(".journals_main", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// slider
const swiperSlides = document.querySelector(".swiper-slide");
let html = "";

Object.keys(journals_obj).forEach((key) => {
  const key_name = document.querySelector(`.swiper-slide[name=${key}]`);

  const titleNode = `<div class="journals__title">
  ${journals_obj[key].title}</div>`;

  const nameAndDateNode = `<div class="journals__info"><span class="journals__name">${journals_obj[key].name}</span><span class="journals__date">${journals_obj[key].date}</span></div>`;

  const contentNode = `<div class=journals__content><p>
  ${journals_obj[key].content}</p></div>`;

  const recommendNode = `<h4 class="journals__subtitle">그외 추천글</h4><div class=journals__recommned><p>
  ${journals_obj[key].recommend}</p></div>`;

  const node = `<div class="item">${titleNode}${nameAndDateNode}${contentNode}${recommendNode}</div>`;

  key_name.innerHTML = node;
});

// override title
