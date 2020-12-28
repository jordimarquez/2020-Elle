
//addeventlistener per detectar quan s'ha fet click i que ho mostri a la consola
document.querySelector('esfera').addEventListener('click', function (evt) {
  console.log('This element was clicked!');
});

/*AFRAME.registerComponent("#esfera", {
  init: function() {
   this.el.addEventListener("click", function() {
    let box = document.querySelector("#esfera")
    box.setAttribute("visible", !box.getAttribute("visible"))
   })
  }
})*/
