var text = document.getElementById('volcano2');
var ball = document.getElementById('sphere');
var ball2 = document.getElementById('sphere2');
var track = document.getElementById('run');
var video = document.getElementById('video2');
var button = document.getElementById('buttonplay');

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

sphere2.setAttribute('animation__1', 'property:height;');
track.setAttribute('animation__1', 'loop:false');

sphere2.setAttribute('animation__2', 'property:width;');
track.setAttribute('animation__2', 'loop:false');

sphere2.setAttribute('animation__3', 'property:position;');
track.setAttribute('animation__3', 'loop:false');

track.setAttribute('visible', true);

button.setAttribute('visible', true);
console.log('track.object3D.visible');
}

ball2.addEventListener('click',function(){
	visibility2();
	console.log('visible');
})

function playvideo(){
video.setAttribute('animation__4', 'property:visible');
button.setAttribute('visible','false');
console.log('track.object3D.playing');

}

button.addEventListener('click', function(){
	playvideo();
	console.log('playvideo');
})







//*track.addEventListener('mouseleave', function(){
//*	track.object3D.visible = false;
//*	sphere2.setAttribute('visible', true);
//*
//*	track.setAttribute('animation__1', 'loop: true;');
//*    track.setAttribute('animation__2', 'loop: true;');
//* 	track.setAttribute('animation__3', 'loop: true;');

	//*console.log('notvisible');
//*}) 

