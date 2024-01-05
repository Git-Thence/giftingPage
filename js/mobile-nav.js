// // desktop menu javascript starts
const mobileNavTrigger = document.querySelectorAll(`[data-mobile-menu-trigger]`);
// const parentNavigation = document.querySelector('nav.navigation');
if (mobileNavTrigger.length) {
    for (let i = 0; i < mobileNavTrigger.length; i++) {
        mobileNavTrigger[i].addEventListener('click', function () {
            const menu = mobileNavTrigger[i].dataset.mobileMenuTrigger;
            const activeMenu = document.querySelector('.navigation-mobile__menu__item.active');

            const toActivate = document.querySelector(`[data-mobile-menu="${menu}"]`)

            activeMenu.classList.remove('active');

            setTimeout(function (){
                activeMenu.setAttribute('style', 'display: none');
                toActivate.setAttribute('style', 'display: block')

            }, 100)

            setTimeout(function (){
                toActivate.classList.add('active');
            }, 200)

        })
    }
}

const mobileSubmenuTrigger = document.querySelectorAll(`[data-mobile-submenu-trigger]`);
// const parentNavigation = document.querySelector('nav.navigation');
if (mobileSubmenuTrigger.length) {
    for (let i = 0; i < mobileSubmenuTrigger.length; i++) {
        mobileSubmenuTrigger[i].addEventListener('click', function () {
            const submenu = mobileSubmenuTrigger[i].dataset.mobileSubmenuTrigger;
            const toActivate = document.querySelector(`[data-mobile-submenu="${submenu}"]`);
            const mainMenu = document.querySelector('.navigation-mobile__list ul li.open');

            const menuParent = mobileSubmenuTrigger[i].parentNode;

            if(mainMenu !== null && menuParent !== mainMenu){
                mainMenu.classList.remove('open');
            }
            if(menuParent.classList.contains('open')){
                mobileSubmenuTrigger[i].parentNode.classList.remove('open');
            } else {
                mobileSubmenuTrigger[i].parentNode.classList.add('open');
            }
        })
    }
}

const headerMobileNavTrigger = document.querySelector('[data-mobile-nav-trigger]');
headerMobileNavTrigger.addEventListener('click', function(){
    const headerNavMobileMenu = document.querySelector('.navigation-header-menu');
    headerNavMobileMenu.classList.add('show');

    const backdrop = document.createElement("div");
    backdrop.classList.add('popup-backdrop');

    document.body.appendChild(backdrop);

    backdrop.classList.add('show');
    document.querySelector('html').classList.add('overflow-hidden');


})
const headerMobileNavClose = document.querySelector('.navigation-mobile__close');
headerMobileNavClose.addEventListener('click', function(){
    closeMenuPopup();
})

function closeMenuPopup() {
    const backdrop = document.querySelector(".popup-backdrop");
    const headerNavMobileMenu = document.querySelector('.navigation-header-menu');
    headerNavMobileMenu.classList.remove('show');
    backdrop.remove();
    document.querySelector('html').classList.remove('overflow-hidden')
}

document.body.addEventListener("click", evt => {
    if(evt.target.classList.contains('navigation-header-menu')){
        console.log(evt)
        closeMenuPopup();
    }
});