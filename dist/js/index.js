"use strict";

var isWorking = document.querySelector('.is-working');
var contentWrapper = document.querySelector('.content-wrapper');
var currentCounter = document.querySelector('.counter-current');
var nowScroll = window.scrollY;

var giveClassname = function giveClassname() {
  var contentWrapperChildren = contentWrapper.children;
  console.log(contentWrapperChildren);
};

var scrollEvent = function scrollEvent(e) {
  nowScroll = e.path[1].scrollY;
  init();
};

var init = function init() {
  if (nowScroll >= 0 && 100 > nowScroll) {
    currentCounter.innerText = 1;
  }

  if (nowScroll >= 100 && 200 > nowScroll) {
    currentCounter.innerText = 2;
  }

  if (nowScroll >= 200 && 300 > nowScroll) {
    currentCounter.innerText = 3;
  }

  if (nowScroll >= 300 && 400 > nowScroll) {
    currentCounter.innerText = 4;
  }

  if (nowScroll >= 400 && 500 > nowScroll) {
    currentCounter.innerText = 5;
  }

  if (nowScroll >= 500 && 600 > nowScroll) {
    currentCounter.innerText = 6;
  }

  if (nowScroll >= 600 && 700 > nowScroll) {
    currentCounter.innerText = 7;
  }

  if (nowScroll >= 700 && 800 > nowScroll) {
    currentCounter.innerText = 8;
  }

  if (nowScroll >= 800 && 900 > nowScroll) {
    currentCounter.innerText = 9;
  }

  if (nowScroll >= 900 && 1000 >= nowScroll) {
    currentCounter.innerText = 10;
  }

  window.addEventListener('scroll', scrollEvent);
  giveClassname();
};

init();