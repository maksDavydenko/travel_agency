const turists = document.querySelector('.turists');
const plants = document.querySelector('.plants');
let start = false;

window.addEventListener('scroll', ()=> {
    let rect = turists.getBoundingClientRect();
    let elemTop = rect.top;
    let elemBottom = rect.bottom;

    let isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
  
    if(isVisible && !start){
       
        turists.style.left = '52%';
        plants.style.left = '66%';

        $(".numUp").spincrement({
            duration: 2500,
            leeway: 50,
            thousandSeparator: false
        });
            
        start = true;
    }
            
});



