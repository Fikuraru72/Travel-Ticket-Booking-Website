
//Parallax 
   const parallax = document.querySelectorAll('.parallax');
   M.Parallax.init(parallax);

//Carousel
    const carousel = document.querySelectorAll('.carousel');
    M.Carousel.init(carousel)

//MaterialBoxed
    const materialboxed = document.querySelectorAll('.materialboxed')
    M.Materialbox.init(materialboxed);

//Modal
  const modal = document.querySelectorAll('.modal')
  M.Modal.init(modal,{
   opacity: 0.7,
   preventScrolling: false
  });

//Slider
  const slider = document.querySelectorAll('.slider');
  M.Slider.init(slider,{
  indicators: false,
  height: 700,
  transition: 200,
  interval : 5000
  }); 

// SetDarkMode
  const options ={
  bottom: '92px', // default: '32px'
  right: '32px', // default: '32px'
  left: 'unset', // default: 'unset'
  time: '0.3s', // default: '0.3s'
  mixColor: '#C7C7C7', // default: '#fff'
  backgroundColor: '#fff',  // default: '#fff'
  buttonColorDark: '#000000',  // default: '#100f2c'
  buttonColorLight: '#ffffff', // default: '#fff'
  saveInCookies: true, // default: true,
  label: '', // default: ''
  autoMatchOsTheme: true // default: true
  }

  const darkmode = new Darkmode(options);
  darkmode.showWidget();

// floatingbtn
 document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems, {
  direction: 'left',
    });
  });

// scroll more
	//scroll 1 
	 function theFunction() {
        var goback = document.getElementById("goback");
        var goText = document.getElementById("go");
        var tmblText = document.getElementById("tmbl");

        if (goback.style.display === "none") {
        goback.style.display = "inline";
        tmblText.innerHTML = "expand_more"; 
        goText.style.display = "none";
        } else {
        goback.style.display = "none";
        tmblText.innerHTML = "expand_less"; 
        goText.style.display = "inline";
          }
        };
 // scroll 2
    function thisFunction() {
 	 var back = document.getElementById("back");
 	 var nextText = document.getElementById("next");
 	 var tombolText = document.getElementById("tombol");

 	 if (back.style.display === "none") {
 	   back.style.display = "inline";
 	   tombolText.innerHTML = "expand_more"; 
 	   nextText.style.display = "none";
 	 } else {
 	   back.style.display = "none";
 	   tombolText.innerHTML = "expand_less"; 
 	   nextText.style.display = "inline";
 	 }
 	  };
