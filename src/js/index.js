const isWorking = document.querySelector('.is-working');
const currentCounter = document.querySelector('.counter-current');
const contentWrapper = document.querySelector('.content-wrapper');

let currentPage;

const addClassname = () => {
	const contentWrapperItems = Array.from(contentWrapper.children);
	contentWrapperItems.forEach(element => {
		if (Number(element.classList[1]) === currentPage) {
			element.classList.add('is-working');
			// previousElementSibling이 있는지 확인 후 있으면 제거하도록 지시
			if (element.previousElementSibling) {
				element.previousElementSibling.classList.remove('is-working');
			}
			// nextElementSibling 있는지 확인 후 있으면 제거하도록 지시
			if (element.nextElementSibling) {
				element.nextElementSibling.classList.remove('is-working');
			}
		}
	});
};

const onWheelEvent = e => {
	if (1 < Number(currentCounter.innerText) && Number(currentCounter.innerText) <= 10 && e.wheelDelta > 0) {
		currentPage = Number(currentCounter.innerText) - 1;
		currentCounter.innerText = currentPage;
	} else if (1 <= Number(currentCounter.innerText) && Number(currentCounter.innerText) < 10 && e.wheelDelta < 0) {
		currentPage = Number(currentCounter.innerText) + 1;
		currentCounter.innerText = currentPage;
	}
	addClassname();
};

const init = () => {
	window.addEventListener('wheel', onWheelEvent);
};

init();
