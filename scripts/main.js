//var vol = document.getElementById('volcano2');

//function neviem() {
 // vol.style.display = "block";
//}
//vol.addEventListener('click', function(){ 
//neviem();
// console.log('visible');
//});

var text = document.getElementById('volcano2');
var ball = document.getElementById('sphere');

function visibility () {
text.visible = true;
}

ball.addEventListener('click', function(){
	visibility();
});