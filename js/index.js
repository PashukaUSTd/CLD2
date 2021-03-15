// window.addEventListener('DOMContentLoaded', function () {
$(document).ready(function () {   // событие .ready jquery аналог события DOMContentLoaded
  //меню по нажатию на бургер
  $('#burger').on('click', () => {
    $('#menu').toggleClass('is-active');
    $('#logo').addClass('move-logo');
    $('.header-menu').css('transition', '1s transform ease-in-out')
  });
  // закрытие меню
  $('#cross').on('click', () => {
    $('#menu').removeClass('is-active');
    $('#logo').removeClass('move-logo');
    $('.header-menu').css('transition', '0.3s transform ease-in-out')
  });
  $(window).resize(() => {
    $('#menu').removeClass('is-active');
    $('#logo').removeClass('move-logo')
  });

  // swiper
  var mySwiper = new Swiper('.swiper-container', {
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 3000,
    },
  });

  //переход по якорям
  $('nav a').on('click', function(event) {
    event.preventDefault(); //отменяем действие по умолчанию

    let href = $(this).attr('href');

    let headerHeight = $('header').height();

    let offset = $(href).offset().top - headerHeight;


    $('html, body').animate({
      scrollTop: offset,
    }, 700);
  });

  //подключаем кнопку ведущую в начало страницы
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('.quicknav').fadeIn();
    } else {
      $('.quicknav').fadeOut();
    }
  });

  $('.quicknav').click(function () {
    $("html, body").animate({ scrollTop: 0 }, 700);
    return false;
  });

  // tabs
  document.querySelectorAll('.our-job-btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function(event){
      const path = event.currentTarget.dataset.path
      
      document.querySelectorAll('.our-job-left-description').forEach(function (tabContent) {
        tabContent.classList.remove('our-job-left-description--active')
      });
      document.querySelector(`[data-target = "${path}"]`).classList.add('our-job-left-description--active')
    });
  });

  $(function () {
    $("#accordion").accordion({
      collapsible: true,
      heightStyle: "fill"
    });
  });

  //map
  ymaps.ready(init);
  function init(){
      // Создание карты.
      var myMap = new ymaps.Map("map", {
          // Координаты центра карты.
          // Порядок по умолчанию: «широта, долгота».
          // Чтобы не определять координаты центра карты вручную,
          // воспользуйтесь инструментом Определение координат.
          center: [55.76, 37.64],
          // Уровень масштабирования. Допустимые значения:
          // от 0 (весь мир) до 19.
          zoom: 7
      });
  }
});
