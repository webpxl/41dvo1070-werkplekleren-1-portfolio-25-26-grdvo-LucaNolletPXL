
    const projectenContainer = document.querySelector('.projecten');
    const projecten = document.querySelectorAll('.project');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');

    let currentIndex = 0;

    function updateSlider() {
    projectenContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

    prevBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) currentIndex = projecten.length - 1;
    updateSlider();
});

    nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= projecten.length) currentIndex = 0;
    updateSlider();
});



