var complex = [
  {
    "image" : "img/complex/cock/cover.jpg",
    "title": "Origami Cock",
    "button": "hr1",
    "dpic1" : "img/complex/cock/1.PNG",
    "dpic2" : "img/complex/cock/2.PNG"
  },
  {
    "image" : "img/complex/duck/cover.jpg",
    "title": "Origami Duck",
    "button": "hr2",
    "dpic1" : "img/complex/duck/1.PNG",
    "dpic2" : "img/complex/duck/2.PNG",
    
  },
  {
    "image" : "img/complex/fox/cover.jpg",
    "title": "Origami Fox",
    "button": "hr3",
    "dpic1" : "img/complex/fox/1.PNG",
    "dpic2" : "img/complex/fox/2.PNG",
    
  },
  {
    "image" : "img/complex/mouse/cover.jpg",
    "title": "Origami Mouse",
    "button": "hr4",
    "dpic1" : "img/complex/mouse/1.PNG",
    "dpic2" : "img/complex/mouse/2.PNG",
    "dpic3" : "img/complex/mouse/3.PNG",
    
  },
  {
    "image" : "img/complex/rabbit/cover.jpg",
    "title": "Origami Rabbit",
    "button": "hr5",
    "dpic1" : "img/complex/rabbit/1.PNG",
    "dpic2" : "img/complex/rabbit/2.PNG",
    "dpic3" : "img/complex/rabbit/3.PNG",
    
  },
  {
    "image" : "img/complex/horse/cover.jpg",
    "title": "Origami Horse",
    "button": "hr6",
    "dpic1" : "img/complex/horse/1.PNG",
    "dpic2" : "img/complex/horse/2.PNG",
    "dpic3" : "img/complex/horse/3.PNG",
    "dpic4" : "img/complex/horse/4.PNG",
    "dpic5" : "img/complex/horse/5.PNG",
    "dpic6" : "img/complex/horse/6.PNG",
    "dpic7" : "img/complex/horse/7.PNG"
  },
  {
    "image" : "img/complex/dragon/cover.PNG",
    "title": "Origami Dragon",
    "button": "hr7",
    "dpic1" : "img/complex/dragon/1.PNG",
    "dpic2" : "img/complex/dragon/2.PNG",
    "dpic3" : "img/complex/dragon/3.PNG",
    "dpic4" : "img/complex/dragon/4.PNG",
    "dpic5" : "img/complex/dragon/5.PNG",
    "dpic6" : "img/complex/dragon/6.PNG",
    "dpic7" : "img/complex/dragon/7.PNG",
    "dpic8" : "img/complex/dragon/8.PNG"
  },
  {
    "image" : "img/complex/elephant/cover.jpg",
    "title": "Origami Elephant",
    "button": "hr8",
    "dpic1" : "img/complex/elephant/1.PNG",
    "dpic2" : "img/complex/elephant/2.PNG",
    "dpic3" : "img/complex/elephant/3.PNG",
    "dpic4" : "img/complex/elephant/4.PNG",
    "dpic5" : "img/complex/elephant/5.PNG",
    "dpic6" : "img/complex/elephant/6.PNG",
    "dpic7" : "img/complex/elephant/7.PNG",
    "dpic8" : "img/complex/elephant/8.PNG"
  },
  {
    "image" : "img/complex/eagle/cover.jpg",
    "title": "Origami Eagle",
    "button": "hr9",
    "dpic1" : "img/complex/eagle/1.PNG",
    "dpic2" : "img/complex/eagle/2.PNG",
    "dpic3" : "img/complex/eagle/3.PNG",
    "dpic4" : "img/complex/eagle/4.PNG",
    "dpic5" : "img/complex/eagle/5.PNG",
    "dpic6" : "img/complex/eagle/6.PNG",
    "dpic7" : "img/complex/eagle/7.PNG",
    "dpic8" : "img/complex/eagle/8.PNG",
    "dpic9" : "img/complex/eagle/9.PNG",
    "dpic10" : "img/complex/eagle/10.PNG",
    "dpic11" : "img/complex/eagle/11.PNG",
  }
];
for (var i = 0; i < complex.length; i++) {
  document.getElementById("car").innerHTML +=
    ` <div class="cac col-md-4 mb-4 col-sm-12" id="cac"><img src="${complex[i].image}" class="imag w-100" alt="">
    <div class="details">
      <h4>${complex[i].title}</h4>
      <input type="button" class="btn" value="Try This" onclick="origamishow(${complex[i].button})" id="tog">

    </div>
  </div>
  <div class="row m-5 hrow" id="${complex[i].button}">
  <div class="col-md col-sm-12">
    <div class="row" id="ghj">
      <div class="col-md-12"><img src="${complex[i].dpic1}" alt="" class="w-100"></div>
      <div class="col-md-12"><img src="${complex[i].dpic2}" alt="" class="w-100"></div>
      <div class="col-md-12"><img src="${complex[i].dpic3}" alt="" class="w-100"></div>
      <div class="col-md-12"><img src="${complex[i].dpic4}" alt="" class="w-100"></div>
      <div class="col-md-12"><img src="${complex[i].dpic5}" alt="" class="w-100"></div>
      <div class="col-md-12"><img src="${complex[i].dpic6}" alt="" class="w-100"></div>
      <div class="col-md-12"><img src="${complex[i].dpic7}" alt="" class="w-100"></div>
      <div class="col-md-12"><img src="${complex[i].dpic8}" alt="" class="w-100"></div>
      <div class="col-md-12"><img src="${complex[i].dpic9}" alt="" class="w-100"></div>
      <div class="col-md-12"><img src="${complex[i].dpic10}" alt="" class="w-100"></div>
      <div class="col-md-12"><img src="${complex[i].dpic11}" alt="" class="w-100"></div>
      
    </div>
</div>
</div> `
};


(function ($) {
  $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
    if (!$(this).next().hasClass('show')) {
      $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass('show');

    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
      $('.dropdown-submenu .show').removeClass("show");
    });

    return false;
  });
})(jQuery)
AOS.init();

function origamishow(id_) {
  $('#tog').click(function () {

  })
  $(id_).toggle('slow');


}