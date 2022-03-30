// bird Array start
var bird = [
  {
    "image" : "img/feature/birds/bird/cover.jpg",
    "title": "Simple Bird",
    "button": "hr1",
    "dpic1" : "img/feature/birds/bird/1.PNG",
    "dpic2" : "img/feature/birds/bird/2.PNG"
  },
  {
    "image" : "img/feature/birds/crane/cover.jpg",
    "title": "Crane Bird",
    "button": "hr2",
    "dpic1" : "img/feature/birds/crane/1.PNG",
    "dpic2" : "img/feature/birds/crane/2.PNG",
    "dpic3" : "img/feature/birds/crane/3.PNG"
  },
  {
    "image" : "img/feature/birds/flapping/cover.jpg",
    "title": "Flapping Bird",
    "button": "hr3",
    "dpic1" : "img/feature/birds/flapping/1.PNG",
    "dpic2" : "img/feature/birds/flapping/2.PNG",
    "dpic3" : "img/feature/birds/flapping/3.PNG"
  },
  {
    "image" : "img/feature/birds/owl/cover.jpg",
    "title": "Owl Bird",
    "button": "hr4",
    "dpic1" : "img/feature/birds/owl/1.PNG",
    "dpic2" : "img/feature/birds/owl/2.PNG",
    "dpic3" : "img/feature/birds/owl/3.PNG"
  },
  {
    "image" : "img/feature/birds/pelican/cover.jpg",
    "title": "Pelican Bird",
    "button": "hr5",
    "dpic1" : "img/feature/birds/pelican/1.PNG",
    "dpic2" : "img/feature/birds/pelican/2.PNG"
  },
  {
    "image" : "img/feature/birds/twirling/cover.jpg",
    "title": "Twirling Bird",
    "button": "hr6",
    "dpic1" : "img/feature/birds/twirling/1.PNG"
  }

  
];
for (var b = 0; b < bird.length; b++) {
  document.getElementById("bird").innerHTML +=
    ` <div class="cac col-md-4 mb-4 col-sm-12" id="cac"><img src="${bird[b].image}" class="imag w-100" alt="">
    <div class="details">
      <h4>${bird[b].title}</h4>
      <input type="button" class="btn" value="Try This" onclick="origamishow(${bird[b].button})" id="tog">

    </div>
  </div>
  <div class="row m-5 hrow" id="${bird[b].button}">
  <div class="col-md col-sm-12">
    <div class="row" id="despic">
      <div class="col-md-12 col-sm-12"><img src="${bird[b].dpic1}" alt="" class="image-fluid w-100"></div>
      <div class="col-md-12 col-sm-12"><img src="${bird[b].dpic2}" alt="" class="image-fluid w-100"></div>
      <div class="col-md-12 col-sm-12"><img src="${bird[b].dpic3}" alt="" class="image-fluid w-100"></div>
    </div>
</div>
</div> `
};
// bird array end

// box Array start
var box = [
  {
    "image" : "img/feature/box/candy/cover.jpg",
    "title": "Candy Box",
    "button": "hr7",
    "dpic1" : "img/feature/box/candy/1.PNG",
    "dpic2" : "img/feature/box/candy/2.PNG"
  },
  {
    "image" : "img/feature/box/rectangle/cover.jpg",
    "title": "Rectangle Box",
    "button": "hr8",
    "dpic1" : "img/feature/box/rectangle/1.PNG"
  },
  {
    "image" : "img/feature/box/simple/cover.jpg",
    "title": "Simple",
    "button": "hr9",
    "dpic1" : "img/feature/box/simple/1.PNG",
    "dpic2" : "img/feature/box/simple/2.PNG",
    "dpic3" : "img/feature/box/simple/3.PNG"
  },
  {
    "image" : "img/feature/box/star/cover.jpg",
    "title": "Star Box",
    "button": "hr10",
    "dpic1" : "img/feature/box/star/1.PNG",
    "dpic2" : "img/feature/box/star/2.PNG"
  },
  {
    "image" : "img/feature/box/traditional/cover.gif",
    "title": "Traditional Box",
    "button": "hr11",
    "dpic1" : "img/feature/box/traditional/1.PNG"
  },
  {
    "image" : "img/feature/box/triangle/cover.jpg",
    "title": "Triangle Box",
    "button": "hr12",
    "dpic1" : "img/feature/box/triangle/1.PNG"
  }
  
];
for (var bo = 0; bo < box.length; bo++) {
  document.getElementById("box").innerHTML +=
    ` <div class="cac col-md-4 mb-4 col-sm-12" id="cac"><img src="${box[bo].image}" class="imag w-100" alt="">
    <div class="details">
      <h4>${box[bo].title}</h4>
      <input type="button" class="btn" value="Try This" onclick="origamishow(${box[bo].button})" id="tog">

    </div>
  </div>
  <div class="row m-5 hrow" id="${box[bo].button}">
  <div class="col-md col-sm-12">
    <div class="row" id="despic">
      <div class="col-md-12 col-sm-12"><img src="${box[bo].dpic1}" alt="" class="image-fluid w-100"></div>
      <div class="col-md-12 col-sm-12"><img src="${box[bo].dpic2}" alt="" class="image-fluid w-100"></div>
      <div class="col-md-12 col-sm-12"><img src="${box[bo].dpic3}" alt="" class="image-fluid w-100"></div>
    </div>
</div>
</div> `
};
// box array end

