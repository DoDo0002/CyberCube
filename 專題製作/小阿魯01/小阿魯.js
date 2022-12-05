const fade=document.querySelectorAll("section img")
const div=document.querySelectorAll("section div")
const nav_span=document.querySelector('span')
const navbar_btn=document.querySelector("#navbar-btn")
let count=1;

window.addEventListener("scroll", () => {
    let scroll = window.scrollY;
        console.log(scroll);

    if(scroll>=200&&scroll<1300){
        fade[0].classList.add("fadeIn-left")
        fade[0].style.display="block"
        div[1].classList.add("fadeIn-right")
        }
        // else{
        //     fade[0].classList.remove("fadeIn-left")
        //     div[0].classList.remove("fadeIn-right")
        // }
    if(scroll>=1400&&scroll<1900){
        fade[1].classList.add("fadeIn-right")
        fade[1].style.display="block"
        div[2].classList.add("fadeIn-left")
    }
    // else{
    //     fade[1].classList.remove("fadeIn-right")
    //     div[1].classList.remove("fadeIn-left")
    // }
     if(scroll>=2300&&scroll<3000){
        fade[2].classList.add("fadeIn-left")
        fade[2].style.display="block"
        div[3].classList.add("fadeIn-right")
    }
    // else{
    //     fade[2].classList.remove("fadeIn-left")
    //     div[2].classList.remove("fadeIn-right")
    // }
})

navbar_btn.addEventListener('click',()=>{
   
    if(count%2==1){
    navbar_btn.style.transition="ease 1s "
    navbar_btn.style.transform="translateX(-300px) "
    setInterval( function(){nav_span.style.transition="linear 1s ",nav_span.style.opacity="1"
    },100)
    nav_span.style.display="block"
    nav_span.style.animation=" move 1s ease ";
    count++}else{
        navbar_btn.style.transition="ease 1s "
        navbar_btn.style.transform="translateX(0px) "
        setTimeout( function(){nav_span.style.transition="linear 1s " , nav_span.style.opacity="0"
        },900)
        setTimeout("nav_span.style.display='none'",900) 
        nav_span.style.animation=" move_back 1s ease ";
        count++
        }
        console.log(count)
})

