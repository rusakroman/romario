
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
  $('.main-wrapper').show(1000); 
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
	


const modalClose = $('.modal-close')

modalClose.click(function(){
  $('.main-wrapper').hide(1000); 
});

const modalOrderTitle = $('.modal-form__title')
const modalOrderInput = $('.modal-form__input')

  modalOrderInput.focus(function(){
  modalOrderTitle.text(`Введите ${$(this).attr('placeholder').toLowerCase()}`)
})

  modalOrderInput.blur(function(){
  modalOrderTitle.text('Заполните форму');
})



$('.modal').submit(function(event){
  event.preventDefault();
  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/todos',
    type: 'POST',
    data: $(this).serialize(),
    statusCode: {
    201: function(data) {
      this.sucсess(data);
      }
    },
    sucсess(data){
      console.log(modalOrderTitle);
      modalOrderTitle.text('Спасибо ваша заявка принята, номер заявки' + '' + data.id)
      $('modal').slideUp(300);
    },
    error(){
      modalOrderTitle.text('Что-то пошло не так')
    }
  })
});  

// const modalOrderTitle2 = $('.hall-form__title')

// $('.hall-form').submit(function(event){
//   event.preventDefault();
//   $.ajax({
//     url: 'https://jsonplaceholder.typicode.com/todos',
//     type: 'POST',
//     data: $(this).serialize(),
//     statusCode: {
//     201: function(data) {
//       this.sucсess(data);
//       }
//     },
//     sucсess(data){
//       console.log(modalOrderTitle2);
//       modalOrderTitle2.text('Спасибо ваша заявка принята, номер заявки' + '' + data.id)
//       $('hall-form').slideUp(300);
//     },
//     error(){
//       modalOrderTitle2.text('Что-то пошло не так')
//     }
//   })
// });  










//   const modalBtn = $('.butclick__button')

// const modalBtn2 = $('.helper__button')

// const modalBtn3 = $('.header__button')

// const modalClose = $('.cross')

// const modalClose2 = $('.header__button')

// const modalOrderTitle = $('.modal__title')

// const modalOrderTitle2 = $('.action__title')

// const modalOrderInput = $('.modal__input')

// modalBtn.click(function(){
//   $('.modal').show(1000); 
// });

// modalBtn2.click(function(){
//   console.log("Привет!");
//   $('.modal').show(1000); 
// });

// modalBtn3.click(function(){
//   $('.burger-menu').fadeToggle(1000); 
// });


// modalClose.click(function(){
//   $('.modal').hide(500); 
// });

// modalClose.click(function(){
//   $('.modal').hide(500); 
// });

// modalOrderInput.focus(function(){
//   modalOrderTitle
//   .text(`Введите ${$(this).attr('placeholder').toLowerCase()}`)
// })

// modalOrderInput.blur(function(){
//   modalOrderTitle.text('Заполните форму');
// })

// $('.modal').submit(function(event){
//   event.preventDefault();
//   $.ajax({
//     url: 'https://jsonplaceholder.typicode.com/todos',
//     type: 'POST',
//     data: $(this).serialize(),
//     statusCode: {
//     201: function(data) {
//       this.sucсess(data);
//       }
//     },
//     sucсess(data){
//       console.log(modalOrderTitle);
//       modalOrderTitle.text('Спасибо ваша заявка принята, номер заявки' + data.id)
//       $('modal').slideUp(300);
//     },
//     error(){
//       modalOrderTitle.text('Что-то пошло не так')
//     }
//   })
// });  

// $('.communication__form').submit(function(event){
//   event.preventDefault();
//   $.ajax({
//     url: 'https://jsonplaceholder.typicode.com/todos',
//     type: 'POST',
//     data: $(this).serialize(),
//     statusCode: {
//     201: function(data) {
//       this.sucсess(data);
//       }
//     },
//     sucсess(data){
//       console.log(modalOrderTitle2);
//       modalOrderTitle2.text('Спасибо ваша заявка принята, номер заявки' + data.id)
//       $('communication__form').slideUp(300);
//     },
//     error(){
//       modalOrderTitle2.text('Что-то пошло не так')
//     }
//   })
// });  


