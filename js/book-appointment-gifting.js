// new Swiper(".book-app__carousel", {
//     speed: 800,
//     slidesPerView: 1,

//     pagination: {
//         el: ".book-app-pagination",
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     effect: "creative",
//     creativeEffect: {
//         prev: {
//             scale: 1.5,
//             shadow: true,
//             translate: ["-80%", 0, -1],
//         },
//         next: {
//             translate: ["100%", 0, 100],
//         },
//     },
// });
let activeStep;
let activeStepNumber = 1;
function TriggerManager() {
    console.log("TriggerManager")
    activeStep = document.querySelector('.book__appointment__step.active');
    activeStepNumber = activeStep.dataset.bookTab;

    console.log('activeStepNumber',activeStepNumber)
    switch (parseInt(activeStepNumber)){
        case 1:            
            const button = document.querySelector('.book__appointment__mode__footer .button-gradient');
            button.addEventListener('click', function(e){
                e.preventDefault();
                console.log('I AM HEE')
                changeStep(2);
            });
            break;
        case 2:
            toggleHeaderFooter()
            break;
    }

}

function toggleHeaderFooter() {
    const bookAppointment = document.querySelector('.book__appointment__gifting');
    if(bookAppointment.classList.contains('book__appointment__gifting--confirmed')) {
        bookAppointment.classList.remove('book__appointment__gifting--confirmed')
    } else {
        bookAppointment.classList.add('book__appointment__gifting--confirmed')
    }
}

function changeStep(step) {
    activeStep.classList.remove('active');
    const tabToActivate = document.querySelector(`[data-book-tab="${step}"]`)
    var topPos = tabToActivate.offsetTop;
    tabToActivate.scrollTop = topPos
    tabToActivate.classList.add('active');

    TriggerManager();
}

TriggerManager();

const bookAppointmentDateSelect = document.querySelectorAll('.appointment__months__timing .swiper-wrapper .swiper-slide')

if(bookAppointmentDateSelect.length) {
    for (let i = 0; i < bookAppointmentDateSelect.length; i++) {
        bookAppointmentDateSelect[i].querySelector('a').addEventListener('click', function (e){
            e.preventDefault();
            const activeDate = document.querySelector('.appointment__months__timing .swiper-wrapper .swiper-slide.active');
            activeDate.classList.remove('active')
            bookAppointmentDateSelect[i].classList.add('active')
        })
    }

    new Swiper(".appointment__months__timing", {
        slidesPerView: 4,
        // spaceBetween: 30,


        breakpoints: {
            768: {
                slidesPerView: 3,
                navigation: {
                    nextEl: ".swiper-month-next",
                    prevEl: ".swiper-month-prev",
                },
            },
        },
        
    });
}

const monthButton = document.querySelector('.month-func')
monthButton.addEventListener('click', function(e){
    e.preventDefault();
    const dateSlider = document.querySelector('.dates__slider')
    dateSlider.classList.add('hide')
    document.querySelector('.swiper-month-prev').classList.add('hide')
    document.querySelector('.swiper-month-next').classList.add('hide')
    document.querySelector('.appointment__month').classList.add('active')
})

const appointmentMonthList = document.querySelectorAll('.appointment__month__list div')

if(appointmentMonthList.length) {
    for (let i = 0; i < appointmentMonthList.length; i++) {
        // appointmentMonthList[i].querySelector('a').addEventListener('click', function (e){
        //     e.preventDefault();
        //     const activeDate = document.querySelector('.appointmentMonthList div.active');
        //     activeDate.classList.remove('active')
        //     appointmentMonthList[i].classList.add('active')
        // })
    }
}