// flower Array start
var flower = [
  {
    "image" : "img/feature/flower/blossom/cover.jpg",
    "title": "Blossom",
    "button": "hr13",
    "dpic1" : "img/feature/flower/blossom/1.PNG",
    "dpic2" : "img/feature/flower/blossom/2.PNG"
  },
  {
    "image" : "img/feature/flower/lily/cover.jpg",
    "title": "Lily",
    "button": "hr14",
    "dpic1" : "img/feature/flower/lily/1.PNG",
    "dpic2" : "img/feature/flower/lily/2.PNG",
    "dpic2" : "img/feature/flower/lily/3.PNG"
  },
  {
    "image" : "img/feature/flower/lotus/cover.jpg",
    "title": "Lotus",
    "button": "hr15",
    "dpic1" : "img/feature/flower/lotus/1.PNG",
    "dpic2" : "img/feature/flower/lotus/2.PNG"
  },
  {
    "image" : "img/feature/flower/rose/cover.jpg",
    "title": "Rose",
    "button": "hr16",
    "dpic1" : "img/feature/flower/rose/1.PNG",
    "dpic2" : "img/feature/flower/rose/2.PNG"
  },
  {
    "image" : "img/feature/flower/tulip/cover.jpg",
    "title": "Tulip",
    "button": "hr17",
    "dpic1" : "img/feature/flower/tulip/1.PNG",
    "dpic2" : "img/feature/flower/tulip/2.PNG"
  },
  {
    "image" : "img/feature/flower/steam/cover.jpg",
    "title": "Steam",
    "button": "hr18",
    "dpic1" : "img/feature/flower/steam/1.PNG"
  },
];
for (var f = 0; f < flower.length; f++) {
  document.getElementById("flower").innerHTML +=
    ` <div class="cac col-md-4 mb-4 col-sm-12" id="cac"><img src="${flower[f].image}" class="imag w-100" alt="">
    <div class="details">
      <h4>${flower[f].title}</h4>
      <input type="button" class="btn" value="Try This" onclick="origamishow(${flower[f].button})" id="tog">

    </div>
  </div>
  <div class="row m-5 hrow" id="${flower[f].button}">
  <div class="col-md col-sm-12">
    <div class="row" id="despic">
      <div class="col-md-12 col-sm-12"><img src="${flower[f].dpic1}" alt="" class="image-fluid w-100"></div>
      <div class="col-md-12 col-sm-12"><img src="${flower[f].dpic2}" alt="" class="image-fluid w-100"></div>
      <div class="col-md-12 col-sm-12"><img src="${flower[f].dpic3}" alt="" class="image-fluid w-100"></div>
    </div>
</div>
</div> `
};
// flower array end


