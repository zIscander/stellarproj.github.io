$('.mini-nav-btn').on('click', function(e){
	e.preventDefault;
	$(this).toggleClass('mini-nav-btn-active');
	$('.mini-nav').toggleClass('mini-nav-active');

});