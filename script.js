function heading(){
  gsap.from(".head-section", {
    y:160,
    opacity:0,
    duration:1,
    delay:0.2
  });
  gsap.from(".h1-sub-heading",{
      y:100,
      opacity:0,
      duration:1,
      delay:0.4
  });
}  //heading animation

function elements(){
  gsap.to(".cloud_element", {
    y: -70,            
    duration: 3,        
    repeat: -1,        
    yoyo: true,    
  });
  gsap.to(".plus_element", {
      y: -70,            
      duration: 3,        
      repeat: -1,        
      yoyo: true,    
  });
}   //left and right elements animation 

heading();  // calling heading animation 
elements();  //calling left and right image animation



var body = document.querySelector(".body");
var curser = document.querySelector(".curser");

body.addEventListener("mousemove",function(dets){
    gsap.to(curser,{
        x:dets.x,
        y:dets.y,
        duration:0.5,
        scrub:2
    })
})


