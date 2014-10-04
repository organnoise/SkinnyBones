$(document).ready(function() {
	
	clipName();
	console.log($(window).scrollTop());
});

function clipName() {
	
	var appDistance = $('#friend').offset().top;
	
    $("#parallax").scroll(function() {
        // scrollTop gets the current vertical position of the scroll bar for the first element in the set of matched elements or set the vertical position of the scroll bar for every matched element.
        if ($("#parallax").scrollTop() >= (appDistance - 40)) {
            // If the window scrollbar position is greater or equal to the position of the 'app' element then add class navbar-ash to the navbar
            $('.skinny').addClass('hidden');
			$('.replacementSkinny').addClass('notHidden');
			$('.titleRight').addClass('notHidden');
        } else {
            // Otherwise remove the navbar-ash class
            $('.skinny').removeClass('hidden');
			$('.replacementSkinny').removeClass('notHidden');
			$('.titleRight').removeClass('notHidden');
        }
    });
}