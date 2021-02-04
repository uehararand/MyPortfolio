$("#about-link").on('click', function() {
  const aboutArea = $("#about-area").offset().top;
  $(window).scrollTop(aboutArea);
});
$("#event-link").on('click', function(){
const eventArea = $("#event-area").offset().top;
$(window).scrollTop(eventArea);
});

$("#sns-link").on('click', function(){
const snsArea = $("#sns-area").offset().top;
$(window).scrollTop(snsArea);
});
$("#contact-link").on('click', function(){
const snsArea = $("#contact-area").offset().top;
$(window).scrollTop(snsArea);
});
	
// $('.slider').slick();

$('#language-wrapper').hover(
  function() {
    $('.language-text').fadeIn();
  },
  function() {
    $('.language-text').fadeOut();
  }
);