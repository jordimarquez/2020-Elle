
//addeventlistener per mostrar la polaroid quan es fa click
document.querySelector('.esfera').addEventListener('click', function (evt) {
  console.log('This element was clicked!');
    document.querySelector('.polaroid').setAttribute('visible', 'true');
});

/*AFRAME.registerComponent(".esfera", {
  init: function() {
   this.el.addEventListener("click", function() {
       console.log('This element was clicked!');
    let box = document.querySelector(".esfera")
    box.setAttribute("visible", !box.getAttribute("visible"))
   })
  }
})
const $bigBall = document.querySelector(".cursor__ball--big");
const $hoverables = document.querySelectorAll(".hoverable");

// Listeners
document.body.addEventListener("mousemove", onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
  $hoverables[i].addEventListener("mouseenter", onMouseHover);
  $hoverables[i].addEventListener("mouseleave", onMouseHoverOut);
}

function onMouseMove(e) {
  TweenMax.to($bigBall, 0.4, {
    x: e.pageX,
    y: e.pageY
  });

/*var mouseX=window.innerWidth/2,
    mouseY=window.innerHeight/2;
var circle = { 
     el:$(‘.circle’),
     x:window.innerWidth/2, 
     y:window.innerHeight/2, 
     w:80, 
     h:80, 
     update:function(){
                   l = this.x-this.w/2; 
                   t = this.y-this.h/2; 
                   this.el.css({ 
                            ‘transform’:
                            ’translate3d(‘+l+’px,‘+t+’px, 0)’ }); 
                           }
}
$(window).mousemove (function(e){
  mouseX = e.clientX;
  mouseY = e.clientY;
})

setInterval (move,1000/60)
function move(){
  circle.x = lerp (circle.x, mouseX, 0.1);
  circle.y = lerp (circle.y, mouseY, 0.1);
  circle.update() 
}
function lerp (start, end, amt){
  return (1-amt)*start+amt*end
}*/



