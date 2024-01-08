const className = "navigation--fixed";
const scrollTrigger = 60;
// navigation menu scroll fixed
const navbar = document.getElementsByTagName("nav")[0];
// mobile top price filter fixed
const mobilePriceFilterBar = document.querySelector(".catalog__filter__right");
// mobile pagination
const mobilePagination = document.querySelector(".catalog-paging");
// page counter
const mobilePageCounter = document.querySelector(
  ".catalog-paging__content__page > span"
);

let lastScrollTop = 0;

let timer = null;

window.onscroll = function () {
  // sticky nav
  const siteNav = document.getElementsByTagName("nav")[0];
  // We add pageYOffset for compatibility with IE.
  if (!siteNav.classList.contains("navigation--docked")) {
    if (
      window.scrollY >= scrollTrigger ||
      window.pageYOffset >= scrollTrigger
    ) {
      siteNav.classList.add(className);
    } else {
      siteNav.classList.remove(className);
    }
  }
  // catalog mobile pages and filter
  if (detectMob()) {
    // check if scrolling up or down
    const st = window.scrollY || document.documentElement.scrollTop;
    if (window.screen.width < 992) {
      if (st > lastScrollTop) {
        if (mobilePriceFilterBar !== null) {
          mobilePriceFilterBar.setAttribute("style", "opacity:0; top: -50px");
          setTimeout(function () {
            mobilePriceFilterBar.classList.remove("d-flex");
          }, 10);
        }
        if (mobilePagination !== null) {
          mobilePagination.style.top = "72px";
        }
      } else {
        if (mobilePriceFilterBar !== null) {
          if (window.scrollY > 150) {
            mobilePriceFilterBar.classList.add("d-flex");
            setTimeout(function () {
              mobilePriceFilterBar.setAttribute(
                "style",
                "opacity:1; top: 54px"
              );
            }, 100);
          } else {
            mobilePriceFilterBar.setAttribute("style", "opacity:0; top: -50px");
            setTimeout(function () {
              mobilePriceFilterBar.classList.remove("d-flex");
            }, 10);
          }
        }
        if (mobilePagination !== null) {
          mobilePagination.style.top = "131px";
        }
      }
    }

    const currentPage = st / window.innerHeight;

    if (mobilePageCounter !== null) {
      mobilePageCounter.innerHTML = Math.floor(currentPage + 1).toString();
    }

    if (mobilePagination !== null) {
      mobilePagination.style.display = "flex";
      mobilePagination.style.visibility = "visible";
      setTimeout(function () {
        mobilePagination.style.opacity = 1;
      }, 100);

      // lastScrollTop = st <= 0 ? 0 : st;

      if (timer !== null) {
        clearTimeout(timer);
      }
      timer = setTimeout(function () {
        mobilePagination.style.opacity = 0;
        mobilePaginationShown = false;

        setTimeout(function () {
          mobilePagination.style.display = "none";
        }, 100);
      }, 1000);
    }
  }
};
if (mobilePagination !== null) {
  mobilePagination.addEventListener("click", function () {
    window.scrollTo(0, 0);
  });
}
// Search open close func ends

const buttonClose = document.getElementsByClassName("button-close");
if (buttonClose.length !== 0) {
  for (let i = 0; i < buttonClose.length; i++) {
    if (!buttonClose[i].classList.contains("quick-close")) {
      buttonClose[i].addEventListener(
        "click",
        function (e) {
          e.currentTarget.parentNode.remove();
        },
        false
      );
    }
  }
}

// minimize filter starts
// const minimize = document.getElementById("filter_minimize");

// minimize.addEventListener('click', minimizeFilter)
// function minimizeFilter(){
//   if(document.body.classList.contains('searchOpen')){
//     document.body.classList.remove('searchOpen')
//   }else{
//     document.body.classList.add('searchOpen')
//   }
// }
// minimize filter ends

// Like button
const likeButton = document.getElementsByClassName("like-button");
if (likeButton.length !== 0) {
  for (let i = 0; i < likeButton.length; i++) {
    likeButton[i].addEventListener("click", function () {
      const iconHeart = likeButton[i].getElementsByTagName("img")[0];
      if (likeButton[i].classList.contains("active")) {
        likeButton[i].classList.remove("active");
        iconHeart.setAttribute("src", "/images/icons/products/icon-heart.svg");
        if (likeButton[i].classList.contains("like-button__golden")) {
          iconHeart.setAttribute("src", "/images/icons/icon-heart-gold.svg");
        }
      } else {
        likeButton[i].classList.add("active");
        iconHeart.setAttribute(
          "src",
          "/images/icons/products/icon-heart-active.svg"
        );
      }
    });
  }
}

