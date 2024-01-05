const slider = document.getElementById('sliderPrice');
if(slider !== null) {
    const rangeMin = parseInt(slider.dataset.min);
    const rangeMax = parseInt(slider.dataset.max);
    const step = parseInt(slider.dataset.step);
    const filterInputs = document.querySelectorAll('.has-price-input input');

    noUiSlider.create(slider, {
        start: [rangeMin, rangeMax],
        connect: true,
        step: step,
        range: {
            'min': rangeMin,
            'max': rangeMax
        },

        // make numbers whole
        format: {
            to: value => value,
            from: value => value
        }
    });

// bind inputs with noUiSlider
    slider.noUiSlider.on('update', (values, handle) => {
        filterInputs[handle].value = Math.floor(values[handle]);
    });

    filterInputs.forEach((input, indexInput) => {
        input.addEventListener('change', () => {
            slider.noUiSlider.setHandle(indexInput, input.value);
        })
    });
}
const menuPriceSlider = document.getElementById('menuPriceSlider');
if(menuPriceSlider !== null) {

    noUiSlider.create(menuPriceSlider, {
        start: [2000, 20000],
        connect: true,
        range: {
            'min': 2000,
            '25%': [5000, 1000],
            '50%': [10000, 1000],
            '75%': [15000, 1000],
            'max': 20000
        },
        step: 1000,
        pips: {
            mode: 'range',
            density: 20,
            stepped: true,
            format: wNumb({
                prefix: '<i class="i-rupee"></i>',
                thousand: ',',
                edit: function( value ) {
                    if(value === '<i class="i-rupee"></i>20,000') {
                        return '<i class="i-rupee"></i>20,000' + '+';
                    }
                    return value
                }
            })
        },
        format: {
            to: value => value,
            from: value => value
        }
    });


    var Format = wNumb({
        thousand: ',',
    });

    const ProductImageArray = [
        "/images/price-range-products/price-range-1.png",
        "/images/price-range-products/price-range-1.png",
        "/images/price-range-products/price-range-3.png",
        "/images/price-range-products/price-range-3.png",
        "/images/price-range-products/price-range-2.png",
        "/images/price-range-products/price-range-2.png",
        "/images/price-range-products/price-range-2.png",
        "/images/price-range-products/price-range-3.png",
        "/images/price-range-products/price-range-3.png",
        "/images/price-range-products/price-range-3.png",
    ];


    menuPriceSlider.noUiSlider.on('change', function (e) {

        const HeaderProductsContainer = document.querySelector('.range-products-list');

        HeaderProductsContainer.classList.add('loading');

        const headerProducts = HeaderProductsContainer.querySelectorAll('.range-products-list__product');

        const randomImage = getMultipleRandom(ProductImageArray, 6);

        setTimeout(function(){
            for(let i =0; i <headerProducts.length; i++) {
                headerProducts[i].querySelector('a > img').setAttribute('src', randomImage[i])
            }
        }, 500)

        setTimeout(function(){
            HeaderProductsContainer.classList.remove('loading');
        }, 600)

        const priceRangeFrom = document.querySelector('.price-range-from > span')
        const priceRangeFromProduct = document.querySelector('.price-range-product-from')
        const priceRangeTo = document.querySelector('.price-range-to > span')
        const priceRangeToProduct = document.querySelector('.price-range-product-to')
        priceRangeFrom.innerHTML = Format.to(Math.floor(e[0]))
        priceRangeFromProduct.innerHTML = Format.to(Math.floor(e[0]))
        priceRangeTo.innerHTML = Format.to(Math.floor(e[1]))
        priceRangeToProduct.innerHTML = Format.to(Math.floor(e[1]));



    });

}

function getMultipleRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, num);
}

const mobileMenuPriceSlider = document.getElementById('mobileMenuPriceSlider');

noUiSlider.create(mobileMenuPriceSlider, {
    start: [2000, 20000],
    connect: true,
    range: {
        'min': 2000,
        '25%': [5000, 1000],
        '50%': [10000, 1000],
        '75%': [15000, 1000],
        'max': 20000
    },
    orientation: 'vertical',
    direction: 'rtl',
    step: 1000,
    pips: {
        mode: 'range',
        density: 20,
        stepped: true,
        format: wNumb({
            prefix: '<i class="i-rupee"></i>',
            thousand: ',',
            edit: function( value ) {
                if(value === '<i class="i-rupee"></i>20,000') {
                    return '<i class="i-rupee"></i>20,000' + '+';
                }
                return value
            }
        })
    },
    format: {
        to: value => value,
        from: value => value
    }
});

mobileMenuPriceSlider.noUiSlider.on('change', function (e) {
    const priceRangeFromMobile = document.querySelector('.price-range-from-mobile > span')
    const priceRangeToMobile = document.querySelector('.price-range-to-mobile > span')
    priceRangeFromMobile.innerHTML = Format.to(Math.floor(e[0]))
    priceRangeToMobile.innerHTML = Format.to(Math.floor(e[1]))
});