// heart Array start
var heart = [
  {
    "image" : "img/feature/heart/covertc.jpg",
    "title": "Two Color Heart",
    "button": "hr19",
    "dpic1" : "img/feature/heart/h1.gif"
  },
  {
    "image" : "img/feature/heart/coverwh.jpg",
    "title": "Wings Heart",
    "button": "hr20",
    "dpic1" : "img/feature/heart/h2.gif"
  },
  {
    "image" : "img/feature/heart/coverfh.PNG",
    "title": "Family Heart",
    "button": "hr21",
    "dpic1" : "img/feature/heart/h3.gif"
  },
 
];
for (var h = 0; h < heart.length; h++) {
  document.getElementById("heart").innerHTML +=
    ` <div class="cac col-md-4 mb-4 col-sm-12" id="cac"><img src="${heart[h].image}" class="imag w-100" alt="">
    <div class="details">
      <h4>${heart[h].title}</h4>
      <input type="button" class="btn" value="Try This" onclick="origamishow(${heart[h].button})" id="tog">

    </div>
  </div>
  <div class="row m-5 hrow" id="${heart[h].button}">
  <div class="col-md col-sm-12">
    <div class="row" id="despic">
      <div class="col-md-12 col-sm-12"><img src="${heart[h].dpic1}" alt="" class="image-fluid w-100"></div>
      <div class="col-md-12 col-sm-12"><img src="${heart[h].dpic2}" alt="" class="image-fluid w-100"></div>
      <div class="col-md-12 col-sm-12"><img src="${heart[h].dpic3}" alt="" class="image-fluid w-100"></div>
    </div>
</div>
</div> `
};
// heart array end

// animal Array start
var animal = [
  {
    "image" : "img/feature/animals/frog/cover.jpg",
    "title": "Frog",
    "button": "hr22",
    "dpic1" : "img/feature/animals/frog/1.PNG",
    "dpic2" : "img/feature/animals/frog/2.PNG"
  },
  {
    "image" : "img/feature/animals/dog/cover.gif",
    "title": "Dog",
    "button": "hr23",
    "dpic1" : "img/feature/animals/dog/1.PNG",
    "dpic2" : "img/feature/animals/dog/2.PNG"
  },
  {
    "image" : "img/feature/animals/horse/cover.PNG",
    "title": "Horse",
    "button": "hr24",
    "dpic1" : "img/feature/animals/horse/1.PNG",
    "dpic2" : "img/feature/animals/horse/2.PNG"
  },
  {
    "image" : "img/feature/animals/head/cover.jpg",
    "title": "Dragon Head",
    "button": "hr25",
    "dpic1" : "img/feature/animals/head/1.PNG",
    "dpic2" : "img/feature/animals/head/2.PNG"
  },
  {
    "image" : "img/feature/animals/rabbit/cover.jpg",
    "title": "Rabbit",
    "button": "hr26",
    "dpic1" : "img/feature/animals/rabbit/1.PNG",
    "dpic2" : "img/feature/animals/rabbit/2.PNG",
    "dpic3" : "img/feature/animals/rabbit/3.PNG"
  },
  {
    "image" : "img/feature/animals/ladybug/cover.jpg",
    "title": "LadyBug",
    "button": "hr27",
    "dpic1" : "img/feature/animals/ladybug/1.PNG"
  }
  
];
for (var an = 0; an < animal.length; an++) {
  document.getElementById("animal").innerHTML +=
    ` <div class="cac col-md-4 mb-4 col-sm-12" id="cac"><img src="${animal[an].image}" class="imag w-100" alt="">
    <div class="details">
      <h4>${animal[an].title}</h4>
      <input type="button" class="btn" value="Try This" onclick="origamishow(${animal[an].button})" id="tog">

    </div>
  </div>
  <div class="row m-5 hrow" id="${animal[an].button}">
  <div class="col-md col-sm-12">
    <div class="row" id="despic">
      <div class="col-md-12 col-sm-12"><img src="${animal[an].dpic1}" alt="" class="image-fluid w-100"></div>
      <div class="col-md-12 col-sm-12"><img src="${animal[an].dpic2}" alt="" class="image-fluid w-100"></div>
      <div class="col-md-12 col-sm-12"><img src="${animal[an].dpic3}" alt="" class="image-fluid w-100"></div>
    </div>
</div>
</div> `
};
// animal array end