//
// check if products are in viewport
//
const productCard = document.getElementsByClassName("product");
document.addEventListener(
  "scroll",
  function () {
    for (let i = 0; i < productCard.length; i++) {
      if (isInViewport(productCard[i])) {
        productCard[i].classList.add("open");
      } else {
        productCard[i].classList.remove("open");
      }
    }
  },
  {
    passive: true,
  }
);

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom >= 0;
}

//
// mobile catalog filter button
//
const mobileFilterButton = document.getElementsByClassName("filter-toggle");
toggleActive(mobileFilterButton);

function toggleActive(el) {
  if (el.length !== 0) {
    for (let i = 0; i < el.length; i++) {
      el[i].addEventListener("click", function () {
        if (el[i].classList.contains("active")) {
          el[i].classList.remove("active");
        } else {
          el[i].classList.add("active");
        }
        toggleParent(el[i].parentNode.parentNode);
      });
    }
  }
}

function toggleParent(el) {
  const childs = el.getElementsByClassName("active");
  if (childs.length) {
    el.classList.add("active");
  } else {
    el.classList.remove("active");
  }
}

// width fix
const mobileFilterBox = document.getElementsByClassName(
  "filter-mobile-section"
);
if (mobileFilterBox.length) {
  for (let i = 0; i < mobileFilterBox.length; i++) {
    addWindowWidth(mobileFilterBox[i]);
  }
}

function addWindowWidth(el) {
  const width = window.innerWidth > 0 ? window.innerWidth : screen.width;
  el.setAttribute("style", "width:" + width + "px");
}

// check if mobile
function detectMob() {
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
  ];

  return toMatch.some((toMatchItem) => {
    return navigator.userAgent.match(toMatchItem);
  });
}

// if (detectMob()) {
//     const catalogProducts = document.getElementsByClassName('catalog__products');
//     // console.log(catalogProducts.length)
//     if (catalogProducts.length) {
//         addWindowWidth(catalogProducts[0]);
//     }
// }

// minimize
const minimizeButton = document.querySelector(".button-minimize");
if (minimizeButton !== null) {
  minimizeButton.addEventListener("click", function () {
    const catalogPage = document.getElementById("catalog-page");
    if (catalogPage.classList.contains("minimized")) {
      catalogPage.classList.remove("minimized");
    } else {
      catalogPage.classList.add("minimized");
    }
  });
}

// mobile filter sidebar tab

const mobileFilterSidebar = document.getElementsByClassName(
  "filter-popup__content__sidebar__item"
);
if (mobileFilterSidebar.length) {
  for (let i = 0; i < mobileFilterSidebar.length; i++) {
    mobileFilterSidebar[i].addEventListener("click", function () {
      switchMobileFilterTab(mobileFilterSidebar[i]);
    });
  }
}

function switchMobileFilterTab(el) {
  const mobileFilterSidebarContainer = document.querySelector(
    ".filter-popup__content__sidebar"
  );
  const mobileFilterRightContainer = document.querySelector(
    ".filter-popup__content__right"
  );
  const activeChildren =
    mobileFilterSidebarContainer.getElementsByClassName("active")[0];

  const dataId = el.dataset.id;

  const tabToActivate = mobileFilterRightContainer.querySelector(
    `[data-tab-id="${dataId}"]`
  );

  const currentActiveTab =
    mobileFilterRightContainer.getElementsByClassName("active")[0];

  currentActiveTab.classList.remove("active");

  tabToActivate.classList.add("active");

  activeChildren.classList.remove("active");
  el.classList.add("active");
}

//
// Popup
//
const popupTriggers = document.querySelectorAll(`[data-popuptrigger]`);

if (popupTriggers.length) {
  for (let i = 0; i < popupTriggers.length; i++) {
    popupTriggers[i].addEventListener("click", function () {
      const dataPopup = popupTriggers[i].dataset.popuptrigger;
      const isOverlay = popupTriggers[i].dataset.isoverlay ? true : false;
      console.log(isOverlay);
      if (dataPopup === "popup-similar") {
        openPopup(dataPopup, isOverlay);
      } else {
        if (dataPopup === "popup-quick-view") {
          if (detectMob()) {
            openPopup(dataPopup);
          } else {
            console.log('hi');
            openPopup("popup-quick-view-web");
          }
        } else {
          openPopup(dataPopup);
        }
      }
    });
  }
}

