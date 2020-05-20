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
	track.setAttribute('visible', 'true;'); //I NEED THIS ONE AS WELL ON CLICK
	track.setAttribute('animation__1', 'to: 2.7;');
    track.setAttribute('animation__2', 'to: 4.2;');
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

