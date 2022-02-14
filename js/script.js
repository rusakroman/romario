
new Swiper('.swiper', {
  // Optional parameters

  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.button-right',
    prevEl: '.button-left',
  },

});


ymaps.ready(init);
        function init(){
            const usachevaMap = new ymaps.Map("map_usacheva", {
                center: [55.723151, 37.565021],
                zoom: 17
            });

            // const mark = new ymaps.Placemark([55.723151, 37.565021])
            const mark = new ymaps.Placemark([55.723151, 37.565021],{} , {
              iconLayout: 'default#image',
              iconImageHref: 'img/gamepad.png'
            })
            usachevaMap.geoObjects.add(mark)
        }



let icons = {
  header: "acc__accord",
  activeHeader: "acc__accord acc__accord-active"
};

$('.questions__list').accordion({
  active: true,
  collapsible: true,
  heightStyle: 'content',
  icons: icons
});

const modalBtn = $('.burger')
const modalkaBtn = $('.header__button')

modalBtn.click(function(){
  $('.navigation__list').show(1000); 
});

modalkaBtn.click(function(){
  $('.modalka').show(1000); 
});




// Плавный скролл
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};
	