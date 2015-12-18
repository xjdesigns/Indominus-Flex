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
  // $('.code-sample').each(function() {
  //   var codeSnippet = $(this).text($(this).html());
  //   $(this).append(codeSnippet);
  // });
  // code snippet in vanilla
  window.codeRun = function codeRun() {
    var snippets = document.querySelectorAll('.code-sample');
    for (var i = 0; i < snippets.length; i++) {
      var newSnippet = snippets[i].innerHTML;
      newSnippet = newSnippet.replace(/\</g, '&lt;').replace(/\>/g, '&gt;');
      snippets[i].innerHTML = newSnippet;
    }
  }; codeRun();


  // toaster function
  var toast = document.querySelector('#toaster-call');
  window.toaster = function toaster(message) {
    var makeToast = document.createElement('div');
    makeToast.classList.add('toaster');
    document.body.appendChild(makeToast);
    document.querySelector('.toaster').innerHTML = message;
    setTimeout(function() {
      makeToast.style.transition = 'opacity .3s';
      makeToast.style.opacity = 0;
      setTimeout(function() {
        makeToast.parentNode.removeChild(makeToast);
      }, 2000);
    }, 2000);
  };





  var activeState = 'active';
  var activeMenu = 'is-open';
  var menuButton = document.querySelector('.menu-btn');
  var navBar = document.querySelector('.nav');
  var navMenu = document.querySelector('.nav-menu');
  var iconCircle = document.querySelectorAll('.icon-circle');
  var bodyTag = document.querySelectorAll('body');
  var menuItem = document.querySelector('#menu-list');
  var innerNav = document.querySelector('.nav__inner');
  var headerToggle = document.querySelector('.header-toggle');

  var eventHandler = function() {
    var toggle = event.target;
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


  // LETS THROTTLE SOME MADNESS
  // credit: https://remysharp.com/2010/07/21/throttling-function-calls
  function throttle(fn, threshhold, scope) {
    threshhold || (threshhold = 250);
    var last,
        deferTimer;
    return function () {
      var context = scope || this;

      var now = +new Date(),
          args = arguments;
      if (last && now < last + threshhold) {
        // hold on to it
        clearTimeout(deferTimer);
        deferTimer = setTimeout(function () {
          last = now;
          fn.apply(context, args);
        }, threshhold);
      } else {
        last = now;
        fn.apply(context, args);
      }
    };
  }

  // window scrolling
  var throttleMe = throttle(function(e) {
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

    var headerButtonScroll = document.querySelector('.header-toggle');
    var headerEXT = document.querySelector('.header-ext');
    var heightElem = headerEXT.getBoundingClientRect().top;
    if(heightElem <= 200) {
      headerEXT.classList.add('not-top');
      headerButtonScroll.classList.add('is-open');
    } else {
      headerEXT.classList.remove('not-top');
      headerButtonScroll.classList.remove('is-open');
    }
  }, 200);

  window.addEventListener('scroll', throttleMe);



  // // THE CHART from CHARTJS
  // // get the chart and instantiate it
  // var ctx = document.getElementById("myChart").getContext("2d");
  // var gradient = ctx.createLinearGradient(0, 0, 0, 400);
  // gradient.addColorStop(0, 'rgba(0,0,0,.2)');
  // gradient.addColorStop(1, 'rgba(0,0,0,0)');
  // var data = {
  //   labels: ["January", "February", "March", "April", "May", "June", "July"],
  //   datasets: [
  //     {
  //       label: "My First dataset",
  //       fillColor: "rgba(220,220,220,0.2)",
  //       strokeColor: "rgba(220,220,220,1)",
  //       pointColor: "rgba(220,220,220,1)",
  //       pointStrokeColor: "#fff",
  //       pointHighlightFill: "#fff",
  //       pointHighlightStroke: "rgba(220,220,220,1)",
  //       data: [65, 59, 80, 81, 56, 55, 40]
  //     },
  //     {
  //       label: "My Second dataset",
  //       fillColor: gradient,
  //       strokeColor: "rgba(151,187,205,1)",
  //       pointColor: "rgba(151,187,205,1)",
  //       pointStrokeColor: "#fff",
  //       pointHighlightFill: "#fff",
  //       pointHighlightStroke: "rgba(151,187,205,1)",
  //       data: [28, 48, 40, 19, 86, 27, 90]
  //     }
  //   ]
  // };
  // var myNewChart = new Chart(ctx).Line(data, {
  //
  //   ///Boolean - Whether grid lines are shown across the chart
  //   scaleShowGridLines : true,
  //
  //   //String - Colour of the grid lines
  //   scaleGridLineColor : "rgba(0,0,0,.05)",
  //
  //   //Number - Width of the grid lines
  //   scaleGridLineWidth : 1,
  //
  //   //Boolean - Whether to show horizontal lines (except X axis)
  //   scaleShowHorizontalLines: true,
  //
  //   //Boolean - Whether to show vertical lines (except Y axis)
  //   scaleShowVerticalLines: true,
  //
  //   //Boolean - Whether the line is curved between points
  //   bezierCurve : true,
  //
  //   //Number - Tension of the bezier curve between points
  //   bezierCurveTension : 0.4,
  //
  //   //Boolean - Whether to show a dot for each point
  //   pointDot : true,
  //
  //   //Number - Radius of each point dot in pixels
  //   pointDotRadius : 4,
  //
  //   //Number - Pixel width of point dot stroke
  //   pointDotStrokeWidth : 1,
  //
  //   //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
  //   pointHitDetectionRadius : 20,
  //
  //   //Boolean - Whether to show a stroke for datasets
  //   datasetStroke : true,
  //
  //   //Number - Pixel width of dataset stroke
  //   datasetStrokeWidth : 2,
  //
  //   //Boolean - Whether to fill the dataset with a colour
  //   datasetFill : true,
  //
  //   //String - A legend template
  //   legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
  //
  // });

  // END OF CHART



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

// code snippet in vanilla
// function codeRun() {
//   var snippets = document.querySelectorAll('.code-sample');
//   for (var i = 0; i < snippets.length; i++) {
//     var newSnippet = snippets[i].innerHTML;
//     newSnippet = newSnippet.replace(/\</g, '&lt;').replace(/\>/g, '&gt;');
//     snippets[i].innerHTML = newSnippet;
//   }
// } codeRun();

// var toast = document.querySelector('#toaster-call');
// function toaster(message) {
//   var makeToast = document.createElement('div');
//   makeToast.classList.add('toaster');
//   document.body.appendChild(makeToast);
//   document.querySelector('.toaster').innerHTML = message;
//   setTimeout(function() {
//     makeToast.style.transition = 'opacity .3s';
//     makeToast.style.opacity = 0;
//     setTimeout(function() {
//       makeToast.parentNode.removeChild(makeToast);
//     }, 2000);
//   }, 2000);
// }
