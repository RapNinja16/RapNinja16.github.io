const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0, yValue = 0;


window.addEventListener("mousemove", (e) =>{
    xValue = e.clientX - window.innerWidth/2 ; 
    yValue = e.clientY - window.innerHeight /2;

    console.log(xValue,yValue);

    parallax_el.forEach(el => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        el.style.transform = `translateX(${-xValue*speedx}px)
        translateY(${yValue*speedy}px)`; 
    })


});


let timeline = gsap.timeline();

Array.from(parallax_el)
    .filter((el)=> !el.classList.contains("text"))
    .forEach(el => {
    timeline.from(
        el,
        {
        top: "10000px",
        duration:3,
        ease: "power3.out"
        },
        "1"
        );
    
})


timeline.from(".text h3",{
    y:
    window.innerHeight - document.querySelector(".text h3")
    .getBoundingClientRect().top,
    duration: 2,
},
"0.5"
);

    