// clicking on trending
const searchButton = document.getElementById("navigation__search-button");
const searchBackArrow = document.querySelector(".search-popup__back-arrow");
const searchOverLay = document.querySelector(".search-overlay");


const searchPopupContainer = document.querySelector('.search-popup');
const searchModal = document.querySelector('.has-search-modal');

const trendingContainer = document.querySelector('.search-popup__top-search__items');
const trendingButtons = trendingContainer.querySelectorAll('button');
const searchPopupResultContainer = document.querySelector('.search-popup__form__results');
const searchPopupForm = document.querySelector('.search-popup__form');

const searchInputField = document.querySelector('.search-popup__form__input');
for (let i = 0; i < trendingButtons.length; i++) {
    trendingButtons[i].addEventListener('click', function () {
        searchInputField.value = trendingButtons[i].innerHTML;
    })
}

searchBackArrow.addEventListener('click', function () {
    document.querySelector('html').classList.remove('popup-opened');
    document.querySelector('html').style.removeProperty('overflow-y');
    const backdrop = document.querySelector(".popup-backdrop");
    backdrop.remove();
    searchModal.classList.remove('open-modal');
});
searchButton.addEventListener('click', function () {
    const backdrop = document.querySelector(".popup-backdrop");
    if(backdrop === null) {
        const NavBackdrop = document.createElement("div");
        NavBackdrop.classList.add('popup-backdrop');
        document.body.appendChild(NavBackdrop);
        NavBackdrop.classList.add('low-zindex');
        NavBackdrop.classList.add('show');
    } else {
        backdrop.dataset.openedPopup = 'search';
    }
    searchModal.classList.add('open-modal');
})

const search_terms = ['Silk Saree', 'Silk Saree with Zari Work', 'Silk Kurta', 'Printed Saree', 'Kanjeevaram Saree', 'Minimal Sarees'];
function autocompleteMatch(input) {
    if (input === '') {
        return [];
    }
    const reg = new RegExp(input.toLowerCase())
    return search_terms.filter(function(term) {
        if (term.toLowerCase().match(reg)) {
            return term;
        }
    });
}

searchInputField.addEventListener('keyup', function(){
    typeWatch(function(){
        const autoData = autocompleteMatch(searchInputField.value);
        let list = '';
        if(autoData.length) {
            for (let i=0; i<autoData.length; i++) {
                list += '<li><a href="#">' + autoData[i] + '</a></li>';
            }
            searchPopupResultContainer.innerHTML = list;
            searchPopupForm.classList.add('open-autocomplete');
        }
    }, 500 );
})
const typeWatch = function(){
    let timer = 0;
    return function(callback, ms){
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    }
}();

const searchInputFormElement = document.querySelector('.search-popup__form > form');

searchInputFormElement.addEventListener('reset', function(){
    if(searchPopupForm.classList.contains('open-autocomplete')){
        searchPopupForm.classList.remove('open-autocomplete')
    }
})