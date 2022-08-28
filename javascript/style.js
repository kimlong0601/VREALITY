//menu toggle
const menuToggle = document.querySelector('.menu_toggle');
const menu = document.querySelector('.menu');
const menuClose = document.querySelector('.menu_close');

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    menu.classList.toggle("active");
});

menuClose.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    menu.classList.remove("active");
});

//shrink
const headerShrink = document.querySelector(".header");
window.addEventListener("scroll", () => {
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerShrink.classList.add("shrink");
    }
    else{
        headerShrink.classList.remove("shrink");
    }
})

//scroll into view
const links = document.querySelectorAll(".menu-link");
    links.forEach((item) => {
        item.addEventListener("click", () => {
            const view = document.getElementById(item.getAttribute("data-link"));
            view.scrollIntoView({behavior:"smooth", block:"center"});
        })
    })

//scroll to top
const button = document.getElementById("scrollTop-btn");
window.addEventListener("scroll", () => {
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        button.style.display = "block";
    }
    else{
        button.style.display = "none";
    }
})


function Topfunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



//gallery slide

const reviews = [
    {
        id: "1",
        title: "Best VR place ever?",
        info: "VReality offers 18 VR stations, plus a complimentary race car driving simulator. Individual VR station rates are charged by the hour and start as low as $29 per station during our off-peak hours to $39 per station during our peak hours. For a complete list of available rates, please refer to our online booking tool.",
    },
    {
        id: "2",
        title: "FAMILY DAY!!!!",
        info: "On the final day of camp, on July 20, we invite parents to come out to our final event at 3:30pm - 5:00pm to play VR with our campers! Let your children show you what they’ve learned, introduce you to their new friends, and experience the wonders of VR for yourself.",
    },
    {
        id: "3",
        title: "For all ages!",
        info: "Our club has games for all ages! For children from 12 years old there are exciting educational games, spending time in which you can recharge your mood and even learn something new. Come with the kids and share the fun with them",
    },
];

const title = document.getElementById("title");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentItem = 0;

function showDetails(detail){
    const item = reviews[detail];
    title.textContent = item.title;
    info.textContent = item.info;

}

nextBtn.addEventListener("click",function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showDetails(currentItem);
});
prevBtn.addEventListener("click",function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showDetails(currentItem);
});

window.addEventListener("DOMContentLoaded", function () {
    showDetails(currentItem);
});

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
  });



/*=Scroll reveal=*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 300,
})
//
//home 
sr.reveal(`.hero-content__title`)
sr.reveal(`.hero-content__details`)
sr.reveal(`.hero-content__btn`, {delay: 400, origin: 'bottom'})
//about
sr.reveal(`.about-title`, {origin: 'left'})
sr.reveal(`.about-content__image`, {origin: 'left', delay: 400})
sr.reveal(`.about-content__details`, {delay: 600})
//services
sr.reveal(`.services-title`, {origin: 'left'})
sr.reveal(`.services-content__box`, {delay: 400, interval: 200})
//games
sr.reveal(`.games-title`, {origin: 'left'})
sr.reveal(`.swiper`, {delay: 400, origin: 'bottom'})
//prices
sr.reveal(`.prices-title`, {origin: 'left'})
sr.reveal(`thead`, {delay: 400})
sr.reveal(`tbody`, {delay: 1000})
//gallery
sr.reveal(`.gallery-title`, {origin: 'left'})
sr.reveal(`.gallery-content`, {delay: 400, origin: 'top'})
sr.reveal(`.gallery-content__box`, {delay: 500, origin: 'right'})
//contact
sr.reveal(`.contact-content__details`, {origin: 'left'})
sr.reveal(`.contact-content__map`, {delay: 400, origin: 'right'})
//footer
sr.reveal(`.footer-content__logo`, {origin: 'bottom'})
sr.reveal(`.footer-content__menu li`, {delay: 400, origin: 'bottom', interval: 200})
sr.reveal(`.footer-content__policy a`, {delay: 500, origin: 'bottom', interval: 200})
//End scroll reveal