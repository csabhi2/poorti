$('.carousel.carousel-multi-item.v-2 .carousel-item').each(function(){
var next = $(this).next();
if (!next.length) {
next = $(this).siblings(':first');
}
next.children(':first-child').clone().appendTo($(this));

for (var i=0;i<3;i++) {
next=next.next();
if (!next.length) {
  next = $(this).siblings(':first');
}
next.children(':first-child').clone().appendTo($(this));
}
});
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
