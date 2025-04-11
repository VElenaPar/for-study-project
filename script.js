let images = [{
  url: "images/image_1.png",
  title: "Rostov-on-Don, Admiral",
  city: "Rostov-on-Don LCD admiral",
  area: "81 m2",
  time: "3.5 months",
  cost: "Upon request"
}, {
  url: "images/image_2.png",
  title: "Sochi Thieves",
  city: "Sochi Thieves",
  area: "105 m2",
  time: "4 months",
  cost: "Upon request"
}, {
  url: "images/image_3.png",
  title: "Rostov-on-Don Patriotic",
  city: "Rostov-on-Don Patriotic",
  area: "93 m2",
  time: "3 months",
  cost: "Upon request"
}];

function initSlider(options) {
  if (!images || !images.length) return;

  options = options || {
    dots: true,
    autoplay: false
  };

  let sliderImages = document.querySelector(".slider__images");
  let sliderArrows = document.querySelectorAll(".slider__arrow");
  let sliderDots = document.querySelector(".slider__dots");
  let sliderLinks = document.querySelectorAll(".slider__link");

  initImages();
  initArrows();
  initLinks();

  if (options.dots) {
    initDots();
  }

  if (options.autoplay) {
    initAutoplay();
  }

  function initImages() {
    images.forEach((image, index) => {
      let imageDiv = `<div class="image n${index} ${index === 0 ? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
      sliderImages.innerHTML += imageDiv;
    });
  }

  function changeInfo(num) {
    const currentImage = images[num];
    
    document.querySelector(".object__city p").textContent = currentImage.city;
    document.querySelector(".object__area p").textContent = currentImage.area;
    document.querySelector(".object__time p").textContent = currentImage.time;
    document.querySelector(".object__repair_cost p").textContent = currentImage.cost;
  }

  function initArrows() {
    sliderArrows.forEach(arrow => {
      arrow.addEventListener("click", function() {
        let curNumber = +sliderImages.querySelector(".active").dataset.index;
        let nextNumber;
        if (arrow.classList.contains("left")) {
          nextNumber = curNumber === 0 ? images.length - 1 : curNumber - 1;
        } else {
          nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;
        }
        moveSlider(nextNumber);
      });
    });
  }

  function initLinks() {
    sliderLinks.forEach(link => {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        moveSlider(this.dataset.index);
      });
    });
  }

  function initDots() {
    images.forEach((image, index) => {
      let dot = `<div class="slider__dots-item n${index} ${index === 0 ? "active" : ""}" data-index="${index}"></div>`;
      sliderDots.innerHTML += dot;
    });
    
    sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
      dot.addEventListener("click", function() {
        moveSlider(this.dataset.index);
      });
    });
  }

  function moveSlider(num) {
    num = parseInt(num);
    
    // Update images
    sliderImages.querySelector(".active").classList.remove("active");
    sliderImages.querySelector(`.n${num}`).classList.add("active");
    
    // Update dots
    if (options.dots) {
      sliderDots.querySelector(".active").classList.remove("active");
      sliderDots.querySelector(`.n${num}`).classList.add("active");
    }
    
    // Update links
    document.querySelector(".slider__link.active").classList.remove("active");
    document.querySelector(`.slider__link[data-index="${num}"]`).classList.add("active");
    
    // Update characteristics
    changeInfo(num);
  }

  function initAutoplay() {
    setInterval(() => {
      let curNumber = +sliderImages.querySelector(".active").dataset.index;
      let nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;
      moveSlider(nextNumber);
    }, options.autoplayInterval);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  initSlider({
    dots: true,
    autoplay: false
  });
});