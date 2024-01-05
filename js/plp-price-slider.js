const pdpPriceSlider = document.getElementById('plpPriceSlider');

if(pdpPriceSlider !== null){
    noUiSlider.create(pdpPriceSlider, {
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

    pdpPriceSlider.noUiSlider.on('change', function (e) {
        const priceRangeFromMobile = document.querySelector('.plp-price-range-from-mobile > span')
        const priceRangeToMobile = document.querySelector('.plp-price-range-to-mobile > span')
        priceRangeFromMobile.innerHTML = Format.to(Math.floor(e[0]))
        priceRangeToMobile.innerHTML = Format.to(Math.floor(e[1]))
    });
}