// star Array start
var star = [
  {
    "image" : "img/feature/star/lucky/cover.jpg",
    "title": "Lucky Star",
    "button": "hr28",
    "dpic1" : "img/feature/star/lucky/1.PNG",
    "dpic2" : "img/feature/star/lucky/2.PNG"
  },
  {
    "image" : "img/feature/star/modular/cover.jpg",
    "title": "Modular Star",
    "button": "hr29",
    "dpic1" : "img/feature/star/modular/1.PNG",
    "dpic2" : "img/feature/star/modular/2.PNG"
  },
  {
    "image" : "img/feature/star/pointed/cover.jpg",
    "title": "Pointed Star",
    "button": "hr30",
    "dpic1" : "img/feature/star/pointed/1.PNG",
    "dpic2" : "img/feature/star/pointed/2.PNG"
  },
];
for (var st = 0; st < star.length; st++) {
  document.getElementById("star").innerHTML +=
    ` <div class="cac col-md-4 mb-4 col-sm-12" id="cac"><img src="${star[st].image}" class="imag w-100" alt="">
    <div class="details">
      <h4>${star[st].title}</h4>
      <input type="button" class="btn" value="Try This" onclick="origamishow(${star[st].button})" id="tog">

    </div>
  </div>
  <div class="row m-5 hrow" id="${star[st].button}">
  <div class="col-md col-sm-12">
    <div class="row" id="despic">
      <div class="col-md-12 col-sm-12"><img src="${star[st].dpic1}" alt="" class="image-fluid w-100"></div>
      <div class="col-md-12 col-sm-12"><img src="${star[st].dpic2}" alt="" class="image-fluid w-100"></div>
      <div class="col-md-12 col-sm-12"><img src="${star[st].dpic3}" alt="" class="image-fluid w-100"></div>
    </div>
</div>
</div> `
};
// star array end

// fish array start 
var fish = [
  {
    "image" : "img/feature/fish/coverbutterfly.PNG",
    "title": "Butterfly Fish",
    "button": "hr31",
    "dpic1" : "img/feature/fish/butterflyfish.gif"
  },
  {
    "image" : "img/feature/fish/coverdolphin.PNG",
    "title": "Dolphin Fish",
    "button": "hr32",
    "dpic1" : "img/feature/fish/dolphin.gif"
  },
  {
    "image" : "img/feature/fish/coverkillerwhale.PNG",
    "title": "Killer Whale",
    "button": "hr33",
    "dpic1" : "img/feature/fish/killerwhale.gif"
  },
  {
    "image" : "img/feature/fish/coverray.PNG",
    "title": "Ray Fish",
    "button": "hr34",
    "dpic1" : "img/feature/fish/ray.gif"
  },
  {
    "image" : "img/feature/fish/coversword.PNG",
    "title": "Sword Fish",
    "button": "hr35",
    "dpic1" : "img/feature/fish/swordfish.gif"
  },
  {
    "image" : "img/feature/fish/coverwhale.PNG",
    "title": "Whale",
    "button": "hr36",
    "dpic1" : "img/feature/fish/whale.gif"
  }
];
for (var fi = 0; fi < fish.length; fi++) {
  document.getElementById("fish").innerHTML +=
    ` <div class="cac col-md-4 mb-4 col-sm-12" id="cac"><img src="${fish[fi].image}" class="imag w-100" alt="">
    <div class="details">
      <h4>${fish[fi].title}</h4>
      <input type="button" class="btn" value="Try This" onclick="origamishow(${fish[fi].button})" id="tog">

    </div>
  </div>
  <div class="row m-5 hrow" id="${fish[fi].button}">
  <div class="col-md-12 col-sm-12">
    <div class="row" id="despic">
      <div class="col-md-12 col-sm-12"><img src="${fish[fi].dpic1}" alt="" class="image-fluid w-100"></div>
    </div>
</div>
</div> `
};
// fish array end

