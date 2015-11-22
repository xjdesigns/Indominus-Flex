$(document).ready(function() {

  $('.nav-menu li#flexgrid').click(function() {
    $('.section-tflex').addClass('active');
    $('body').addClass('hidden');
  });
  $('.back-btn').click(function() {
    $('.section-tflex').removeClass('active');
    $('body').removeClass('hidden');
  });
  $('.infobar__left').click(function() {
    $('.info-nav, .infobar__right').toggleClass('is-active');
  });
  $('#menu-nav-btn').click(function() {
    $(this).toggleClass('dropdown-is-open');
  });
  $('.nav-header__btn--search').click(function(e) {
    var searchLength = !!e.target.value;
    var searchInput = e.target.tagName.toLowerCase();
    if(searchInput === 'input' || searchLength) {
      return;
    }
    $(this).toggleClass('search-is-open');
  });
  $('.nab-header__btn--search input').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
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
  var menuItem = document.querySelector('#menu-list');
  var innerNav = document.querySelector('.nav__inner');

  var eventHandler = function() {
    var toggle = event.target;
    console.log(toggle);
    if (toggle.classList.contains('nav-header__btn')) {
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
    if (toggle.id === 'menu-list') {
      event.preventDefault();
      hasActiveClass: {
        if(innerNav.classList.contains(activeState)) {
          innerNav.classList.remove(activeState);
        } else {
          innerNav.classList.add(activeState);
        }
      }
    }
  };
  document.addEventListener('click', eventHandler, false);
  document.addEventListener('click', eventHandler, false);

  // sticky header
  window.onscroll = function(e) {
    var offsetY = window.pageYOffset;
    var header = document.querySelector('.st-header');
    var headerHeight = header.offsetHeight;
    if(offsetY > headerHeight) {
      header.classList.add('sticky-header');
      document.body.style.marginTop = headerHeight + 'px';
    } else {
      header.classList.remove('sticky-header');
      document.body.removeAttribute('style');
    }
  };

  // scrolling header extension
  window.onscroll = function(e) {
    var headerEXT = document.querySelector('.header-ext');
    var heightElem = headerEXT.getBoundingClientRect().top;
    console.log(heightElem);
    if(heightElem <= 200) {
      console.log('yup');
      headerEXT.classList.add('not-top');
    } else {
      headerEXT.classList.remove('not-top');
      console.log('nope');
    }
  };





  // getting vanilla with the work below on inputs
  // then we can use these to be material

  // update the range output while range is moving
  // var rangeInput = document.querySelector('.input--range__slider');
  // var valueOutput = document.querySelector('.inputVal');
  // var maxAttr = rangeInput.getAttribute('max');
  // var maxVal = document.querySelector('.maxVal');
  //
  // // set the value
  // valueOutput.innerHTML = rangeInput.value;
  //
  // if(maxAttr !== null) {
  //   maxVal.innerHTML = '\/' + maxAttr;
  // } else {
  //   maxVal.style.display = 'none';
  // }
  //
  // rangeInput.addEventListener('mousemove', function(event) {
  //   valueOutput.innerHTML = rangeInput.value;
  // }, false);
  //
  // // text input
  // // grab the input and spit the value into the output
  // var inputText = document.querySelector('#inText');
  // var outputText = document.querySelector('#outputText');
  //
  // inputText.addEventListener('keyup', function(event) {
  //   outputText.innerHTML = inputText.value.length;
  // }, false);





  // SMOOTH SCROLL
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });

});
