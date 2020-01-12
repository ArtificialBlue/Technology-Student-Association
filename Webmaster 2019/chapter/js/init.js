(function($){
  $(function(){
  	
    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

var instance = M.Carousel.init({
    fullWidth: true
  });

  // Or with jQuery

  $('.carousel.carousel-slider').carousel({
    fullWidth: true
  });
autoplay();
function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4500);
}

$('.collapsible').collapsible();

$(function() {
	$('.profile-card').matchHeight();
});
