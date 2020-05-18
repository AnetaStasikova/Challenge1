var vol = document.getElementById('volcano2');
 
 function visibility(){
 	
 	vol.display == block;
 	console.log(vol.display);
 }

 vol.addEventListener('click', function(){ // uses a fuse
 	visibility();
 	console.log('visible');
 });