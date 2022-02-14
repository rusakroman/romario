
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

modalBtn.click(function(){
  $('.navigation__list').show(1000); 
});
