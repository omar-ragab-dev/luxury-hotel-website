// navbar
const ul = document.querySelector(".header nav ul");
const toggelBtn = document.querySelector("#menu-btn");

toggelBtn.addEventListener("click",()=>{
    ul.classList.toggle("active")
})

window.onscroll = ()=>{
    ul.classList.remove("active")
}


var swiper = new Swiper(".home-slider", {
   loop:true,
   effect: "coverflow",
   spaceBetween: 30,
   grabCursor: true,
   coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
   },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});


var swiper = new Swiper(".gallery-slider", {
   loop:true,
   effect: "coverflow",
   slidesPerView: "auto",
   centeredSlides: true,
   grabCursor: true,
   coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
   },
   pagination: {
      el: ".swiper-pagination",
    },
});



var swiper = new Swiper(".reviews-slider", {
   loop:true,
   slidesPerView: "auto",
   grabCursor: true,
   spaceBetween: 30,
   pagination: {
      el: ".swiper-pagination",
   },
   breakpoints: {
      768: {
        slidesPerView: 1,
      },
      991: {
        slidesPerView: 2,
      },
   },
});



// const faqBoxes = document.querySelectorAll(".faq .box");

// faqBoxes.forEach(box => {
//     const flex = box.querySelector(".flex");   
//     flex.addEventListener("click", () => {
//         box.classList.toggle("active");
//     });
// });


const faqBoxes = document.querySelectorAll(".faq .box");

faqBoxes.forEach(box => {
    const flex = box.querySelector(".flex");
    flex.addEventListener("click", () => {
        faqBoxes.forEach(b => {
            if (b !== box) b.classList.remove("active");
        });
        box.classList.toggle("active");
    });
});


const btnToUp = document.querySelector('.footer .btn_to_top');
window.addEventListener("scroll",()=>{
    if (this.scrollY >= 150){
        btnToUp.classList.add("show")
    }else{
        btnToUp.classList.remove("show")
    }
})