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


  var iconCircle = document.querySelectorAll('.icon-circle');

  var eventHandler = function() {
    var toggle = event.target;
    console.log(toggle);

    if (toggle.classList.contains('icon-circle')) {
      event.preventDefault();
      hasActiveClass: {
        if(toggle.classList.contains('active')) {
          toggle.classList.remove('active');
        } else {
          toggle.classList.add('active');
        }
      }
    }
  };
  document.addEventListener('click', eventHandler, false);


  // getting vanilla with the work below on inputs
  // then we can use these to be material

  // update the range output while range is moving
  var rangeInput = document.querySelector('.input--range__slider');
  var valueOutput = document.querySelector('.inputVal');
  var maxAttr = rangeInput.getAttribute('max');
  var maxVal = document.querySelector('.maxVal');

  // set the value
  valueOutput.innerHTML = rangeInput.value;

  if(maxAttr !== null) {
    maxVal.innerHTML = '\/' + maxAttr;
  } else {
    maxVal.style.display = 'none';
  }

  rangeInput.addEventListener('mousemove', function(event) {
    valueOutput.innerHTML = rangeInput.value;
  }, false);

  // text input
  // grab the input and spit the value into the output
  var inputText = document.querySelector('#inText');
  var outputText = document.querySelector('#outputText');

  inputText.addEventListener('keyup', function(event) {
    outputText.innerHTML = inputText.value;
  }, false);

});
