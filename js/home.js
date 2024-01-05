new Swiper(".home-slider", {
    slidesPerView: 1,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    speed: 800,
    effect: "creative",
    creativeEffect: {
        prev: {
            scale: 1.5,
            shadow: true,
            translate: ["-80%", 0, -1],
        },
        next: {
            translate: ["100%", 0, 100],
        },
    },
});

new Swiper(".occasion-swiper", {
    slidesPerView: 2.9,
    spaceBetween: 20,
    speed: 800,
    pagination: {
        el: '.home-occasions__pagination'
    },
    breakpoints: {
        600: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        766: {
            slidesPerView: 2.8098,
            spaceBetween: 45,
        },
        900: {
            slidesPerView: 5.236,
            spaceBetween: 32,
            navigation: {
                nextEl: ".swiper-occasion-button-next",
                prevEl: ".swiper-occasion-button-prev"
            },
        },
        1022: {
            slidesPerView: 4,
            spaceBetween: 32,
            navigation: {
                nextEl: ".swiper-occasion-button-next",
                prevEl: ".swiper-occasion-button-prev"
            },
        },
        1280: {
            slidesPerView: 5.236,
            spaceBetween: 32,
            navigation: {
                nextEl: ".swiper-occasion-button-next",
                prevEl: ".swiper-occasion-button-prev"
            },
        },
    }
});

new Swiper(".home-category-swiper", {
    navigation: {
        nextEl: ".swiper-category-button-next",
        prevEl: ".swiper-category-button-prev",
    },

    breakpoints: {
        768: {
            slidesPerView: 3.8,
            spaceBetween: 22,
            pagination: {
                el: '.home-category__pagination'
            },
        },
        900: {
            slidesPerView: 5.8,
            spaceBetween: 32,
            pagination: {
                el: '.home-category__pagination'
            },
        },
        1600: {
            slidesPerView: 5.8,
            spaceBetween: 0,
            pagination: {
                el: '.home-category__pagination'
            },
        }
    },

});


// new Swiper(".exquisite-swiper", {
//     navigation: {
//         nextEl: ".swiper-category-button-next",
//         prevEl: ".swiper-category-button-prev",
//     },

//     breakpoints: {
//         768: {
//             slidesPerView: 1.8,
//             spaceBetween: 10,
//             pagination: {
//                 el: '.home-category__pagination'
//             },
//         },
//         900: {
//             slidesPerView: 2.8,
//             spaceBetween: 10,
//             pagination: {
//                 el: '.home-category__pagination'
//             },
//         },
//         1600: {
//             slidesPerView: 2.8,
//             spaceBetween: 0,
//             pagination: {
//                 el: '.home-category__pagination'
//             },
//         }
//     },

// });

new Swiper(".review-swiper", {
    slidesPerView: 1,

    navigation: {
        nextEl: ".swiper-review-mob-button-prev",
        prevEl: ".swiper-review-mob-button-next",
    },
    // pagination: {
    //     el: '.home-category__pagination'
    // },
    breakpoints: {
        900: {
            slidesPerView: 2.5,
            spaceBetween: 0,
        },
        navigation: {
            nextEl: ".swiper-review-button-next",
            prevEl: ".swiper-review-button-prev",
        },
    },

});
new Swiper(".color-swiper", {
    slidesPerView: 3,
    spaceBetween: 16,
    pagination: {
        el: ".home__color-pagination"
    },
    breakpoints: {
        600: {
            slidesPerView: 5.5,
            spaceBetween: 16,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 16,
        }
    }
});
new Swiper(".showroom-swiper-1", {
    slidesPerView: 1.1,
    spaceBetween: 32,
    pagination: {
        el: ".home-showcase__pagination-1"
    },
    breakpoints: {
        390: {
            slidesPerView: 1.1302,
            spaceBetween: 20,
            // centeredSlides: true,
        },
        900: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3.3,
            spaceBetween: 32,
        }
    }
});
new Swiper(".showroom-swiper2", {
    slidesPerView: 1.1,
    spaceBetween: 32,
    pagination: {
        el: ".home-showcase__pagination2"
    },
    breakpoints: {
        390: {
            slidesPerView: 1.1302,
            spaceBetween: 20,
        },
        900: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3.3,
            spaceBetween: 32,
        }
    }
});
const exclusiveSlider = new Swiper(".exclusive-sliders", {
    effect: "cards",
    loop: true,
    loopFillGroupWithBlank: true,
    cardsEffect: {
        perSlideRotate: 0,
        rotate: false,
        slideShadows: false,
        perSlideOffset: 16
    },
    initialSlide: 1,
    grabCursor: true,
    breakpoints: {
        900: {
            initialSlide: 1,
            cardsEffect: {
                perSlideRotate: 2,
                rotate: true,
                perSlideOffset: 70
            },
            navigation: {
                nextEl: ".swiper-exclusive-button-next",
                prevEl: ".swiper-exclusive-button-prev",
            },
        }
    },
});

// exclusive content slider
// const exclusiveContents = new Swiper(....
const exclusiveContents = new Swiper(".titleSlide", {
    slidesPerView: 1,
    effect: "cards",
    // loop: true,
    // loopFillGroupWithBlank: true,
    initialSlide: 1,
    // grabCursor: true,
    cardsEffect: {
        perSlideRotate: 0,
        rotate: false,
        slideShadows: false,
        perSlideOffset: 16
    },
})

