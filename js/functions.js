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

  $('.icon-circle').click(function() {
    $(this).toggleClass('active');
  });

  var range = $('.input--range__slider'), value = $('.inputVal'), maxValue = $('.maxVal');

  value.html(range.attr('value'));
  var maxM = $('.input--range__slider').attr('max');

  if(maxM === undefined) {
    maxValue.css('display','none');
  } else {
    maxValue.html("\/" + maxM);
  }

  range.on('input', function(){
    value.html(this.value);
  });

});
