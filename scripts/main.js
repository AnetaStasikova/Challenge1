var text = document.getElementById('volcano2');
var ball = document.getElementById('sphere');

function visibility(){
	text.object3D.visible = true;
	console.log('text.object3D.visible');
}

ball.addEventListener('click', function(){
	visibility();
	console.log('visible');
});

ball.addEventListener('mouseleave', function(){
	text.object3D.visible = false;
	console.log('notvisible');
})