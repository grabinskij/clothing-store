$(function(){

    $(document).ready(function(){
$('.slider').slick({
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 3000,
    prevArrow: '<img class="slider__arrows slider__arrows-left" src="img/arrows-left.png" alt=""></img>',
    nextArrow: '<img class="slider__arrows slider__arrows-right" src="img/arrows-right.png" alt=""></img>',
    responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            slidesToShow: 1
          }
        }
      ]
});
});

$(function frmotpr(){
    var field = new Array("name_f", "contact_f", "mssg_f", "tel_f");
    $("#file_form").submit(function() {
        var error=0;
        $("#file_form").find(":input").each(function() {
            for(var i=0;i<field.length;i++){
                if($(this).attr("name")==field[i]){
                    if(!$(this).val()){
                        $(this).addClass('notvalid');
                        error=1;    
                    }
                    else{
                        $(this).removeClass('notvalid');
                    }
                }                       
            }               
       })
        if(error==0){
        return true;
        }else{ var err_text = "";
        if(error==1)  err_text="Поле обязательно для заполнения";
        $("#messenger").html(err_text); 
        $("#messenger").fadeIn("slow"); 
        return false;
        }
    })
});

// Код для меню і бургер-меню

$('.header__btn-menu, .header__menu ul li a').click(function(event){
    $('.header__btn-menu, .header__menu ul').toggleClass('active');
});

});



$(function(){

    $('.dropbtn').click(function() {
        $(this).toggleClass('active');
        $(this).nextUntil('.dropbtn').toggle('slow');
    });    
});











