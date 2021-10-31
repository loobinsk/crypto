// lazy IMG

[].forEach.call(document.querySelectorAll('img[data-src]'),    function(img) {
  img.setAttribute('src', img.getAttribute('data-src'));
  img.onload = function() {
    img.removeAttribute('data-src');
  };
});

// lazy IMG



// Wow JS

if(document.querySelector('.wow'))
	new WOW().init();

// Wow JS


function myFunction() {
  /* Get the text field */
  var copyText = document.querySelector(".file-text_copy");

  /* Select the text field */
  copyText.select();

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}

let bellClick = document.querySelector('.header__bell');
let dotsClick = document.querySelector('.persone__dots');
let asideBlock = document.querySelector('.aside');
let bodyBlock = document.querySelector('body');
let asideClose = document.querySelector('.aside__close');

let burgerOpen = document.querySelector('.header__burger');
let burgerClose = document.querySelector('.menu__mob .close');
let menuMob = document.querySelector('.menu__mob');
let openMenu = document.querySelector('.open_menu');
let menuPerson = document.querySelector('.header__info')

let questionsItem = document.querySelector('.questions__item');
let newsBlock1 = document.querySelector('.main-news__block1');
let articleItem = document.querySelector('.article__item');
let newsBlock2 = document.querySelector('.main-news__block2');
let newsDots = document.querySelectorAll('.questions__item .item__dots');
let newsNewButton = document.querySelector('.view-new-q');
let newsNewItem = document.querySelectorAll('.questions__item_new');
let viewNewQ = document.querySelector('.view-new-q');

let selectAll = document.querySelectorAll('.select');

let dialogsItem = document.querySelectorAll('.dialogs__item');
let dialogsItemActive = document.querySelectorAll('.dialogs__item.dialogs__item_active');
let messageDialog = document.querySelectorAll('.main-message__dialog');

if( document.querySelector('.input__files') ){
	document.querySelector('.input__files input').onchange = function () {
		let base = this.value; // Сохраненные файлы тут!!!!
		let name = this.value.split("\\")[2];
		this.closest('.item__input').querySelector('.file-text span').innerHTML = name;
	}
}

if( document.querySelectorAll('input') ){

	

	document.querySelectorAll('input').forEach((input) => {
		if( input.getAttribute('maxlength') ){
			input.addEventListener('keyup', function () {
				this.closest('.input_max').querySelector('span').innerHTML = input.getAttribute('maxlength') - this.value.length
			})
		}
	})
}

if( document.querySelectorAll('button') ){
	document.querySelectorAll('button').forEach((button) => {
		if( button.getAttribute('data-popup') ){
			button.onclick = function (e) {
				e.preventDefault();
				document.querySelectorAll('.popup').forEach((popup) => {
					if( popup.classList.contains(this.getAttribute('data-popup')) ){
						popup.classList.add('popup_open')
					}
				})
			}
		}
	})
	document.querySelectorAll('.popup__bgd').forEach((bgd) => {
		bgd.onclick = function (e) {
			e.preventDefault();
			this.closest('.popup').classList.remove('popup_open')
		}
	})
	document.querySelectorAll('.content__head svg').forEach((svg) => {
		svg.onclick = function (e) {
			e.preventDefault();
			this.closest('.popup').classList.remove('popup_open')
		}
	})
	document.querySelectorAll('.popup .popup__close').forEach((close) => {
		close.onclick = function (e) {
			e.preventDefault();
			this.closest('.popup').classList.remove('popup_open')
		}
	})
}

if( document.querySelector('.select__head') ){
	selectAll.forEach((item) => {

		const button = item.querySelector('.select__head') // находим кнопку для открытия/закрытия окна навигации
		const nav = item // находим окно навигации

		window.addEventListener('click', e => { // при клике в любом месте окна браузера
		  const target = e.target // находим элемент, на котором был клик
		  if (!target.closest('.select') && !target.closest('.select__head')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
		    item.closest('.select').classList.remove('select_open') // то закрываем окно навигации, удаляя активный класс
		  }
		})


		if( item.querySelector('.select__head') ){
			item.querySelector('.select__head').onclick = function () {
				selectAll.forEach((item2) => {
					// item2.classList.remove('select_open')
				})
				this.closest('.select').classList.toggle('select_open')
			}
			item.querySelectorAll('li').forEach((liItem) => {
				liItem.onclick = function () {
					item.querySelector('span').innerHTML = this.innerHTML
					
				}
			})
		}
	})
}



