var volcano2 = document.getElementById('volcano2');
 
 function visibility(){
 	
 	volcano2.display == block;
 	console.log(volcano2.object3D.display);
 }

 volcano2.addEventListener('click', function(){ // uses a fuse
 	visibility();
 	console.log('visible');
 });