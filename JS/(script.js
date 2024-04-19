function prevSlide(sliderClass) {
    const slider = document.querySelector(`.${sliderClass}`);
    const currentScroll = slider.scrollLeft;
    const cardWidth = slider.querySelector('.destaque-card').offsetWidth;
    const newPosition = currentScroll - cardWidth;
    slider.scrollTo({
        left: newPosition,
        behavior: 'smooth'
    });
}

function nextSlide(sliderClass) {
    const slider = document.querySelector(`.${sliderClass}`);
    const currentScroll = slider.scrollLeft;
    const cardWidth = slider.querySelector('.destaque-card').offsetWidth;
    const newPosition = currentScroll + cardWidth;
    slider.scrollTo({
        left: newPosition,
        behavior: 'smooth'
    });
}
