// // desktop menu javascript starts
const navTriggers = document.querySelectorAll(`.navigation__links__has-menu`);
const parentNavigation = document.querySelector("nav.navigation");
if (navTriggers.length) {
  for (let i = 0; i < navTriggers.length; i++) {
    navTriggers[i].onmouseenter = navTriggers[i].onmouseleave = triggerNavPopup;
  }
}

//
function triggerNavPopup(event) {
  const dataPopup = event.target.dataset.navHover;
  openBackDrop(dataPopup, event);
}
//
function openBackDrop(dataPopup, event) {
  if (event.type === "mouseenter") {
    const backdrop = document.createElement("div");
    backdrop.classList.add("popup-backdrop");
    backdrop.classList.add("low-zindex");
    document.body.appendChild(backdrop);
    backdrop.classList.add("show");
    document.querySelector("html").classList.add("popup-opened");

    document.querySelector("html").setAttribute("style", "overflow-y: clip");

    if (!parentNavigation.classList.contains("navigation--docked")) {
      parentNavigation.classList.add("navigation--fixed");
    }
  }
  if (event.type === "mouseleave") {
    closeBackDrop(dataPopup);

    const searchModal = parentNavigation.querySelector(".has-search-modal");

    if (searchModal.classList.contains("open-modal")) {
      searchModal.classList.remove("open-modal");
    }
  }
}

function closeBackDrop(dataPopup) {
  const backdrop = document.querySelector(".popup-backdrop");

  backdrop.classList.remove("show");
  backdrop.remove();
  document.querySelector("html").classList.remove("popup-opened");
  document.querySelector("html").setAttribute("style", "overflow-y: scroll");
  if (!parentNavigation.classList.contains("navigation--docked")) {
    parentNavigation.classList.remove("navigation--fixed");
  }
}

const headerMenuCategoryTrigger = document.querySelectorAll(
  "[data-header-category-trigger]"
);

for (let i = 0; i < headerMenuCategoryTrigger.length; i++) {
  headerMenuCategoryTrigger[i].onmouseenter = function () {
    const _data = headerMenuCategoryTrigger[i].dataset.headerCategoryTrigger;
    const _category = document.querySelector(
      `[data-header-category="${_data}"]`
    );
    const current_active_category = document.querySelector(
      ".header__menu__main__content.active"
    );
    const current_active_menu = document.querySelector(
      ".header-menu__main__left ul li.active"
    );

    current_active_category.classList.remove("active");
    current_active_menu.classList.remove("active");

    _category.classList.add("active");
    headerMenuCategoryTrigger[i].parentNode.classList.add("active");
  };
}

const headerMainMenuHoverTrigger = document.querySelectorAll(
  "[data-trigger-hover]"
);
if (headerMainMenuHoverTrigger.length) {
  for (let i = 0; i < headerMainMenuHoverTrigger.length; i++) {
    headerMainMenuHoverTrigger[i].onmouseenter = triggerImageOnHover;
  }
}
function triggerImageOnHover(event) {
  const triggerImage = event.target.dataset.hoverImg;
  const targetParent = event.target.parentNode.parentNode.parentNode;

  const targetImage = targetParent.querySelector(
    ".header-menu__category__image"
  );
  const targetImgTag = targetImage.querySelector("img");

  const defaultImage = targetImgTag.dataset.defaultImg;

  targetImgTag.style.transform = "scale(1.6)";

  setTimeout(function () {
    targetImgTag.setAttribute("src", triggerImage);
    targetImgTag.style.transform = "scale(1)";
  }, 600);
  console.log(targetImage);
}
