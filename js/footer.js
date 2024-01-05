// sidebar accordion
const footerAccordian = document.querySelectorAll('.footer_head');
if (footerAccordian.length) {
    for (let i = 0; i < footerAccordian.length; i++) {
        footerAccordian[i].addEventListener('click', function () {
            const _parent = footerAccordian[i].parentNode;

            const current_active = _parent.parentNode.querySelector('.footer__accordion--active');
            if(current_active !== null && current_active !== _parent){
                current_active.classList.remove('footer__accordion--active');
            }

            _parent.classList.toggle('footer__accordion--active');
        })
    }
}
