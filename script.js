/*JQuery is a collection of functions and code that someone has written to make a set of tasks easier in a
speciﬁc programming language
*/
// its basically a minified verion of javascript 




$(document).ready(function() { //when the Dom loads do whats inside the funtion 
	

  $("button").click(function(){ // select the button element and create a function that happens when you click
	  alert("Hey that's cool,right?"); // you can set system alerts 
	  $("h1").animate({left:'+=300px'});// you can animate the parameters of an html element in order to move the html element needs to be positioned 
  });


  $(".red").mouseenter(function(){ // when the mouse rolls over an element or class
	  $(this).css("color","pink"); // slect eth current element and grab the CSS and chanage the values 
	  $("body").css("backgroundColor","red");
  });
  
  $(".red").mouseleave(function(){ // a function for when you roll out
	  $(this).css("color","black");
	  $("body").css("backgroundColor","pink");
  });

  $("div").click(function(){
	  $("div").animate({width:'300px'});
  });


  $("h3").hover(function(){ // this is like mouseenter and mouse leave but it's combined 
	  $(this).fadeOut("slow");
  
  });
  
$("p").hide(); // before you slide, fade in, or show an element, it has to be hidden first 

  $(".keys").click(function(){
	  $("p").slideToggle("slow"); //slide toggle allows the slide to go up and down each time you click
  });

});
