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
    if (currentIndex < 0) currentIndx = projecten.length - 1;
    updateSlider();
});

nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= projecten.length) currentIndex = 0;
    updateSlider();
});


const tijdlijnData = [
    {
        jaar: '2023',
        tekst: 'In de opleiding leerkracht informatica Secundair Onderwijs, hadden we een project rond grafisch design. ' +
            'Hier heb ik was basis geleerd en het boeide me direct. We moesten een eigen fictief festival ontwikkelen.  ' +
            'Hier zie je een foto van het logo dat ik ontworpen heb.',
        afbeelding: 'Assets/logo-GrafischPakket.png'
    }, {
        jaar: '2025',
        tekst: 'Start digitale vormgeving aan PXL Hasselt. Eerste echte kennismaking met coderen en designen.',
        afbeelding: null
    },
    {
        jaar: '2026',
        tekst: 'Portfolio website gemaakt voor het vak werkplekleren 1. Eerste professionele webproject dat ik zelf gemaakt heb.',
        afbeelding: null
    }
];

function generateTimeline(data) {
    const container = document.querySelector('.tijdlijn-container');
    container.innerHTML = '';

    data.forEach(item => {
        const tijdLijnItem = document.createElement('div');
        tijdLijnItem.classList.add('tijdlijn-item');

        const punt = document.createElement('div');
        punt.classList.add('tijdlijn-punt');

        const infoKaart = document.createElement('div');
        infoKaart.classList.add('tijdlijn-infoKaart');

        const tijdlijnH3 = document.createElement('h3');
        tijdlijnH3.textContent = item.jaar;

        const tijdlijnP = document.createElement('p');
        tijdlijnP.textContent = item.tekst;

        infoKaart.appendChild(tijdlijnH3);
        infoKaart.appendChild(tijdlijnP);


        if (item.afbeelding) {
            const img = document.createElement('img');
            img.src = item.afbeelding;
            img.alt = item.jaar + ' project';
            infoKaart.appendChild(img);
        }

        tijdLijnItem.appendChild(punt);
        tijdLijnItem.appendChild(infoKaart);
        container.appendChild(tijdLijnItem);
    });
}

generateTimeline(tijdlijnData);
