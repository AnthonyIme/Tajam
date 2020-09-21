

function ibg() {

    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}

ibg();

function ibg() {

    $.each($('.ibg'), function(index, val) {
        if ($(this).find('img').length > 0) {
            $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
        }
    });
}

ibg();


$(document).ready(function() {
    $('.slider').slick({
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1800
    });
})



        $(document).ready(function () {
            $('.header__burger').click(function (event) {
                $('.header__burger,.header__menu').toggleClass('active');
            })
        })

        $(function(){

            $('.header__burger__button').on('click', function() {
               $('.nav').slideToggle(300, function(){
                    if( $(this).css('display') === "none"){
                        $(this).removeAttr('style');
                    }
               });
        
            });
        
        });


        $(".t506__title:eq(0)").addClass("numberup");
        $(".t506__title:eq(1)").addClass("numberup1");
        $(".t506__title:eq(2)").addClass("numberup2");
        $(".t506__title:eq(2)").addClass("numberup3");

 $(function () { 
     let target_block = $(".numberup"); 
     let blockStatus = true;  
     $(window).scroll(function() { 
         let scrollEvent = ($(window).scrollTop() > ($(target_block).offset().top - $(window).height())); 
     
         if(scrollEvent && blockStatus) {  
             blockStatus = false; 

             $({numberValue: 0}).animate({numberValue: 6400}, { 
                 duration: 2500, 
                 easing: "swing", 
                 step: function(val) {  
                     $(".numberup").html(Math.ceil(val)); 
                 } 
             }); 
             
             $({numberValue: 0}).animate({numberValue: 120}, { 
                 duration: 2500, 
                 easing: "swing", 
                 step: function(val) {  
                     $(".numberup1").html(Math.ceil(val)); 
                 } 
             }); 
             
                 $({numberValue: 0}).animate({numberValue: 360}, { 
                 duration: 2500, 
                 easing: "swing", 
                 step: function(val) { 
                     let numpsace = Math.ceil(val);
                     let format = String(numpsace).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
                     $(".numberup2").html(format); 
                 }
             }); 

             
             $({numberValue: 0}).animate({numberValue: 42}, { 
                duration: 2500, 
                easing: "swing", 
                step: function(val) { 
                    let numpsace = Math.ceil(val);
                    let format = String(numpsace).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
                    $(".numberup3").html(format); 
                } 
            }); 
         } 
     }); 
 }); 

 // animations 
 new WOW().init();