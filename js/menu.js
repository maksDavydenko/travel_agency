const   menuBtn = document.querySelector('.menu');
        burMenu = document.querySelector('.bur-menu');
        menuSite = document.querySelector('.menu-site');
        menuDropDown = document.querySelector('.menu-site-nav__drop-down');
        dropDownBtn = document.querySelector('.drop-down-btn');
        
menuBtn.addEventListener('click', ()=>{
    burMenu.classList.toggle("active-menu");
    menuSite.style.left === '0px' ? 
    menuSite.style.left = '-999px':
    menuSite.style.left = '-0px';
});

dropDownBtn.addEventListener('click', ()=>{
    menuDropDown.style.display === 'block' ?
    menuDropDown.style.display = 'none':
    menuDropDown.style.display= 'block';
});