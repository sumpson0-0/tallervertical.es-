const contentWrapper = document.querySelector('.content-wrapper');
const pageCounter = document.querySelector('.content__page-counter');
const currentCounter = document.querySelector('.counter-current');
const bg = document.querySelector('.bg');
const slogan = document.querySelector('.slogan-back');

// workingContent
const workingContent = document.querySelector('.is-working');
const workingTitle = workingContent.querySelector('.content__title');
const workingImgWrapper = workingContent.querySelector('.content__img-wrapper');
const workingImg = workingContent.querySelector('.content__img');
const workingInfoWrapper = workingContent.querySelector('.content__info-wrapper');

// nextContent
const nextContent = workingContent.nextElementSibling;
const nextTitle = nextContent.querySelector('.content__title');
const nextImgWrapper = nextContent.querySelector('.content__img-wrapper');
const nextImg = nextContent.querySelector('.content__img');
const nextInfoWrapper = nextContent.querySelector('.content__info-wrapper');

// previousContent
const previousContent = workingContent.previousElementSibling ? workingContent.previousElementSibling : workingContent;
const previousTitle = previousContent.querySelector('.content__title');
const previousImgWrapper = previousContent.querySelector('.content__img-wrapper');
const previousImg = previousContent.querySelector('.content__img');
const previousInfoWrapper = previousContent.querySelector('.content__info-wrapper');
// 휠을 올리든 내리든 다 next로 저장하네..

let currentPage;

const onMove = () => {
	workingTitle.style.transform = 'translateY(100%)';
	workingInfoWrapper.style.transform = 'translateY(100%)';
	bg.style.transform = 'translateY(-1.5rem)';
	slogan.style.transform = 'translateY(2rem)';
	workingImgWrapper.style.transform = 'translateY(-50rem)';
	pageCounter.style.transform = 'translateY(2rem)';
	pageCounter.addEventListener('transitionstart', () => {
		currentCounter.innerText = currentPage;
	});
	pageCounter.addEventListener('transitionend', () => {
		const contents = Array.from(contentWrapper.children);
		contents.forEach(element => {
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
	});
};

const onWheelEvent = e => {
	if (1 < Number(currentCounter.innerText) && Number(currentCounter.innerText) <= 10 && e.wheelDelta > 0) {
		currentPage = Number(currentCounter.innerText) - 1;
	} else if (1 <= Number(currentCounter.innerText) && Number(currentCounter.innerText) < 10 && e.wheelDelta < 0) {
		currentPage = Number(currentCounter.innerText) + 1;
		workingImg.style.transform = 'scale(0.85, 0.85)';
		// 여기가 진행이 안되니 onMove 역시 실행이 안되고 다음 페이지로 더이상 넘어가지 않음
		// 그리고 애초에 is-working이 되면 밑에서 올라와야 하는데 flex center 되어잇는 것
		// 역시 잘못 된 것 같다.
		// is-working에 적용하는게 맞는가 아니면
		// is-working을 부모로 가진 오소를 지정해서 스타일을 달리하느냐.

		// 어떻게 이전걸 위로 올리고 다음걸 밑에서 올라오게 했을까..부터 다시 생각.
		workingImg.addEventListener('transitionend', onMove());
	}
};

const init = () => {
	window.addEventListener('wheel', onWheelEvent);
};

init();