function openPopup(dataPopup, isOverlay) {
  isOverlay = isOverlay ? true : false;
  const targetPopup = document.querySelector(`[data-popup="${dataPopup}"]`);
  const openedPopup = document.querySelector(`[data-opened-popup]`);

  console.log(dataPopup, "---dataPopup");

  const isNavShow = targetPopup?.dataset?.shownav;
  let backdrop;

  if (openedPopup == null) {
    backdrop = document.createElement("div");
    backdrop.classList.add("popup-backdrop");
    document.body.appendChild(backdrop);
  }
  //   if (openedPopup !== null) {
  //     backdrop = document.createElement("div");
  //     backdrop.classList.add("zz");
  //     document.body.appendChild(backdrop);
  //   }
  else {
    backdrop = openedPopup;
    backdrop.setAttribute(
      "data-prev-opened-popup",
      openedPopup.dataset.openedPopup
    );
  }

  backdrop.setAttribute("data-opened-popup", dataPopup);
  targetPopup?.setAttribute("data-isoverlay", isOverlay);

  if (
    dataPopup == "popup-similar" ||
    dataPopup == "popup-filters" ||
    dataPopup == "popup-sort-by"
  ) {
    const reelView = document.querySelector('[data-popup="popup-reel-view"]');
    if (reelView !== null) {
      if (reelView.classList.contains("show")) {
        backdrop.classList.remove("low-zindex");
      }
    }
  }
  if (isNavShow) {
    // if(totalOpenedPopup !== null) {
    backdrop.classList.add("low-zindex");
    // }
    targetPopup.classList.add("low-zindex");
  }

  if (
    dataPopup === "popup-quick-view" ||
    dataPopup === "popup-quick-view-web" ||
    dataPopup === "user-profile-form" ||
    dataPopup === "user-address-popup" ||
    dataPopup === "user-address-form-popup"
  ) {
    targetPopup?.classList.add("high-zindex");
    backdrop?.classList.add("high-zindex");
  }
  if (dataPopup === "user-address-popup") {
    backdrop.dataset.prevOpenedPopup = "mobile-menu";
  }

  targetPopup?.setAttribute("style", "display: block");

  setTimeout(function () {
    backdrop?.classList.add("show");
    targetPopup?.classList.add("show");
  }, 100);

  document.querySelector("html").classList.add("popup-opened");
}

// close popup
const popupClosers = document.querySelectorAll(`[data-close]`);

if (popupClosers.length) {
  for (let i = 0; i <= popupClosers.length; i++) {
    popupClosers[i]?.addEventListener("click", function () {
      closePopup(popupClosers[i]?.dataset?.close);
    });
  }
}

function closePopup(dataPopup) {
  console.log(dataPopup, "---777");
  const backdrop = document.querySelector(".popup-backdrop");
  // const dataPopup = el.dataset.close;
  const targetPopup = document.querySelector(`[data-popup="${dataPopup}"]`);

  // if(backdrop.classList.contains('low-zindex')){
  //     backdrop.classList.remove('low-zindex');
  // }

  if (targetPopup.classList.contains("low-zindex")) {
    targetPopup.classList.remove("low-zindex");
  }
  if (targetPopup.classList.contains("high-zindex")) {
    targetPopup.classList.remove("high-zindex");
    backdrop.classList.remove("high-zindex");
  }
  if (dataPopup === "user-address-popup") {
    backdrop.remove();
  }
  // if(dataPopup === 'popup-similar'){
  //     backdrop.remove();
  // }

  setTimeout(function () {
    targetPopup.classList.remove("show");
  }, 100);

  setTimeout(function () {
    if (backdrop.dataset.prevOpenedPopup === undefined) {
      backdrop.classList.remove("show");
      backdrop.remove();
    } else {
      backdrop.dataset.openedPopup = backdrop.dataset.prevOpenedPopup;
      delete backdrop.dataset.prevOpenedPopup;
    }

    if (targetPopup.dataset.isoverlay === "false") {
      document.querySelector("html").classList.remove("popup-opened");
      targetPopup.setAttribute("style", "display: none");
    }
    if (
      dataPopup == "popup-similar" ||
      dataPopup == "popup-filters" ||
      dataPopup == "popup-sort-by"
    ) {
      const reelView = document.querySelector('[data-popup="popup-reel-view"]');

      if (reelView !== null) {
        if (reelView.classList.contains("show")) {
          backdrop.classList.add("low-zindex");
        }
      }
    }
    document.querySelector("html").classList.remove("popup-opened");
    targetPopup.classList.remove("show");
  }, 300);
}

