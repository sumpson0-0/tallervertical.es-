const isWorking = document.querySelector('.is-working');
const currentValue = isWorking.lastElementChild.firstElementChild;
let nowScroll = window.scrollY;

const scrollEvent = e => {
	nowScroll = e.path[1].scrollY;
	init();
};

const init = () => {
	if (nowScroll >= 0 && 100 > nowScroll) {
		currentValue.innerText = 1;
	}
	if (nowScroll >= 100 && 200 > nowScroll) {
		currentValue.innerText = 2;
	}
	if (nowScroll >= 200 && 300 > nowScroll) {
		currentValue.innerText = 3;
	}
	if (nowScroll >= 300 && 400 > nowScroll) {
		currentValue.innerText = 4;
	}
	if (nowScroll >= 400 && 500 > nowScroll) {
		currentValue.innerText = 5;
	}
	if (nowScroll >= 500 && 600 > nowScroll) {
		currentValue.innerText = 6;
	}
	if (nowScroll >= 600 && 700 > nowScroll) {
		currentValue.innerText = 7;
	}
	if (nowScroll >= 700 && 800 > nowScroll) {
		currentValue.innerText = 8;
	}
	if (nowScroll >= 800 && 900 > nowScroll) {
		currentValue.innerText = 9;
	}
	if (nowScroll >= 900 && 1000 >= nowScroll) {
		currentValue.innerText = 10;
	}
	window.addEventListener('scroll', scrollEvent);
};

init();
