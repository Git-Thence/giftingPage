const colorFilter = document.querySelectorAll('.catalog__sidebar__filter__more');

for (let x=0; x< colorFilter.length; x++){

const totalColors =  colorFilter[x].children;
const totalColorsLength = totalColors.length;

for(let i = 0; i < totalColorsLength; i++){
    const colorChild = totalColors[i];
    if(i>4){
        colorChild.classList.add('hidden')
    }
}

const MoreColorsButton = document.createElement("button");
MoreColorsButton.classList.add('button-primary-text');

MoreColorsButton.innerHTML = `<span>+${totalColorsLength - 5} More</span>`;
colorFilter[x].appendChild(MoreColorsButton);

MoreColorsButton.addEventListener('click', function(){
    if(MoreColorsButton.classList.contains('expanded')){
        MoreColorsButton.innerHTML = `<span>+${totalColorsLength - 5} More</span>`;
        MoreColorsButton.classList.remove('expanded')
        const hiddenChild = colorFilter[x].querySelectorAll('.visible')

        for(let i = 0; i < hiddenChild.length; i++){
            hiddenChild[i].classList.remove('visible')
            hiddenChild[i].classList.add('hidden')
        }
    }
    else{
        MoreColorsButton.innerHTML = `<span>Show Less</span>`;
        MoreColorsButton.classList.add('expanded')
        const hiddenChild = colorFilter[x].querySelectorAll('.hidden')

        for(let i = 0; i < hiddenChild.length; i++){
            hiddenChild[i].classList.remove('hidden')
            hiddenChild[i].classList.add('visible')
        }
    }
})
}

// PLP sort by dropdown select

// const sortSelect = document.querySelector('data-select');

// sidebar accordion
const sortSelect = document.querySelectorAll('.form__select__trigger');
if (sortSelect.length) {
    for (let i = 0; i < sortSelect.length; i++) {
        sortSelect[i].addEventListener('click', function () {
            const _parent = sortSelect[i].parentNode;
            _parent.classList.toggle('active');
        })
    }
}
const sortDropdown = document.querySelector('.form__select__data');
const sortDropItem = sortDropdown.querySelectorAll('ul > li');
if (sortDropItem.length) {
    for (let i = 0; i < sortDropItem.length; i++) {
        sortDropItem[i].addEventListener('click', function () {
            sortDropdown.querySelector('li.active').classList.remove('active');
            sortDropItem[i].classList.add('active');

            const _papa = sortDropItem[i].closest('.form__select')

            _papa.querySelector('.form__select__trigger').innerHTML = sortDropItem[i].innerText || sortDropItem[i].textContent;
            setTimeout(function (){
                _papa.classList.remove('active')
            }, 400)
        });
    }
}