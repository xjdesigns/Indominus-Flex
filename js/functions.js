$(document).ready(function() {

  // main nav menu click functions
  $('.menu-btn').click(function() {
    var activeState = 'active';
    $(this).toggleClass(activeState);
    $('.nav, .nav-menu').toggleClass(activeState);
  });

  $('.nav-menu li#flexgrid').click(function() {
    $('.section-tflex').addClass('active');
    $('body').addClass('hidden');
  });
  $('.back-btn').click(function() {
    $('.section-tflex').removeClass('active');
    $('body').removeClass('hidden');
  });

  // clicking outside the menu toggles class
  $(document).on('click', function(event) {
		if (!$(event.target).closest('.nav').length) {
			if( $('.menu-btn').hasClass('active') ) {
				$('.nav, .nav-menu, .menu-btn').toggleClass('active');
			}
		}
	});

  // code snippet function for grabbing the element and displaying the mark up
  $('.code-sample').each(function() {
    var codeSnippet = $(this).text($(this).html());
    $(this).append(codeSnippet);
  });

});
