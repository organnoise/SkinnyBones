function clipName() {
	var appDistance = $('#friend').offset().top - 40;
	
    $('#parallax').scroll(function() {
        // scrollTop gets the current vertical position of the scroll bar for the first element in the set of matched elements or set the vertical position of the scroll bar for every matched element.
        if ($('#parallax').scrollTop() >= appDistance) {
            // If the window scrollbar position is greater or equal to the position of the 'app' element then add class navbar-ash to the navbar
            $('.skinny').addClass('hidden');
			$('.replacementSkinny, .titleRight').addClass('notHidden');
        } else {
            // Otherwise remove the navbar-ash class
            $('.skinny').removeClass('hidden');
			$('.replacementSkinny, .titleRight').removeClass('notHidden');
        }
    });
}

$(document).ready(function() {
	
	clipName();
});

