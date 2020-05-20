var text = document.getElementById('volcano2');
var ball = document.getElementById('sphere');
var track = document.getElementById('run');
var ball2 = document.getElementById('sphere2')

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

//* Running track


function visibility2(){
    sphere2.setAttribute('visible', false);
    track.setAttribute('visible', true); 
	track.setAttribute('animation__1', 'property:height;');
    track.setAttribute('animation__2', 'property:width;');
    track.setAttribute('animation__3', 'property:position;');
	track.setAttribute('animation__3', 'loop: false;');
	console.log('track.object3D.visible');
}

ball2.addEventListener('click', function(){
visibility2();
console.log('visible');
})


//ball2.addEventListener('click',  function(){

//};
	//visibility2();
//  console.log('visible');
//})




//ball2.addEventListener('mouseleave', function(){
//	track.object3D.visible = false;
//	console.log('notvisible');
//})

//window.requestAnimationFrame();

