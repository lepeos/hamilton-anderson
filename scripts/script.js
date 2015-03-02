



$('document').ready(function () {

	$('#logo').hide();
	$('#spiel').hide();
	$('#footer').hide();
	$('.peos').hide();


	$('#logo').fadeIn(3200);
	$('#spiel').delay(1200).fadeIn(2000);
	$('#footer').delay(1000).fadeIn(2000);
	$('.peos').delay(1200).fadeIn(200);


	$(document).scroll(function () {

		console.log(window.pageYOffset);

		var changeHeight = 140;

		var Yposition = window.pageYOffset || document.documentElement.scrollTop;

			if(Yposition > changeHeight) 
			{
			$('#background').removeClass('logo').addClass('fixed_logo');
		} 

			else 
			{
				$('#background').removeClass('fixed_logo').addClass('logo');
			}


}); 




}) // End of document.ready()



$peos = $('.peos');


 $whoTitle = $('#main_title_who h2');
 $whatTitle = $('#sub_title_what h2');

if($(window).width() >= 568) {

	var $who = $('#main_who');

	var $what = $('#main_what');



	$('#sub_title_what').on('click', function () {

		$who.fadeOut('fast', function () {

				$whoTitle.removeClass('selected');
				$whatTitle.addClass('selected');	

				$what.fadeIn('fast');


			
		})



	});


	$('#main_title_who').on('click', function () {

		$what.fadeOut('fast', function () {

				$whatTitle.removeClass('selected');
				$whoTitle.addClass('selected');	
				$who.fadeIn('fast');


		})



	});
}






