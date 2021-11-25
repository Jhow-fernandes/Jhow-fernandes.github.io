$(window).on('load', function () {
  $('#preloader .inner').fadeOut();
  $('#preloader').delay(500).fadeOut('slow'); 
  $('body').delay(600).css({'overflow': 'visible'});
})
const html = document.querySelector('html');
const dark = document.querySelector('#dark a i');


dark.addEventListener('click', function () {
  html.classList.toggle('dark');
});
