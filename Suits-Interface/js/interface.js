/*const init = function(){
    let items = document.querySelectorAll('section');
    for (let i = 0; i < items.length; i++){
        items[i].style.background = randomColor({luminosity: 'light'});
    }
    cssScrollSnapPolyfill()
}
init();
*/

// var bannerTrump = document.querySelector(".banner");
var bannerTrump = document.querySelector(".banner");
var notification = document.querySelector(".banner");
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

setTimeout(function(){
    document.querySelector('.banner').style.display = 'block';
},10000);

bannerTrump.onclick = function(){
  console.log('clicked')
  bannerTrump.style.display = 'none'
}

setTimeout(function(){
    document.querySelector('.putinGif').style.display = 'block';
},20000);

setTimeout(function(){
    document.querySelector('.trumpGif').style.display = 'block';
},23000);




btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
