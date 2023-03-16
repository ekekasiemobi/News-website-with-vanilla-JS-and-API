///// SLIDER SCRIPT //////
fetch('https://64105fcb864814e5b64f9a34.mockapi.io/credo/v1/news', {
    method: 'GET',

}).then(res => {
    if (res.ok) {
        return res.json();
    }
}).then(dataimg => {
    // console.log(dataimg);
    dataimg.forEach(news => {
        const markup = `

    <img style="width: 100%; height:200px" src="${news.avatar}" alt="">
`;
        document.getElementById('dataimg').insertAdjacentHTML('beforeend', markup);
    });
})
const sliderImages = document.querySelector('.slider-imgs');
const prevBtns = document.querySelector('.left');
const nextBtns = document.querySelector('.right');
let counter = 0;

function nextSlide() {
    if (counter < 3) {
        counter++;
    } else {
        counter = 0;
    }
    sliderImages.style.transform = `translateX(-${counter * 25}%)`;
}

const slideInterval = setInterval(nextSlide, 5000); // change the interval time as per your requirement

nextBtns.addEventListener('click', () => {
    clearInterval(slideInterval); // stop the automatic slide when the next button is clicked
    nextSlide();
});

prevBtns.addEventListener('click', () => {
    clearInterval(slideInterval); // stop the automatic slide when the previous button is clicked
    if (counter > 0) {
        counter--;
    } else {
        counter = 3;
    }
    sliderImages.style.transform = `translateX(-${counter * 25}%)`;
});

///// END SLIDER SCRIPT //////