
var inici = 250;//posicio inicial top del item
var posInicial = 1100;//posicio inicial del scroll quan comença la animacio
var posFinal = 1600;//posicio final del scroll quan acaba l'animacio
var inici1 = 0;//posicio inicial top del item
var posInicial1 = 0;//posicio inicial del scroll quan comença la animacio
var posFinal1 = 200;//posicio final del scroll quan acaba l'animacio
$(window).bind('scroll',function(){
    var posY = $(window).scrollTop();
    console.log(posY);
    if(posY>posInicial&&posY<posFinal){
        var augment = inici + Math.trunc((posY-posInicial)/3);
        console.log(augment);
        var str_px = 'px';
        var str_augment = augment.toString();
        var str_augment_px = str_augment.concat(str_px);
        console.log(str_augment_px);
    $('.instalacio').css('top', str_augment_px);
    }
	if(posY>posInicial1&&posY<posFinal1){
        var augment = inici1 + Math.trunc((posY-posInicial1)/3);
        console.log(augment);
        var str_px = 'px';
        var str_augment = augment.toString();
        var str_augment_px = str_augment.concat(str_px);
        console.log(str_augment_px);
    $('.background').css('top', str_augment_px);
    }
        
    });
$(document).ready(function(){
	$('#nav-icon3').click(function(){
		$(this).toggleClass('open');
        $('.navbar-nav').toggleClass('obrir');
        console.log('he clicat');
	});
});


function curtMaking() {
    document.getElementById('curtMaking').style.visibility="hidden";
     document.getElementById('instalacioMaking').style.visibility="hidden";
     document.getElementById('loadvideo').style.display = "inline";
     var elem = document.getElementById("loadvideo");
     var id = setInterval(frame, 5);
     var pos = -1500;
  function frame() {
    if (pos == 0) {
      clearInterval(id);
    } else {
      pos=pos+10;  
      elem.style.left = pos + 'px'; 
    }
  }
   $('.container').fadeIn(1000); 
} 
function enrere() {
   
    document.getElementById('curtMaking').style.visibility = "visible";
    document.getElementById('instalacioMaking').style.visibility="visible";
     document.getElementById('loadvideo').style.display = "inline";
     var elem = document.getElementById("loadvideo");
     var id = setInterval(frame, 5);
     var pos = 0;
  function frame() {
    if (pos == -1500) {
      clearInterval(id);
    } else {
      pos=pos-10;  
      elem.style.left = pos + 'px'; 
    }
  }
}
function enrere2() {
   
    document.getElementById('curtMaking').style.visibility = "visible";
    document.getElementById('instalacioMaking').style.visibility="visible";
     document.getElementById('loadfoto').style.display = "inline";
     var elem = document.getElementById("loadfoto");
     var id = setInterval(frame, 5);
     var pos = 0;
  function frame() {
    if (pos == -1500) {
      clearInterval(id);
    } else {
      pos=pos-10;  
      elem.style.left = pos + 'px'; 
    }
  }
   
    
}
function endavant() {
   
    document.getElementById('curtMaking').style.visibility = "hidden";
    document.getElementById('instalacioMaking').style.visibility="hidden";
     document.getElementById('loadvideo').style.display = "none";
  
   document.getElementById('loadfoto').style.display = "inline";
     var elem = document.getElementById("loadfoto");
     var id = setInterval(frame, 5);
     var pos = -1500;
  function frame() {
    if (pos == 0) {
      clearInterval(id);
    } else {
      pos=pos+10;  
      elem.style.left = pos + 'px'; 
    }
  }
    $('.container').fadeIn(1000);
    
}
    function instalacioMaking() {
    document.getElementById('instalacioMaking').style.visibility="hidden";
		document.getElementById('curtMaking').style.visibility="hidden";
     document.getElementById('loadfoto').style.display = "inline";
     var elem = document.getElementById("loadfoto");
     var id = setInterval(frame, 5);
     var pos = -1500;
  function frame() {
    if (pos == 0) {
      clearInterval(id);
    } else {
      pos=pos+10;  
      elem.style.left = pos + 'px'; 
    }
  }
    $('.container').fadeIn(1000); 
} 
function enrere2() {
   
    document.getElementById('curtMaking').style.visibility = "visible";
    document.getElementById('instalacioMaking').style.visibility="visible";
     document.getElementById('loadfoto').style.display = "inline";
     var elem = document.getElementById("loadfoto");
     var id = setInterval(frame, 5);
     var pos = 0;
  function frame() {
    if (pos == -1500) {
      clearInterval(id);
    } else {
      pos=pos-10;  
      elem.style.left = pos + 'px'; 
    }
  }
   
    
}
function endavant2() {
   
    document.getElementById('curtMaking').style.visibility = "hidden";
    document.getElementById('instalacioMaking').style.visibility="hidden";
     document.getElementById('loadfoto').style.display = "none";
	document.getElementById('loadvideo').style.display = "inline";
     var elem = document.getElementById("loadvideo");
     var id = setInterval(frame, 5);
     var pos = -1500;
  function frame() {
    if (pos == 0) {
      clearInterval(id);
    } else {
      pos=pos+10;  
      elem.style.left = pos + 'px'; 
    }
  }
    $('.container').fadeIn(1000);
    
}

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
                event.preventDefault();
                $(this).ekkoLightbox();
            });
   
//dblclick() clicar dos vegades pq funcioni
    //efectes fadeIn(), fadeOut(),slideDown(), slideDUp(), toggle(),fadeToggle() i slideToggle(). el numero es el temps que tarda a ferho
//addeventlistener per mostrar la polaroid quan es fa click
document.querySelector('.esfera').addEventListener('click', function (evt) {
  console.log('This element was clicked!');
    document.querySelector('.polaroid').setAttribute('visible', 'true');
});