function setCommunication() {
  document.getElementById("phone").addEventListener("click", function () {
    if (document.getElementById("phone").classList.contains("comm_select")) {
      document.getElementById("phone").classList.remove("comm_select");
    } else {
      document.getElementById("phone").classList.add("comm_select");
      document.getElementById("video_call").classList.remove("comm_select");
    }
  });
  document.getElementById("video_call").addEventListener("click", function () {
    if (
      document.getElementById("video_call").classList.contains("comm_select")
    ) {
      document.getElementById("video_call").classList.remove("comm_select");
    } else {
      document.getElementById("video_call").classList.add("comm_select");
      document.getElementById("phone").classList.remove("comm_select");
    }
  });
}
setCommunication();
//
// sort by popup
//
const sortByMobileItem = document.querySelectorAll(
  ".sort-by-popup__content_item"
);
if (sortByMobileItem.length) {
  for (let i = 0; i < sortByMobileItem.length; i++) {
    sortByMobileItem[i].addEventListener("click", function () {
      const sortContainer = document.querySelector(".sort-by-popup__content");
      sortContainer
        .getElementsByClassName("active")[0]
        .classList.remove("active");
      sortByMobileItem[i].classList.add("active");
      sortByMobileItem[i]
        .getElementsByTagName("input")[0]
        .setAttribute("checked", "checked");
      setTimeout(function () {
        closePopup("popup-sort-by");
      }, 100);
    });
  }
}

// sidebar accordion
const sidebarAccordionHead = document.querySelectorAll(
  ".catalog_sidebar_filter_head"
);
if (sidebarAccordionHead.length) {
  for (let i = 0; i < sidebarAccordionHead.length; i++) {
    sidebarAccordionHead[i].addEventListener("click", function () {
      const _parent = sidebarAccordionHead[i].parentNode;
      _parent.classList.toggle("catalog__sidebar__filter--active");
    });
  }
}

const quickViewSlider = document.querySelector(".quick-slider");
if (quickViewSlider) {
  new Swiper(".quick-slider", {
    speed: 800,
    slidesPerView: 1.04,
    spaceBetween: 8,

    pagination: {
      el: ".quick-swiper-pagination",
    },
    breakpoints: {
      370: {
        slidesPerView: 1.1,
      },
      400: {
        slidesPerView: 1.4,
      },
      500: {
        slidesPerView: 1.8,
      },
      600: {
        slidesPerView: 2.04,
      },
      700: {
        slidesPerView: 2.2,
      },
      750: {
        slidesPerView: 2.35,
      },
      900: {
        slidesPerView: 3,
      },
    },
  });
}

const addToCartButton = document.querySelectorAll(".button-add-to-cart");
if (addToCartButton.length) {
  for (let i = 0; i < addToCartButton.length; i++) {
    addToCartButton[i].addEventListener("click", function () {
      const _button = addToCartButton[i];
      if (_button.classList.contains("added")) {
        _button.classList.remove("added");
        _button.classList.remove("adding");
      } else {
        _button.classList.add("adding");
        setTimeout(function () {
          _button.classList.add("added");
        }, 2000);
      }
    });
  }
}

document.body.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("popup-container")) {
    const openedPopup = document.querySelector(`[data-opened-popup]`);
    const dataPopup = openedPopup.dataset.openedPopup;
    closePopup(dataPopup);
  }
});
document.body.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("popup-container")) {
    const openedPopupp = document.querySelector(`[data-close]`);
    const dataPopup = openedPopupp.dataset;
    closePopup(openedPopupp, "---5");
  }
});

