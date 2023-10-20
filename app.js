const parallex_el = document.querySelectorAll(".parallax");

let xValue = 0, yValue = 0;


window.addEventListener("mousemove", (e) =>{
    xValue = e.clientX - window.innerWidth/2 ; 
    yValue = e.clientY - window.innerHeight /2;

    console.log(xValue,yValue);

    parallex_el.forEach(el => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        el.style.transform = `translateX(${-xValue*speedx}px)
        translateY(${yValue*speedy}px)`; 
    })


});

