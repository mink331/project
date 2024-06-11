let bg = document.body
const sliders = document.querySelectorAll(".slide ") ; 
const leftBtn = document.getElementById("left") ; 
const rightBtn = document.getElementById("right") ; 


    let activeSlide = 0 ; 

/// for background images 

const images = ["url('./image/s-l1600.webp')" , "url('./image/download.jpg')" , "url('./image/download_1.jpg')" , "url('./image/download_2.jpg')" , "url('./image/download_3.jpg')"] ;

 /// buttons  

rightBtn.addEventListener("click", () => { 

    sliders[activeSlide].classList.remove("active") ; 


    if (activeSlide < sliders.length - 1 ) { 
        activeSlide = activeSlide + 1 ; 
       
    } else { 
        activeSlide = 0 ;
    } 
    sliders[activeSlide].classList.add("active") ; 
    bg.style.backgroundImage= images[activeSlide]

})  

leftBtn.addEventListener("click", () => { 
    
    sliders[activeSlide].classList.remove("active") ; 

    if (activeSlide > 0 ) { 
        activeSlide = activeSlide - 1 ; 
    } else { 
        activeSlide = sliders.length - 1 ;
    } 
    sliders[activeSlide].classList.add("active") ; 
    bg.style.backgroundImage= images[activeSlide]
}) 



/* const sliders = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

let activeSlide = 0;

rightBtn.addEventListener("click", () => {
    // Remove active class from current slide
    sliders[activeSlide].classList.remove("active");

    // Increment activeSlide index
    activeSlide = (activeSlide + 1) % sliders.length;

    // Add active class to next slide
    sliders[activeSlide].classList.add("active");
});

console.log(sliders.length);
console.log(sliders[0]); */