if( bodyBlock.classList.contains('create-course') ){	

	document.querySelectorAll('input').forEach((input) => {
		if( input.getAttribute('maxlength') ){
			input.addEventListener('keyup', function () {
				this.closest('.input_max').querySelector('span').innerHTML = input.getAttribute('maxlength') - this.value.length
			})
		}
	})

	let numTest = 0;
	let lineWidth = 25;
	document.querySelectorAll('.create-course__item .next-step').forEach((next) => {
		next.onclick = function (e) {
			e.preventDefault();
			numTest += 1;
			lineWidth += 25;
			document.querySelector('.header-course__steps').innerHTML = `Шаг ${numTest+1} из 4`;
			document.querySelector('.header-line__progress').style.width = lineWidth+'%';
			this.closest('.create-course__item_active').classList.remove('create-course__item_active')
			document.querySelectorAll('.create-course__item').forEach((item, itemNum) => {
				if( numTest == itemNum ){
					item.classList.add('create-course__item_active')
				}
			})
		}
	})
	document.querySelectorAll('.create-course__item .prev-step').forEach((next) => {
		next.onclick = function (e) {
			e.preventDefault();
			numTest -= 1;
			lineWidth -= 25;
			document.querySelector('.header-course__steps').innerHTML = `Шаг ${numTest+1} из 4`;
			document.querySelector('.header-line__progress').style.width = lineWidth+'%';
			this.closest('.create-course__item_active').classList.remove('create-course__item_active')
			document.querySelectorAll('.create-course__item').forEach((item, itemNum) => {
				if( numTest == itemNum ){
					item.classList.add('create-course__item_active')
				}
			})
		}
	})






}
else if( bodyBlock.classList.contains('planning-course') ){





	let lengthPoint = document.querySelectorAll('.aside__point').length

	document.querySelector('.create-chapter').onclick = function () {
		document.querySelector('.chapter-block').classList.add('chapter-block_active')
		this.remove()
	}

	document.querySelector('.created__center').onclick = function () {
		document.querySelector('.created__lecture').classList.add('created__lecture_active')
		this.remove()
	}

	document.querySelectorAll('.body__top li').forEach((li, liNum) => {
		li.onclick = function () {
			document.querySelectorAll('.body__top li').forEach((li1) => {
				li1.classList.remove('li_active')
			})
			this.classList.add('li_active')
			document.querySelectorAll('.popup .inner__item').forEach((item, itemNum) => {
				item.classList.remove('inner__item_active')
				if( itemNum == liNum ){
					item.classList.add('inner__item_active')
				}
			})
		}
	})

	


	document.querySelector('.created__lecture .lecture__save').onclick = function () {

		let titleName = this.closest('.created__lecture').querySelector('.lecture__input_title input').value
		document.querySelector('.created__lecture').innerHTML = `
			<div class="lecture__block">
        <div class="block__top">
          <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.886 0H7.9146C9.768 0 10.8 1.068 10.8 2.898V9.096C10.8 10.956 9.768 12 7.9146 12H2.886C1.062 12 0 10.956 0 9.096V2.898C0 1.068 1.062 0 2.886 0ZM3.04838 2.79146V2.78546H4.84178C5.10038 2.78546 5.31038 2.99546 5.31038 3.25286C5.31038 3.51746 5.10038 3.72746 4.84178 3.72746H3.04838C2.78978 3.72746 2.58038 3.51746 2.58038 3.25946C2.58038 3.00146 2.78978 2.79146 3.04838 2.79146ZM3.04838 6.4372H7.75238C8.01038 6.4372 8.22038 6.2272 8.22038 5.9692C8.22038 5.7112 8.01038 5.5006 7.75238 5.5006H3.04838C2.78978 5.5006 2.58038 5.7112 2.58038 5.9692C2.58038 6.2272 2.78978 6.4372 3.04838 6.4372ZM3.04829 9.18299H7.75229C7.99169 9.15899 8.17229 8.95439 8.17229 8.71498C8.17229 8.46898 7.99169 8.26499 7.75229 8.24098H3.04829C2.86829 8.22299 2.69429 8.30698 2.59829 8.46299C2.50229 8.61299 2.50229 8.81099 2.59829 8.96699C2.69429 9.11699 2.86829 9.20699 3.04829 9.18299Z" fill="white"></path>
          </svg>
          <div class="lecture__title">${titleName}</div>
          <div class="lecture__edit">
            <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.2">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.60518 12.2979L10.9509 4.09171C11.2958 3.64918 11.4184 3.13755 11.3034 2.6166C11.2038 2.14302 10.9126 1.69272 10.4757 1.35112L9.41045 0.504879C8.48312 -0.232672 7.33353 -0.155035 6.67443 0.691208L5.96169 1.61586C5.86972 1.73154 5.89271 1.90234 6.00767 1.99551C6.00767 1.99551 7.80869 3.43956 7.84701 3.47061C7.96964 3.58707 8.0616 3.74234 8.08459 3.92867C8.12291 4.29356 7.87 4.63516 7.49447 4.68175C7.3182 4.70504 7.1496 4.65069 7.02697 4.54976L5.13399 3.04361C5.04202 2.97451 4.90407 2.98926 4.82743 3.08243L0.328711 8.9052C0.0374822 9.27009 -0.0621487 9.74367 0.0374822 10.2017L0.612276 12.6939C0.642932 12.8259 0.75789 12.919 0.895841 12.919L3.42493 12.888C3.88477 12.8802 4.31395 12.6706 4.60518 12.2979ZM8.14578 11.5231H12.2697C12.6721 11.5231 12.9993 11.8546 12.9993 12.2622C12.9993 12.6706 12.6721 13.0013 12.2697 13.0013H8.14578C7.74343 13.0013 7.41618 12.6706 7.41618 12.2622C7.41618 11.8546 7.74343 11.5231 8.14578 11.5231Z" fill="white"></path>
              </g>
            </svg>
          </div>
          <div class="lecture__content select">
            <div class="select__head">+ Содержимое</div>
            <div class="select__body">
              <button class="button-description">Описание</button>
              <button data-popup="popup__resourses">Ресурсы</button>
            </div>
          </div>
          <div class="lecture__delete">
            <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.2">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.238 2.10819C11.4909 2.10819 11.7014 2.31816 11.7014 2.58534V2.83237C11.7014 3.09305 11.4909 3.30952 11.238 3.30952H0.464062C0.210535 3.30952 0 3.09305 0 2.83237V2.58534C0 2.31816 0.210535 2.10819 0.464062 2.10819H2.35951C2.74454 2.10819 3.07963 1.83451 3.16624 1.44836L3.2655 1.00501C3.41977 0.401095 3.92746 0 4.50848 0H7.19296C7.76766 0 8.28104 0.401095 8.42961 0.97316L8.53583 1.44771C8.62181 1.83451 8.9569 2.10819 9.34256 2.10819H11.238ZM10.2742 11.1361C10.472 9.2918 10.8185 4.91031 10.8185 4.8661C10.8312 4.73219 10.7875 4.60542 10.7009 4.50336C10.608 4.4078 10.4904 4.35124 10.3608 4.35124H1.34381C1.21357 4.35124 1.08965 4.4078 1.00366 4.50336C0.916415 4.60542 0.873422 4.73219 0.879745 4.8661C0.880907 4.87423 0.893339 5.02856 0.914123 5.28659C1.00645 6.43283 1.26362 9.62537 1.42979 11.1361C1.54739 12.249 2.27762 12.9485 3.33535 12.9738C4.15157 12.9927 4.99245 12.9992 5.85229 12.9992C6.66218 12.9992 7.48472 12.9927 8.32623 12.9738C9.42063 12.955 10.1502 12.2678 10.2742 11.1361Z" fill="white"></path>
              </g>
            </svg>
          </div>
        </div>
        <div class="block__bottom">
          <label>
            <div class="lecture__input lecture__input_title input_max">
              <input type="text" maxlength="100" placeholder="Название раздела"><span>100</span>
            </div>
          </label>
          <p>Описание лекции</p>
          <label>
            <div class="lecture__input lecture__input_title">
              <input type="text" placeholder="Название раздела">
            </div>
          </label>
          <button class="materials__downloading" data-popup="popup__materials">+ Материалы для скачивания</button>
          <div class="lecture__buttons">
            <div class="lecture__cancel">Отменить</div>
            <div class="lecture__save">Сохранить</div>
          </div>
        </div>
      </div>
		`
     this.remove();
     document.querySelector('.lecture__content .select__head').onclick = function () {
			this.closest('.select').classList.toggle('select_open')
			document.querySelectorAll('label').forEach((lbl) => {
				lbl.querySelector('input').onchange = function () {
					let base = this.value; // Сохраненные файлы тут!!!!


					let name = this.value.split("\\")[2];
					let size = event.target.files[0].size;

					if(size > 1000000){
						size = `${(event.target.files[0].size/1000000).toFixed(2)} мб`
					}else{
						size = `${Math.ceil(event.target.files[0].size/1000)} кб`
					}

					this.closest('label').querySelector('.file-text').innerHTML = name;

				}
			})
		}

		document.querySelectorAll('.body__top li').forEach((li, liNum) => {
			li.onclick = function () {

				document.querySelectorAll('.body__top li').forEach((li1) => {
					li1.classList.remove('li_active')
				})
				this.classList.add('li_active')
				document.querySelectorAll('.popup .inner__item').forEach((item, itemNum) => {
					item.classList.remove('inner__item_active')
					if( itemNum == liNum ){
						item.classList.add('inner__item_active')
					}
				})
			}
		})
		document.querySelectorAll('button').forEach((button) => {
			if( button.getAttribute('data-popup') ){
				button.onclick = function (e) {

					e.preventDefault();
					document.querySelectorAll('.popup').forEach((popup) => {
						if( popup.classList.contains(this.getAttribute('data-popup')) ){
							popup.classList.add('popup_open')
						}
					})
				}
			}
		})
		function descriptionblcok() {
			document.querySelector('.button-description').onclick = function (e) {
				e.preventDefault();
				this.closest('.lecture__block').querySelector('.block__bottom').classList.add('block__bottom_active')
				this.closest('.lecture__block').classList.add('lecture__block_descr')
			}
		}

		descriptionblcok()
	}

	document.querySelectorAll('.find-input').forEach((find) => {
		find.querySelector('button').onclick = function (e) {
			e.preventDefault();
			let inpVal = this.closest('.find-input').querySelector('input').value
			if( !inpVal ){
				this.closest('.find-input').querySelector('input').classList.add('inp-empty')
				this.closest('.find-input').querySelector('input').focus();
			}else{
				this.closest('.find-input').querySelector('.find-input__body').innerHTML += `
					<div class="find-input__item"><b>${inpVal}</b>
	          <div class="item__delete">
		          <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			          <g opacity="0.2">
				          <path fill-rule="evenodd" clip-rule="evenodd" 
				          d="M13.8316 2.59474C14.1429 2.59474 14.402 2.85317 14.402 3.18201V3.48605C14.402 
				          3.80689 14.1429 4.07333 13.8316 4.07333H0.571163C0.259124 4.07333 0 3.80689 0 3.48605V3.18201C0 
				          2.85317 0.259124 2.59474 0.571163 2.59474H2.90406C3.37795 2.59474 3.79037 2.25789 3.89698 1.78263L4.01915 
				          1.23696C4.20902 0.493664 4.83387 0 5.54899 0H8.85302C9.56036 0 10.1922 0.493664 10.3751 1.19776L10.5058 
				          1.78183C10.6116 2.25789 11.0241 2.59474 11.4987 2.59474H13.8316ZM12.6463 13.7057C12.8898 11.4358 13.3162 
				          6.04314 13.3162 5.98873C13.3318 5.82391 13.2781 5.66789 13.1715 5.54227C13.0571 5.42465 12.9124 5.35505 
				          12.7529 5.35505H1.65488C1.49458 5.35505 1.34206 5.42465 1.23623 5.54227C1.12885 5.66789 1.07593 5.82391 
				          1.08371 5.98873C1.08514 5.99872 1.10044 6.18868 1.12603 6.50626C1.23967 7.91705 1.55618 11.8464 1.7607 
				          13.7057C1.90544 15.0755 2.80421 15.9364 4.10605 15.9676C5.11064 15.9908 6.14559 15.9988 7.20387 15.9988C8.20068 
				          15.9988 9.21306 15.9908 10.2488 15.9676C11.5958 15.9444 12.4937 15.0987 12.6463 13.7057Z" fill="white">
				          </path>
			          </g>
		          </svg>
	          </div>
	        </div>
				`
				this.closest('.find-input').querySelector('input').value = '';
			}
			find.querySelectorAll('.item__delete').forEach((deleteItem) => {
				deleteItem.onclick = function () {
					this.closest('.find-input__item').remove()
				}
			})
		}
		find.querySelector('input').addEventListener('keyup', function () {
			this.closest('.find-input').querySelector('input').classList.remove('inp-empty')
		})
	})

	document.querySelectorAll('.aside__point').forEach((point, pointNum) => {


		point.onclick = function () {

			if( pointNum + 1 == lengthPoint ){
				document.querySelector('.planning-course__aside').classList.add('planning-course__aside_complete')
				document.querySelector('.aside__button').removeAttribute('disabled')
			}
			else{
				document.querySelector('.planning-course__aside').classList.remove('planning-course__aside_complete')
				document.querySelector('.aside__button').setAttribute('disabled', 'disabled')
			}

			let itemNumCount = pointNum
			document.querySelectorAll('.planning-course__item').forEach((item2, item2Num) => {
				item2.classList.remove('planning-course__item_active')
				if( itemNumCount == item2Num ){
					item2.classList.add('planning-course__item_active')
				}
			})
			document.querySelectorAll('.aside__point').forEach((point, pointNum) => {
				point.classList.remove('aside__point_active')
				point.classList.remove('aside__point_completed')
				if( pointNum == itemNumCount ){
					point.classList.add('aside__point_active')
				}
				if( pointNum < itemNumCount ){
					point.classList.add('aside__point_completed')
				}
			})
		}
	})


	document.querySelectorAll('.planning-course__item').forEach((item, itemNum) => {

		item.querySelector('.next-plan').onclick = function (e) {
			e.preventDefault();


			let itemNumCount = itemNum + 1
			this.closest('.planning-course__item')
			window.scrollTo(0, 0)

			document.querySelectorAll('.planning-course__item').forEach((item2, item2Num) => {
				item2.classList.remove('planning-course__item_active')
				if( itemNumCount == item2Num ){
					item2.classList.add('planning-course__item_active')
				}
			})

			document.querySelectorAll('.aside__point').forEach((point, pointNum) => {

				if( itemNum + 2 == lengthPoint ){
					document.querySelector('.planning-course__aside').classList.add('planning-course__aside_complete')
					document.querySelector('.aside__button').removeAttribute('disabled')
				}
				else{
					document.querySelector('.planning-course__aside').classList.remove('planning-course__aside_complete')
					document.querySelector('.aside__button').setAttribute('disabled', 'disabled')
				}


				if( pointNum == itemNumCount ){
					point.classList.add('aside__point_active')
				}
				if( pointNum < itemNumCount ){
					point.classList.add('aside__point_completed')
				}
			})
		}
		item.querySelector('.prev-plan').onclick = function (e) {
			e.preventDefault();

			let itemNumCount = itemNum - 1
			this.closest('.planning-course__item')
			window.scrollTo(0, 0)

			document.querySelectorAll('.planning-course__item').forEach((item2, item2Num) => {
				item2.classList.remove('planning-course__item_active')
				if( itemNumCount == item2Num ){
					item2.classList.add('planning-course__item_active')
				}
			})

			document.querySelectorAll('.aside__point').forEach((point, pointNum) => {

				if( itemNum == lengthPoint ){
					document.querySelector('.planning-course__aside').classList.add('planning-course__aside_complete')
					document.querySelector('.aside__button').removeAttribute('disabled')
				}
				else{
					document.querySelector('.planning-course__aside').classList.remove('planning-course__aside_complete')
					document.querySelector('.aside__button').setAttribute('disabled', 'disabled')
				}

				point.classList.remove('aside__point_active')
				if( pointNum == itemNumCount ){
					point.classList.remove('aside__point_completed')
					point.classList.add('aside__point_active')
				}
				if( pointNum < itemNumCount ){
					point.classList.add('aside__point_completed')
				}
			})
		}
	})



}
else{



	bellClick.onclick = function() {
		this.closest('.header__bell').classList.toggle('header__bell_active')
	}
	dotsClick.onclick = function() {
		document.querySelector('.persone__menu').classList.toggle('persone__menu_active')
	}

	burgerOpen.onclick = function() {
		menuMob.classList.add('menu__mob_open')
		menuPerson.classList.add('header__info_open')
		document.querySelector('.header__cash').classList.add('header__cash_open')
		asideBlock.classList.add('aside_open')
	}

	asideClose.onclick = function() {
		menuMob.classList.remove('menu__mob_open')
		menuPerson.classList.remove('header__info_open')
		document.querySelector('.header__cash').classList.remove('header__cash_open')
		asideBlock.classList.remove('aside_open')
	}

	if( bodyBlock.clientWidth > 992 ){
		asideBlock.onmouseover = function () {
			this.classList.add('aside_open')
			bodyBlock.classList.add('aside_hover')
		}
		asideBlock.onmouseleave = function () {
			this.classList.remove('aside_open')
			bodyBlock.classList.remove('aside_hover')
		}
	}

	if(newsBlock1){
		if( questionsItem ){
			newsBlock1.classList.add('main-news__block1_full')
		}else{
			newsBlock1.classList.remove('main-news__block1_full')
		}
		if( articleItem ){
			newsBlock2.classList.add('main-news__block2_full')
		}else{
			newsBlock2.classList.remove('main-news__block2_full')
		}
	}



	newsDots.forEach((item) => {
		item.onclick = function () {
			newsDots.forEach((item2) => {
				item2.querySelector('.item__menu').classList.remove('item__menu_open')
			})
			this.querySelector('.item__menu').classList.toggle('item__menu_open')
		}
		const button = item // находим кнопку для открытия/закрытия окна навигации
		const nav = item.querySelector('.item__menu') // находим окно навигации
		window.addEventListener('click', e => { // при клике в любом месте окна браузера
		  const target = e.target // находим элемент, на котором был клик
		  if (!target.closest('.item__menu') && !target.closest('.item__dots')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
		    nav.classList.remove('item__menu_open') // то закрываем окно навигации, удаляя активный класс
		  }
		})
	})

	if(newsNewButton){
	}

	document.querySelectorAll('.questions__block .questions__item').forEach((item, n) => {
		if( n > 9){
			item.classList.add('questions__item_new')
			viewNewQ.querySelector('span').innerHTML = n - 9;
		}
		newsNewButton.onclick = function () {
			this.hidden = true;
			document.querySelectorAll('.questions__block .questions__item').forEach((item2) => {
				item2.classList.remove('questions__item_new')
			})
		}
	})

	document.querySelector('.header__favorite').onclick = function () {
		this.classList.toggle('header__favorite_active')
	}


	let j = 0;
	dialogsItemActive.forEach((diItem) => {
		for(j; j < dialogsItemActive.length; j++){
			messageDialog[j].classList.add('main-message__dialog_active')
		}
	})

	document.querySelectorAll('.message-notice').forEach((item) => {
		if( item.innerHTML < 1 ){
			item.classList.add('message-notice_zero')
		}
	})

	document.querySelectorAll('.super-emoji').forEach((smile) => {
		smile.querySelector('span').onclick = function () {
			this.closest('.text-message').querySelector('input').value += this.innerHTML;
			this.closest('.smiles').querySelector('.super-emojis').classList.remove('smiles__block_open')
		}
	})

	document.querySelectorAll('.smiles').forEach((smileBlock) => {
		smileBlock.querySelector('.smiles__head').onclick = function(){
			this.closest('.smiles').querySelector('.super-emojis').classList.toggle('smiles__block_open')
		}
	})

	if( document.querySelector('.main-message__top .top__close') ){
		document.querySelector('.main-message__top .top__close').onclick = function () {
			this.closest('.rht').classList.add('rht_hidden')
		}
	}


	if( document.querySelector('.main-message__block') ){

		let mainDialog = document.querySelector('.main-message__block').querySelectorAll('.main-message__dialog');

		document.querySelectorAll('.main-message__dialog').forEach((item) => {
			item.classList.add('main-message__dialog_active')
		})
		setTimeout(function () {
			document.querySelectorAll('.main-message__dialog').forEach((item) => {
				item.classList.remove('main-message__dialog_active')
			})
		}, 1)
		document.querySelector('.main-message__block').querySelectorAll('.main-message__dialog_active').forEach((mess, messNum) => {
			mess.querySelector('.dialog__block').scrollTop = mess.querySelector('.dialog__block').scrollHeight
		})
		setTimeout(function () {
			document.querySelectorAll('.main-message__dialog').forEach((item, itemNum) => {
				if( itemNum == 0 ){
					item.classList.add('main-message__dialog_active')
				}
			})
		}, 2)
	}



	dialogsItem.forEach((diItem, y) => {


		var itm;
		
		diItem.onclick = function () {

			

			this.closest('.sides').querySelector('.rht').classList.remove('rht_hidden')

			dialogsItem.forEach((diItem1, u) => {
				if(diItem1.classList.contains('dialogs__item_active')){
					
					diItem1.classList.remove('dialogs__item_active')
				}
			})

			this.classList.add('dialogs__item_active')



			dialogsItemActive.forEach((diItem) => {
				for(let j = 0; j < messageDialog.length; j++){
					messageDialog[j].classList.remove('main-message__dialog_active')
				}
			})
			messageDialog[y].classList.add('main-message__dialog_active')
		}


	})


	messageDialog.forEach((file) => {

		file.querySelector('input').onchange = function (e) {


			let base = this.value; // Сохраненные файлы тут!!!!


			let name = this.value.split("\\")[2];
			let size = event.target.files[0].size;

			if(size > 1000000){
				size = `${(event.target.files[0].size/1000000).toFixed(2)} мб`
			}else{
				size = `${Math.ceil(event.target.files[0].size/1000)} кб`
			}

			this.closest('.file').querySelector('input').closest('.main-message__dialog_active').childNodes[5].innerHTML += `<div class="files__item"><div class="item__lft"><div class="item__name">${name}</div><div class="item__size">${size}</div></div><div class="item__delete"><svg class="svg-icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M256 810.666667c-12.8 0-21.333333-4.266667-29.866667-12.8-17.066667-17.066667-17.066667-42.666667 0-59.733334l512-512c17.066667-17.066667 42.666667-17.066667 59.733334 0s17.066667 42.666667 0 59.733334l-512 512c-8.533333 8.533333-17.066667 12.8-29.866667 12.8z"></path><path d="M768 810.666667c-12.8 0-21.333333-4.266667-29.866667-12.8l-512-512c-17.066667-17.066667-17.066667-42.666667 0-59.733334s42.666667-17.066667 59.733334 0l512 512c17.066667 17.066667 17.066667 42.666667 0 59.733334-8.533333 8.533333-17.066667 12.8-29.866667 12.8z"></path></svg></div></div>`;

	     file.closest('.main-message__dialog_active').querySelectorAll('.item__delete').forEach((del) => {
	     	del.onclick = function () {
	     		this.closest('.files__item').remove()
	     	}
	     })
			this.value = '';
		}


	})


	if( document.querySelector('.main-message__top .top__dots') ){
		document.querySelector('.main-message__top .top__dots').onclick = function () {
			this.querySelector('ul').classList.toggle('ul_open')
		}
	}

	if( document.querySelector('.select__head') ){
		document.querySelector('.select__head').onclick = function () {
			this.closest('.select').classList.toggle('select_open')
		}
	}

	if( document.querySelector('.load-file') ){
		document.querySelector('.load-file input').onchange = function () {
			this.closest('.load-file').querySelector('.file-name').innerHTML = this.value.split("\\")[2]
		}
	}

	document.querySelectorAll('.lft__item').forEach((item, w) => {
		item.onclick = function () {
			this.closest('.block__lft').querySelectorAll('.lft__item').forEach((item2) => {
				item2.classList.remove('lft__item_active')
			})
			document.querySelectorAll('.main-statistics__block .block__center').forEach((ctr, r) => {
				ctr.classList.remove('block__center_active')
				if( w == r ){
					ctr.classList.add('block__center_active')
				}
			})
			this.classList.add('lft__item_active')
		}
	})

	document.querySelectorAll('.main-statistics__block .lft__item_active').forEach((item, w) => {
			document.querySelectorAll('.main-statistics__block .block__center').forEach((ctr, r) => {
			ctr.classList.remove('block__center_active')
			if( w == r ){
				ctr.classList.add('block__center_active')
			}
		})
	})

	document.querySelectorAll('.main-statistics__top li, .main-settings__top li').forEach((item) => {
		item.onclick = function () {
			this.closest('.main-statistics__top, .main-settings__top').querySelectorAll('li').forEach((item2) => {
				item2.classList.remove('li_active')
			})
			this.classList.add('li_active')
		}
	})


	if( document.querySelector('.top__export') ){
		document.querySelector('.top__export').onclick = function (e) {
			e.preventDefault();
			document.querySelector('.main-statistics-reviews__popup').classList.add('popup_open')
		}
	}

	if( document.querySelector('.header__bell').classList.contains('header__bell') ){
		document.querySelectorAll('.questions__item').forEach((item) => {
			if( item.querySelector('.item__head') ){
				item.querySelector('.item__head').addEventListener("click", () => {
					item.classList.toggle('questions__item_active')
				});
			}
		})
	}

	if( document.querySelector('.main-statistics-reviews__warning') ){
		document.querySelector('.main-statistics-reviews__warning .close').onclick = function () {
			this.closest('.main-statistics-reviews__warning').classList.add('main-statistics-reviews__warning_close')
		}
	}

	if( document.querySelector('.pass-lab') ){
		document.querySelector('.pass-lab .ico').onclick = function () {
			document.querySelector('.popup.main-settings-profile__pass').classList.add('popup_open')
		}
	}

	if( document.querySelector('.mail-lab') ){
		document.querySelector('.mail-lab .ico').onclick = function () {
			document.querySelector('.popup.main-settings-profile__mail').classList.add('popup_open')
		}
	}


	if( document.querySelector('.main-profile__top') ){

		document.querySelectorAll('.main-profile__top li').forEach((item, itemNum) => {

			document.querySelectorAll('.main-profile__item').forEach((item2, item2Num) => {
				if( item2Num == 0 ){
					item2.classList.add('main-profile__item_active')
				}
			})
			item.onclick = function (e) {
				e.preventDefault();
				document.querySelectorAll('.main-profile__top li').forEach((item4, item4Num) => {
					item4.classList.remove('li_active')
				})
				this.classList.add('li_active')
				console.log(this)
				document.querySelectorAll('.main-profile__item').forEach((item3, item3Num) => {
					item3.classList.remove('main-profile__item_active')
					if( item3Num == itemNum ){
						item3.classList.add('main-profile__item_active')
					}
				})
			}
		})

	}
}




// document.querySelector('.top__button_bold').onclick = function () {
// 	this.classList.add('top__button_active')
// 	document.querySelector('.textarea-block__bottom textarea').addEventListener('keyup', function () {
// 		document.querySelector('.textarea-block__bottom .bottom__text').innerHTML += '<b>'+this.value+'</b>'
// 		this.value = '';
// 	})
// }
// if( document.querySelector('.top__button_bold').classList.contains('top__button_active') ){

// 	document.querySelector('.textarea-block__bottom textarea').addEventListener('keyup', function () {
// 		console.log('qq')
// 		document.querySelector('.textarea-block__bottom .bottom__text').innerHTML += this.value
// 		this.value = '';
// 	})
// }else{
// }












