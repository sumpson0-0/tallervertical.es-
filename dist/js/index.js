"use strict";

var isWorking = document.querySelector('.is-working');
var currentCounter = document.querySelector('.counter-current');
var contentWrapper = document.querySelector('.content-wrapper');
var nowScroll = window.scrollY;
var currentPage;

var giveClassname = function giveClassname() {
  var contentWrapperChildren = Array.from(contentWrapper.children);
  contentWrapperChildren.forEach(function (element) {
    var elementClassName = element.classList; // classList[1]의 element를 가져오게 만들면 될 듯..

    if (Number.parseInt(elementClassName[1]) === currentPage) {// console.log(element);
    }
  });
};

var onWheelEvent = function onWheelEvent(e) {
  console.log(e.isTrusted, nowScroll);
};

var scrollEvent = function scrollEvent(e) {
  nowScroll = e.path[1].scrollY;
  init(); // 스크롤 하면 그 때 마다 init 재실행되서 init에 있는 함수 다시 실행됨. 주의.
};

var init = function init() {
  if (nowScroll >= 0 && 100 > nowScroll) {
    currentCounter.innerText = 1;
    currentPage = 1; // 문제 스크롤이 진행되는 내내 page가 업데이트 됨 (11)1 이런식..?
  }

  if (nowScroll >= 100 && 200 > nowScroll) {
    currentCounter.innerText = 2;
    currentPage = 2;
  }

  if (nowScroll >= 200 && 300 > nowScroll) {
    currentCounter.innerText = 3;
    currentPage = 3;
  }

  if (nowScroll >= 300 && 400 > nowScroll) {
    currentCounter.innerText = 4;
    currentPage = 4;
  }

  if (nowScroll >= 400 && 500 > nowScroll) {
    currentCounter.innerText = 5;
    currentPage = 5;
  }

  if (nowScroll >= 500 && 600 > nowScroll) {
    currentCounter.innerText = 6;
    currentPage = 6;
  }

  if (nowScroll >= 600 && 700 > nowScroll) {
    currentCounter.innerText = 7;
    currentPage = 7;
  }

  if (nowScroll >= 700 && 800 > nowScroll) {
    currentCounter.innerText = 8;
    currentPage = 8;
  }

  if (nowScroll >= 800 && 900 > nowScroll) {
    currentCounter.innerText = 9;
    currentPage = 9;
  }

  if (nowScroll >= 900 && 998 >= nowScroll) {
    currentCounter.innerText = 10;
    currentPage = 10;
  }

  window.addEventListener('scroll', scrollEvent);
  window.addEventListener('wheel', onWheelEvent);
  giveClassname();
};

init();