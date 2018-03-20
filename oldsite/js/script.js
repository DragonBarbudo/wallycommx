$(document).ready(function(){

$('.clouse').click(function(){
	$('.modal').fadeOut();
	$(this).parent().animate({'position':'absolute', 'top':'-500px'}, function(){
		$(this).hide();
	});
});

/* CONTACTO form */
/*
$("#formulary").submit(function(){
var _name=$("#formulary #name").val().trim();
var _mail=$("#formulary #mail").val().trim();
var _phone=$("#formulary #phone").val().trim();
var _mess=$("#formulary #mess").val().trim();

if(_name==""){
$("#formulary #name").parent().prev(".error").html("<p>Error en el campo</p>");
$("#formulary #name").focus(function(){
$(this).parent().prev(".error").html("");
});
return false;
}
else if(_mail==""){
$("#formulary #mail").parent().prev(".error").html("<p>Error en el campo</p>");
$("#formulary #mail").focus(function(){
$(this).parent().prev(".error").html("");
});
return false;
}
else if(_phone==""){
$("#formulary #phone").parent().prev(".error").html("<p>Error en el campo</p>");
$("#formulary #phone").focus(function(){
$(this).parent().prev(".error").html("");
});
return false;
}
else if(_mess==""){
$("#formulary #mess").parent().prev(".error").html("<p>Error en el campo</p>");
$("#formulary #mess").focus(function(){
$(this).parent().prev(".error").html("");
});
return false;
}
else{
$.post("server/contacto.php", {name:_name, mail:_mail, phone:_phone, mess:_mess }, function(data){
$("#formulary").html(data);
});
}

return false;
});
*/

/* root menu */
	$('nav a img').animate({width:'0%'}, 200).animate({width:'100%'}, 600, 'easeOutElastic');
	$('nav a').hover(function(){
		var theight = $(this).height();
		$(this).css({'height':theight});
		$(this).children('img').stop().animate({width:'105%'}, 100);
	}, function(){
		$(this).children('img').stop().animate({width:'100%'}, 600, 'easeOutElastic');
	});



/* registrate! */

	$('#registroForm').hide();
	$('#registrate, #menuregistrate').click(function(){
		$('#contactoForm').slideUp();
		$('#registroForm').slideDown(function(){
			$.scrollTo('#registroForm', 500);
		});

		return false;
	});

/* end registrate*/


/* contactanos! */

	$('#contactoForm').hide();
	$('#contactanos, #menucontactanos').click(function(){
		$('#registroForm').slideUp();
		$('#contactoForm').slideDown(function(){
			$.scrollTo('#contactoForm', 500);
		});

		return false;
	});

/* end contactanos*/





/* form active boy/girl */
	$('#left1 #boy').addClass('active');
	$('#left1 button').hover(function(){
		$(this).css({'background-position':'left'});
	}, function(){
		var active = $(this).attr('class');
		if(active != 'active'){
			$(this).css({'background-position':'right'});

		}
	});
	$('#left1 button').click(function(){
		$('#left1 button').removeClass('active');
		$('#left1 button').css({'background-position':'right'});
		$(this).addClass('active').css({'background-position':'left'});;
		var gen = $(this).attr('value');
		$('#gender').attr({'value':gen});
		return false;
	});
/* end active boy/girl */



});



function index(){
	$.scrollTo(270, 1000);

	$('#seagull')
			.sprite({fps: 9, no_of_frames: 3})
					.spRandom({top: 600, bottom: 100, left: 700, right: 200})
					.active();

	animating('#ark img', '-5px');
}

function animating(element, margin){
	$(element).animate({marginTop:'0px'},1000, function(){
		$(this).animate({marginTop:margin},1000, function(){
			animating(element, margin);
		});
	});
}

function section(){
	$.scrollTo(60, 1000, 'easeOutElastic');
	$('#sun img').animate({width:'0%'}, 200).animate({width:'100%'}, 600, 'easeOutElastic');
	$('#fullTitle img').animate({width:'0%'}, 200).animate({width:'100%'}, 600, 'easeOutElastic');
	$('#illust img').animate({width:'0%'}, 200).animate({width:'100%'}, 600, 'easeOutElastic');
}







window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-30012102-1');