// Like button
const buttonLike = document.getElementsByClassName("thums-up__like");
if (buttonLike.length !== 0) {
  for (let i = 0; i < buttonLike.length; i++) {
    buttonLike[i].addEventListener("click", function () {
      const iconHeart = buttonLike[i].getElementsByTagName("img")[0];
      if (buttonLike[i].classList.contains("active")) {
        buttonLike[i].classList.remove("active");
        iconHeart.setAttribute("src", "/images/icons/icon-prod-like.svg");
      } else {
        buttonLike[i].classList.add("active");
        iconHeart.setAttribute(
          "src",
          "/images/icons/icon-prod-like-active.svg"
        );
      }
    });
  }
}
const buttonDislike = document.getElementsByClassName("button-dislike");
if (buttonDislike.length !== 0) {
  for (let i = 0; i < buttonDislike.length; i++) {
    buttonDislike[i].addEventListener("click", function () {
      const iconHeart = buttonDislike[i].getElementsByTagName("img")[0];
      if (buttonDislike[i].classList.contains("active")) {
        buttonDislike[i].classList.remove("active");
        iconHeart.setAttribute("src", "/images/icons/icon-prod-dislike.svg");
      } else {
        buttonDislike[i].classList.add("active");
        iconHeart.setAttribute(
          "src",
          "/images/icons/icon-prod-dislike-active.svg"
        );
      }
    });
  }
}

// copy to clipboard for coupons
const copyCouponButton = document.querySelectorAll(".product__coupon--copy");
if (copyCouponButton.length !== 0) {
  for (let i = 0; i < copyCouponButton.length; i++) {
    copyCouponButton[i].addEventListener("click", function () {
      copyCouponButton[i].classList.add("copied");
      copyCouponButton[i].querySelector("span").innerHTML = "COPIED";

      setTimeout(function () {
        copyCouponButton[i].querySelector("span").innerHTML = "COPY";
      }, 3000);
    });
  }
}
// redeem button
const redeemButton = document.querySelectorAll(".button-redeem");
if (redeemButton.length !== 0) {
  for (let i = 0; i < redeemButton.length; i++) {
    redeemButton[i].addEventListener("click", function (e) {
      e.preventDefault();
      const dataForm = redeemButton[i].dataset.nextForm;
      const currentForm = redeemButton[i].closest(".searchbox-wrap");
      const targetForm = document.querySelector(
        `[data-redeem-form='${dataForm}']`
      );

      if (dataForm !== undefined) {
        currentForm.classList.add("d-none");
        targetForm.classList.remove("d-none");
      } else {
        redeemButton[i].innerHTML = "<span>REDEEMED</span>";
      }
    });
  }
}

const redeemForm = document.querySelector(".product__redeem");

if (redeemForm !== null) {
  const redeemForms = redeemForm.querySelectorAll(".searchbox-wrap");
  for (let i = 0; i < redeemForms.length; i++) {
    redeemForms[i]
      .querySelector("input")
      .addEventListener("input", function (e) {
        const tgt = e.target;
        const val = tgt.value;
        const nums = val.replace(/[^\d.-]/g, "");
        if (!/\d+/.test(val)) tgt.value = "";

        const maxlength = parseInt(this.getAttribute("maxlength"));
        const _parentForm = this.closest(".searchbox-wrap");

        if (_parentForm.dataset.redeemForm !== "redeem") {
          if (this.value.length === maxlength) {
            _parentForm.classList.remove("disabled");
          } else {
            _parentForm.classList.add("disabled");
          }
        }
      });
  }
}

const couponSlider = document.querySelectorAll(".coupon-slider");
function buildCouponSwiperSlider(slider) {
  new Swiper(slider, {
    speed: 800,
    slidesPerView: 1,
    spaceBetween: 16,
    pagination: {
      el: ".coupon-swiper-pagination",
    },
  });
}
if (couponSlider.length) {
  window.addEventListener(
    "load",
    () => {
      const allCouponSliders = document.querySelectorAll(".coupon-slider");
      if (allCouponSliders.length) {
        allCouponSliders.forEach((slider) => buildCouponSwiperSlider(slider));
      }
    },
    false
  );
}

const homeDelivery = document.querySelectorAll(".pdp-web__delivery");
if (homeDelivery.length) {
  for (let i = 0; i < homeDelivery.length; i++) {
    const _pinCodeInput = homeDelivery[i].querySelector("input");
    _pinCodeInput.addEventListener("input", function (e) {
      const tgt = e.target;
      const val = tgt.value;
      const nums = val.replace(/[^\d.-]/g, "");
      if (!/\d+/.test(val)) tgt.value = "";

      const _button = homeDelivery[i].querySelector("button.bg-transparent");

      const maxlength = parseInt(this.getAttribute("maxlength"));

      if (this.value.length === maxlength) {
        _button.classList.remove("disabled");
      } else {
        _button.classList.add("disabled");
      }
    });
  }
}
