$(document).ready(function() {

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



  var activeState = 'active';
  var menuButton = document.querySelector('.menu-btn');
  var navBar = document.querySelector('.nav');
  var navMenu = document.querySelector('.nav-menu');
  var iconCircle = document.querySelectorAll('.icon-circle');
  var bodyTag = document.querySelectorAll('body');

  var eventHandler = function() {
    var toggle = event.target;
    if (toggle.classList.contains('icon-circle')) {
      event.preventDefault();
      hasActiveClass: {
        if(toggle.classList.contains(activeState)) {
          toggle.classList.remove(activeState);
        } else {
          toggle.classList.add(activeState);
        }
      }
    }
    if (toggle.classList.contains('menu-btn')) {
      event.preventDefault();
      hasActiveClass: {
        if(toggle.classList.contains(activeState)) {
          toggle.classList.remove(activeState);
          navBar.classList.remove(activeState);
          navMenu.classList.remove(activeState);
        } else {
          toggle.classList.add(activeState);
          navBar.classList.add(activeState);
          navMenu.classList.add(activeState);
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
    outputText.innerHTML = inputText.value.length;
  }, false);

});
