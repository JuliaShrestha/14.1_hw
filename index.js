const images = ['assets/image.png', 'assets/image1.png', 'assets/image2.png'];

let currentSlide = 0;

const image = document.querySelector('.slider__image img');
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');
const dots = document.querySelectorAll('.dot');
const nameTeam = document.querySelector('.name');

const textName = [
    'Олександра Олександровська',
    'Дмитро Дружній',
    'Михайло Крашповський'
];


function updateSlider () {

    image.src = images[currentSlide];

    if(currentSlide === 0) {
        prevButton.style.display = 'none';
    } else {
        prevButton.style.display = 'block';
    }

    if(currentSlide === images.length - 1) {
        nextButton.style.display = 'none';
    } else {
        nextButton.style.display = 'block';
    }

    dots.forEach((dot, index) => {

        if(index === currentSlide) {
            dot.style.backgroundColor = 'rgb(72, 135, 253)';
        } else {
            dot.style.backgroundColor = 'rgb(159, 192, 253)';
        }

    });   
}

nextButton.addEventListener('click', () => {
    if(currentSlide < images.length -1) {

        nameTeam.textContent = textName[currentSlide];

        currentSlide++;

        updateSlider();
    }
});

prevButton.addEventListener('click', () => {
    if(currentSlide > 0) {

       nameTeam.textContent = textName[currentSlide];

        currentSlide--;

        updateSlider();
    }
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {

        nameTeam.textContent = textName[currentSlide];

        currentSlide = index;

        updateSlider();
    });
});

updateSlider();