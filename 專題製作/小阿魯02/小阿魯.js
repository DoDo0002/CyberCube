const fade = document.querySelectorAll("section img");
const div = document.querySelectorAll("section div");
const nav_span = document.querySelector("span");
const navbar_btn = document.querySelector("#navbar-btn");
const header_shadow = document.querySelector("#header-shadow");
const header_pic = document.querySelectorAll("header .header-pic");
const header_pic2 = document.querySelectorAll("header .header-pic2");
const li = document.querySelectorAll(".anchor li");
const section4_img=document.querySelectorAll(".section4 img")


let count = 1;
let opacity = 0;

console.log(section4_img);

window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  console.log(scroll);

  if (scroll >= 200 && scroll < 300) {
    div[0].style.display="block";
    div[0].classList.add("fadeIn-bottom");
  }else if(scroll >= 300 && scroll < 500){
    div[1].style.display="inline-block";
  div[1].classList.add("fadeIn-bottom");
  div[3].style.display="inline-block";
  div[3].classList.add("fadeIn-bottom");
  div[4].style.display="inline-block";
  div[4].classList.add("fadeIn-bottom");
  }else if(scroll >= 500 && scroll < 1000){
    div[5].style.display="inline-block";
    div[5].classList.add("fadeIn-bottom");
    div[6].style.display="inline-block";
    div[6].classList.add("fadeIn-bottom");
  }else{
    div[0].style.display="inline-block";
    div[0].classList.add("fadeIn-bottom"); 
    div[1].style.display="inline-block";
    div[1].classList.add("fadeIn-bottom"); 
    div[3].style.display="inline-block";
    div[3].classList.add("fadeIn-bottom"); 
    div[4].style.display="inline-block";
    div[4].classList.add("fadeIn-bottom"); 
    div[5].style.display="inline-block";
    div[5].classList.add("fadeIn-bottom"); 
    div[6].style.display="inline-block";
    div[6].classList.add("fadeIn-bottom");
  }

  if (scroll >= 600 && scroll <= 1350) {
    li[0].classList.add("li-scale");
    li[0].style.color=" rgb(39, 37, 37)";
    li[1].classList.remove("li-scale");
  } else if (scroll >= 1350 && scroll <= 2500) {
    li[0].classList.remove("li-scale");
    li[1].classList.add("li-scale");
    li[1].style.color=" rgb(39, 37, 37)";
    li[2].classList.remove("li-scale");
  } else if (scroll >= 2500 && scroll <= 3600) {
    li[0].classList.remove("li-scale");
    li[1].classList.remove("li-scale");
    li[2].classList.add("li-scale");
    li[2].style.color=" rgb(39, 37, 37)";
  } else {
    li[0].classList.remove("li-scale");
  }
});

navbar_btn.addEventListener("click", () => {
  if (count % 2 == 1) {
    navbar_btn.style.transition = "ease 1s ";
    navbar_btn.style.transform = "translateX(-300px) ";
    setInterval(function () {
      (nav_span.style.transition = "linear 1s "),
        (nav_span.style.opacity = "1");
    }, 100);
    nav_span.style.display = "block";
    nav_span.style.animation = " move 1s ease ";
    count++;
  } else {
    navbar_btn.style.transition = "ease 1s ";
    navbar_btn.style.transform = "translateX(0px) ";
    setTimeout(function () {
      (nav_span.style.transition = "linear 1s "),
        (nav_span.style.opacity = "0");
    }, 900);
    setTimeout("nav_span.style.display='none'", 900);
    nav_span.style.animation = " move_back 1s ease ";
    count++;
  }
  console.log(count);
});

window.addEventListener("load", () => {
  header_pic[0].classList.add("header-pic-move");
  header_pic2[0].classList.add("header-pic-move2");
  header_shadow.classList.add("move-top");
  setTimeout(function shadow_op() {
    setInterval(function () {
      header_shadow.style.opacity = opacity += 0.1;
    }, 100);
  }, 1000);
  setTimeout(function () {
    header_shadow.classList.add("breath");
  }, 1000);
});
