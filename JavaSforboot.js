$(document).ready(function(){

	function myFunction1() {
	    var x = document.getElementById("myP").innerHTML;
		document.getElementById("demo").innerHTML = x;
	}

	function myFunction() {
	    var b = document.getElementById("kobe").innerHTML;
		document.getElementById("demo").innerHTML = b;
	}

	function change() {
		if (confirm("Are you sure you want to do this?") == true) {
			var y = document.getElementById("myP").innerHTML;
		    document.getElementById("kobe").innerHTML = y;
		}
	}

    "#name".element.opacity = 0.5;
    $('#name').fadeIn('slow');

	$("#kobe").click(function(){
		change();
		$("div").fadeOut("slow");
		
	});

	$("#b1").click(function(){
		myFunction1();
		$("div").fadeIn("slow");
	});

	$("#b2").click(function(){
		myFunction();
		$("div").fadeOut("slow");
	});

	$('#b').click(function(){
		
	});

	$('.row').accordion()
});