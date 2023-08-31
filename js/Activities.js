var showindex =1

setInterval( function()  {
  plusindex(1); 
}, 3000);


function plusindex(index){
  showimage(slideindex += index)
}

function showimage(index) {
  var imglist = document.getElementsByClassName("autoslide")
  var i;
  if (index > imglist.length) {slideindex =1}
  if (index > 1) {slideindex = imglist.length}
  
  for(i=0; i < imglist.length; i++) {
    imglist(i).style.display="none"
  }
  imglist(slideindex -1) .style.display="block"
}