// aeroplane array start 
var aeroplane = [
  {
    "image" : "img/feature/aeroplanes/model1c.PNG",
    "title": "Plane type 1",
    "button": "hr37",
    "dpic1" : "img/feature/aeroplanes/model1.gif"
  },
  {
    "image" : "img/feature/aeroplanes/model2c.PNG",
    "title": "Plane type 2",
    "button": "hr38",
    "dpic1" : "img/feature/aeroplanes/model2.gif"
  },
   {
    "image" : "img/feature/aeroplanes/model3c.PNG",
    "title": "Plane type 3",
    "button": "hr39",
    "dpic1" : "img/feature/aeroplanes/model3.gif"
  },
  {
    "image" : "img/feature/aeroplanes/model4c.PNG",
    "title": "Plane type 4",
    "button": "hr40",
    "dpic1" : "img/feature/aeroplanes/model4.gif"
  },
  {
    "image" : "img/feature/aeroplanes/model5c.PNG",
    "title": "Plane type 5",
    "button": "hr41",
    "dpic1" : "img/feature/aeroplanes/model5.gif"
  },
  {
    "image" : "img/feature/aeroplanes/model6c.PNG",
    "title": "Plane type 6",
    "button": "hr42",
    "dpic1" : "img/feature/aeroplanes/model6.gif"
  }
];
for (var a = 0; a < aeroplane.length; a++) {
  document.getElementById("aeroplane").innerHTML +=
    ` <div class="cac col-md-4 mb-4 col-sm-12" id="cac"><img src="${aeroplane[a].image}" class="imag w-100" alt="">
    <div class="details">
      <h4>${aeroplane[a].title}</h4>
      <input type="button" class="btn" value="Try This" onclick="origamishow(${aeroplane[a].button})" id="tog">

    </div>
  </div>
  <div class="row m-5 hrow" id="${aeroplane[a].button}">
  <div class="col-md col-sm-12">
    <div class="row" id="despic">
      <div class="col-md col-sm-12"><img src="${aeroplane[a].dpic1}" alt="" class="image-fluid w-100"></div>
    </div>
</div>
</div> `
};
// aeroplane array end

// ship Array start
var ship = [
  {
    "image" : "img/feature/ships/covers.jpg",
    "title": "Simple Boat",
    "button": "hr43",
    "dpic1" : "img/feature/ships/ship3.png"
  },
  {
    "image" : "img/feature/ships/coverss.jpg",
    "title": "Steam Ship",
    "button": "hr44",
    "dpic1" : "img/feature/ships/ship1.jpg"
  },
  {
    "image" : "img/feature/ships/covermb.jpg",
    "title": "Motor Boat",
    "button": "hr45",
    "dpic1" : "img/feature/ships/ship2.jpg"
  },
];
for (var s = 0; s < ship.length; s++) {
  document.getElementById("ship").innerHTML +=
    ` <div class="cac col-md-4 mb-4 col-sm-12" id="cac"><img src="${ship[s].image}" class="imag w-100" alt="">
    <div class="details">
      <h4>${ship[s].title}</h4>
      <input type="button" class="btn" value="Try This" onclick="origamishow(${ship[s].button})" id="tog">

    </div>
  </div>
  <div class="row m-5 hrow" id="${ship[s].button}">
  <div class="col-md col-sm-12">
    <div class="row" id="despic">
      <div class="col-md-12 col-sm-12"><img src="${ship[s].dpic1}" alt="" class="image-fluid w-100"></div>
      <div class="col-md-12 col-sm-12"><img src="${ship[s].dpic2}" alt="" class="image-fluid w-100"></div>
      <div class="col-md-12 col-sm-12"><img src="${ship[s].dpic3}" alt="" class="image-fluid w-100"></div>
    </div>
</div>
</div> `
};
// ship array end

// dinosaur Array start
var dinosaur = [
  {
    "image" : "img/feature/dinosaur/cover1.PNG",
    "title": "Triceratops",
    "button": "hr46",
    "dpic1" : "img/feature/dinosaur/triceretops.gif"
  },
  {
    "image" : "img/feature/dinosaur/cover2.PNG",
    "title": "Deinonychus",
    "button": "hr47",
    "dpic1" : "img/feature/dinosaur/deinon.gif"
  },
  {
    "image" : "img/feature/dinosaur/cover3.PNG",
    "title": "Giganotosaurus",
    "button": "hr48",
    "dpic1" : "img/feature/dinosaur/gigano.gif"
  },
];
for (var d = 0; d < dinosaur.length; d++) {
  document.getElementById("dinosaur").innerHTML +=
    ` <div class="cac col-md-4 mb-4 col-sm-12" id="cac"><img src="${dinosaur[d].image}" class="imag w-100" alt="">
    <div class="details">
      <h4>${dinosaur[d].title}</h4>
      <input type="button" class="btn" value="Try This" onclick="origamishow(${dinosaur[d].button})" id="tog">

    </div>
  </div>
  <div class="row m-5 hrow" id="${dinosaur[d].button}">
  <div class="col-md col-sm-12">
    <div class="row" id="despic">
      <div class="col-md-12 col-sm-12"><img src="${dinosaur[d].dpic1}" alt="" class="image-fluid w-100"></div>
    </div>
</div>
</div> `
};
// dinosaur array end




function origamishow(id_) {
  $('#tog').click(function () {

  })
  $(id_).toggle('slow');


}