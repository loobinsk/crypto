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

bellClick.onclick = function() {
	this.closest('.header__bell').classList.toggle('header__bell_active')
}
dotsClick.onclick = function() {
	document.querySelector('.persone__menu').classList.toggle('persone__menu_active')
}

burgerOpen.onclick = function() {
	menuMob.classList.add('menu__mob_open')
	menuPerson.classList.add('header__info_open')
	asideBlock.classList.add('aside_open')
}

asideClose.onclick = function() {
	menuMob.classList.remove('menu__mob_open')
	menuPerson.classList.remove('header__info_open')
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


if( document.querySelector('.header__favorite') ){
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
					item2.classList.remove('select_open')
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

if( document.querySelector('.popup') ){
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
















