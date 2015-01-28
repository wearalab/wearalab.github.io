//jquery is ready
$(function() {

  //responsive single page scrollTo and menu item styling

  $('.nav-links a').bind('click',function(e){

    var $anchor = $(this);

    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, "fast");

    e.preventDefault();
  });
});
