"use strict";

var isWorking = document.querySelector('.is-working');
var currentCounter = document.querySelector('.counter-current');
var contentWrapper = document.querySelector('.content-wrapper');
var currentPage;

var addClassname = function addClassname() {
  var contentWrapperItems = Array.from(contentWrapper.children);
  contentWrapperItems.forEach(function (element) {
    if (Number(element.classList[1]) === currentPage) {
      element.classList.add('is-working'); // previousElementSibling이 있는지 확인 후 있으면 제거하도록 지시

      if (element.previousElementSibling) {
        element.previousElementSibling.classList.remove('is-working');
      } // nextElementSibling 있는지 확인 후 있으면 제거하도록 지시


      if (element.nextElementSibling) {
        element.nextElementSibling.classList.remove('is-working');
      }
    }
  });
};

var onWheelEvent = function onWheelEvent(e) {
  if (1 < Number(currentCounter.innerText) && Number(currentCounter.innerText) <= 10 && e.wheelDelta > 0) {
    currentPage = Number(currentCounter.innerText) - 1;
    currentCounter.innerText = currentPage;
  } else if (1 <= Number(currentCounter.innerText) && Number(currentCounter.innerText) < 10 && e.wheelDelta < 0) {
    currentPage = Number(currentCounter.innerText) + 1;
    currentCounter.innerText = currentPage;
  }

  addClassname();
};

var init = function init() {
  window.addEventListener('wheel', onWheelEvent);
};

init();