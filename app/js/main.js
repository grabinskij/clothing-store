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



function validateForm() {
  var name = document.getElementById('name_f').value.trim();
  var phone = document.getElementById('tel_f').value.trim();
  var email = document.getElementById('contact_f').value.trim();
  var message = document.getElementById('message_f').value.trim();

  var error = "";

  if (name === "") {
      error += "Name field is required.<br>";
  }

  if (phone === "") {
      error += "Phone field is required.<br>";
  }

  if (email === "") {
      error += "Email field is required.<br>";
  } else if (!isValidEmail(email)) {
      error += "Invalid email address.<br>";
  }

  if (message === "") {
      error += "Message field is required.<br>";
  }

  if (error !== "") {
      document.getElementById('error_message').innerHTML = error;
      document.getElementById('error_message').style.display = "block";
      document.getElementById('success_message').style.display = "none";
  } else {
      document.getElementById('error_message').style.display = "none";
      document.getElementById('success_message').innerHTML = "Form submitted successfully!";
      document.getElementById('success_message').style.display = "block";
      resetForm();
  }
}

function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function resetForm() {
  document.getElementById('file_form').reset();
}

$(document).ready(function() {
  $('#sub_f').click(function() {
      event.preventDefault();
      validateForm();
  });
});



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











