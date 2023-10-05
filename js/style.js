$(".js-sticknav").waypoint(function(direction){

	if (direction=="down") {
		$("nav").addClass("sticky-nav");

	} else{
			$("nav").removeClass("sticky-nav");
	}

});