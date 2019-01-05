jQuery(document).ready(function ($) {
  $(window).scroll(function(){
    var scrollTop = 142;
    if($(window).scrollTop() >= scrollTop){
      $('#navbar-secondary').css({
        position : 'fixed',
        top : '0'
      });
    }
    if($(window).scrollTop() < scrollTop){
      $('#navbar-secondary').removeAttr('style');
    }
  })