exclusiveSlider.on('slideChange', function (swiper, event) {
    exclusiveContents.slideTo(swiper.activeIndex)
});
exclusiveSlider.on('click', function (swiper, event) {
    exclusiveContents.slideTo(swiper.clickedIndex)
});
exclusiveContents.on('slideChange', function (swiper, event) {
    exclusiveSlider.slideTo(swiper.activeIndex)
});


new Swiper(".rarest-slider", {
    slidesPerView: 1.5,
    spaceBetween: 48,

    navigation: {
        nextEl: ".swiper-rarest-button-next",
        prevEl: ".swiper-rarest-button-prev",
    },
    pagination: {
        el: '.home-category__pagination'
    },
    breakpoints: {
        400: {
            slidesPerView: 1.7,
            spaceBetween: 48,
        },
        600: {
            slidesPerView: 2.2,
            spaceBetween: 20,
        },
        900: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 0,
        }

    },

});

const colorSwatches = document.querySelectorAll('.home-colors__container ul li button');
for (let i = 0; i < colorSwatches.length; i++) {
    colorSwatches[i].addEventListener('click', function () {

        const _currentActive = document.querySelector('.home-colors__container ul li.active')
        _currentActive.classList.remove('active');

        const _parent = colorSwatches[i].parentNode;
        _parent.classList.add('active');

    });
}

const homeOccasionsTabs = document.querySelectorAll('.home-occasions__tab-head li a');
for (let i = 0; i < homeOccasionsTabs.length; i++) {
    homeOccasionsTabs[i].addEventListener('click', function (e) {
        e.preventDefault();
        console.log('parentNode', e.target.closest('section'))
        const parent = e.target.closest('section')
        parent.querySelector('.home-occasions__tab-head li.active').classList.remove('active');
        homeOccasionsTabs[i].parentNode.classList.add('active');

        const toActivate = homeOccasionsTabs[i].parentNode.dataset.tabName
        const activatePanel = parent.querySelector(`[data-occasion-tab = "${toActivate}"]`)
        parent.querySelector('.home-occasions__tab__content.active').classList.remove('active');
        activatePanel.classList.add('active');
    })
}


// taneira tribe  animation

const socialPostContainer = document.querySelectorAll('.home-social-posts__items:not(.mobile-social-posts__items)')
// const socialPostMobileContainer = document.querySelectorAll('.mobile-social-posts__items')

let postImages = ["/images/home/social/social-1.png",
    "/images/home/social/social-2.png",
    "/images/home/social/social-3.png",
    "/images/home/social/social-4.png",
    "/images/home/social/social-5.png",
    "/images/home/social/social-6.png",
    "/images/home/social/social-7.png",
    "/images/home/social/social-8.png",
    "/images/home/social/social-9.png",
]

function randomSelector(array, limit) {
    return array
        .map(x => ({ x, r: Math.random() }))
        .sort((a, b) => a.r - b.r)
        .map(a => a.x)
        .slice(0, limit);
}

// console.log(socialPostContainer)
function rotateSocialPost() {
    let visibleImages = [];
    let visibleElements = []
    let hiddenElements = []

    for (let i = 0; i < socialPostContainer.length; i++) {
        const childElements = socialPostContainer[i].querySelectorAll('li')

        for (let j = 0; j < childElements.length; j++) {
            if (childElements[j].classList.contains('hide')) {
                hiddenElements.push(childElements[j])
            } else {
                visibleElements.push(childElements[j])
            }
        }
    }

    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const rndInt = randomIntFromInterval(1, 4)


    const toHide = randomSelector(visibleElements, rndInt);

    for (let i = 0; i < visibleElements.length; i++) {
        const currentImage = visibleElements[i].querySelector('img').getAttribute('src');
        visibleImages.push(currentImage)
    }
    const filteredImages = postImages.filter(function (obj) { return visibleImages.indexOf(obj) == -1; });
    // console.log('filteredImages',filteredImages)

    for (let i = 0; i < toHide.length; i++) {
        toHide[i].classList.add('hide')
    }

    // console.log('hiddenElements',hiddenElements);


    for (let i = 0; i < hiddenElements.length; i++) {

        const postImage = randomSelector(filteredImages, 1)
        hiddenElements[i].querySelector('img').setAttribute('src', postImage);
        hiddenElements[i].classList.remove('hide')
    }

}
setInterval(function () {
    rotateSocialPost()
}, 2000);


// home occasions JS

const homeStoreLocatorPills = document.querySelector('.home-showrooms__cities');
const homeStoreLocatorPillsButtons = homeStoreLocatorPills.querySelectorAll('.button-capsule')

const homeSwiper1 = document.querySelector('.home-swiper-1')
const homeSwiper2 = document.querySelector('.home-swiper-2')

for (let i = 0; i < homeStoreLocatorPillsButtons.length; i++) {
    homeStoreLocatorPillsButtons[i].addEventListener('click', function () {
        if (homeStoreLocatorPills.classList.contains('stores-filtered')) {
            homeStoreLocatorPills.classList.remove('stores-filtered');

            homeSwiper2.classList.remove('show');

            setTimeout(function () {
                homeSwiper2.classList.add('hidden');
                homeSwiper1.classList.remove('hidden');
            }, 100)
            setTimeout(function () {
                homeSwiper1.classList.add('show');
            }, 300)

        } else {
            homeStoreLocatorPills.classList.add('stores-filtered');
            homeSwiper1.classList.remove('show');


            setTimeout(function () {
                homeSwiper1.classList.add('hidden');

                homeSwiper2.classList.remove('hidden');
            }, 100)

            setTimeout(function () {
                homeSwiper2.classList.add('show');

            }, 300)
        }
    })
}

