const   currentSlide        = document.querySelector('.current-slide-num');
        lineCurrentSlide    = document.querySelector('.line-num-slide');
        prevArrow           = document.querySelector('.slider-arrows .prev');
        nextArrow           = document.querySelector('.slider-arrows .next');
        sliderLine          = document.querySelector('.slider-line ul');
        slideTitle          = document.querySelector('.top-slider__title-h1');
        slideBG             = document.querySelector('.top-slider');
        slideLocation       = document.querySelector('.top-slider__title-location');
        slideCountry        = document.querySelector('.country');
        allSlides           = 10;
        persent             = 100 / (allSlides - 1);

let =  sliderNum           = 1;

function changeSlide(){
    lineCurrentSlide.style.left = `${(sliderNum - 1) * persent}%`;
    lineCurrentSlide.innerHTML = sliderNum;

    sliderNum >= 10 ? currentSlide.innerHTML = `${sliderNum}`:
    currentSlide.innerHTML = `0${sliderNum}`;

    // change content
    
    slideTitle.innerHTML = slides[sliderNum-1].title;
    slideBG.style.backgroundImage = slides[sliderNum-1].background;
    slideLocation.innerHTML = slides[sliderNum-1].location;
    slideCountry.innerHTML= slides[sliderNum-1].counry;
}


nextArrow.addEventListener("click", ()=> {
    sliderNum >= 10 ? sliderNum = 0: sliderNum;
    sliderNum++;
    changeSlide(sliderNum);
});

prevArrow.addEventListener("click", ()=>{
    sliderNum <= 1 ? sliderNum = 11: sliderNum;
    sliderNum--;
    changeSlide();
});

sliderLine.addEventListener('click', (e)=>{
    let target = e.target;
    if (target.tagName == 'LI') {
        sliderNum = target.getAttribute('value');
        changeSlide();
    }
});


let slides= [

    slide_1 = {
        background: 'url("img/top-slider/slide-1.png")',
        title: 'Imperial Garoupe 5',
        location: '7 Rue Edith Cavell, Centre Ville, Cannes, France',
        counry: 'France'
    },

    slide_2 = {
        background: 'url("img/top-slider/slide-2.png")',
        title: 'Liberty Hotels Lara 5',
        location: 'Kemerağzı Mevkii, Lara Antalya, Turkey',
        counry: 'Turkey'
    },

    slide_3= {
        background: 'url("img/top-slider/slide-3.png")',
        title: 'Duangjitt Resort and Spa 5',
        location: '18 Prachanukroh Road, Kathu, Thailand',
        counry: 'Thailand'
    },

    slide_4 = {
        background: 'url("img/top-slider/slide-4.png")',
        title: 'Titanic Hotels & Resort 5',
        location: 'Kemeragzı Mevkii, Antalya' ,
        counry: 'turkey'
    },

    slide_5 = {
        background: 'url("img/top-slider/slide-5.png")',
        title: 'DIANNA HOTEL 4',
        location: 'smt. Skhidnytsia, st. Stepan Bandera, 12, Ukraine',
        counry: 'Ukraine'
    },

    slide_6 = {
        background: 'url("img/top-slider/slide-6.png")',
        title: 'ALI BEY CLUB 5',
        location: 'Kizilagac Turizim Merkezi, Manavgat, Turkey',
        counry: 'Turkey'
    },

    slide_7 = {
        background: 'url("img/top-slider/slide-7.png")',
        title: 'LARISA BOUTIQUE RESORT 3',
        location: 'Kavourakia Beach, Kalithea, Greece',
        counry: 'Greece'
    },

    slide_8 = {
        background: 'url("img/top-slider/slide-8.png")',
        title: 'SENTIDO PALM RESORT 5',
        location: 'Hurghada - Safaga Highway, Hurghada, Egypt',
        counry: 'Egypt'
    },

    slide_9 = {
        background: 'url("img/top-slider/slide-9.png")',
        title: 'RIXOS SHARM EL SHEIKH 5',
        location: 'Sharm-El-Sheikh, Egypt',
        counry: 'Egypt'
    },
    
    slide = {
        background: 'url("img/top-slider/slide-10.png")',
        title: 'florida park hotel 4',
        location: 'Avda del Mar 17, Santa Susanna, Spain',
        counry: 'Spain'
    },
]
