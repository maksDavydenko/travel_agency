$(document).ready(function(){
       
    // конвертер валют

        let courseUSD = 0;
        let courseEUR = 0; 
    
        $.ajax({
    
        type: 'get',
    
        url: 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange',
    
        dataType: 'xml',
    
        success: function(response) {
            $(response).find("currency").each(function(i,elem) {
                if($(elem).find('r030').text() == '840') {
                    courseUSD = (+$(elem).find('rate').text()).toFixed(2);
                    $('.exchange-rate__USD').text(`USD/UAH ${courseUSD}`);
                }

                if($(elem).find('r030').text() == '978'){
                    courseEUR = (+$(elem).find('rate').text()).toFixed(2);
                    $('.exchange-rate__EUR').text(`EUR/UAH ${courseEUR}`);
                }
            });
        }
    });
});
