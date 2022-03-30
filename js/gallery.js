
var gallery = [

  {
    "image": "img/4.jpg",
    "title": "Duck & Goose",
    "image1": "img/5.jpg",
    "title1": "Hen & Chicks",
    "image2": "img/6.jpg",
    "title2": "Horse Rider"

  },
  {
    "image": "img/1.jpg",
    "title": "fox",
    "image1": "img/2.jpg",
    "title1": "Porcupine",
    "image2": "img/3.jpg",
    "title2": "Grass hopper"

  },
  {
    "image": "img/7.jpg",
    "title": "dog",
    "image1": "img/8.jpg",
    "title1": "fighter plane",
    "image2": "img/9.jpg",
    "title2": "eagle"

  },
  {
    "image": "img/10.jpg",
    "title": "lion",
    "image1": "img/11.jpg",
    "title1": "little bird",
    "image2": "img/12.jpg",
    "title2": "crane"

  },
  {
    "image": "img/13.jpg",
    "title": "Bunny",
    "image1": "img/14.jpg",
    "title1": "fan",
    "image2": "img/15.jpg",
    "title2": "flower"

  },
  {
    "image": "img/16.jpg",
    "title": "box",
    "image1": "img/17.jpg",
    "title1": "fox",
    "image2": "img/18.jpg",
    "title2": "bird"

  },
  {
    "image": "img/19.jpg",
    "title": "dragon",
    "image1": "img/20.jpg",
    "title1": "cat face",
    "image2": "img/21.jpg",
    "title2": "mask"

  }
];
for (var g = 0; g < gallery.length; g++) {
  document.getElementById("gal").innerHTML +=
    `
    <div class="row">
    <div class="col-md col-sm-12" id="cl" data-aos="zoom-out-right" data-aos-duration="1000">
    <a href="${gallery[g].image}" data-lightbox="mygallery" ><img class="w-100" src="${gallery[g].image}" alt=""></a>
   <div class="details">
     <h4>${gallery[g].title}</h4>
   </div></div>
   <div class="col-md col-sm-12 " id="cl"  data-aos="zoom-out-down" data-aos-duration="1000">
   <a href="${gallery[g].image1}" data-lightbox="mygallery" ><img class="w-100" src="${gallery[g].image1}" alt=""></a>
     <div class="details">
       <h4>${gallery[g].title1}s</h4>
     </div></div>
     <div class="col-md col-sm-12" id="cl" data-aos="zoom-out-left" data-aos-duration="1000">
     <a href="${gallery[g].image2}" data-lightbox="mygallery" ><img class="w-100" src="${gallery[g].image2}" alt=""></a>
       <div class="details">
         <h4>${gallery[g].title2}</h4>
       </div></div>
  </div> 
    
    `
};

