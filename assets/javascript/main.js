
//----------------------------------------------------


function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
}


//  Show #toTop button only after scrolling page dawn a little ( 150 px )
function showToTopButton() {
    $(window).scroll(function () {
        if ( ($(this).scrollTop() > 150) ) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
}

/************************************************************************************
 Set equal height of some elements inside the container
 *************************************************************************************/



function equalHeight(container, element){
		var heightArray = container.find(element).map( function(){
				 return  $(this).height();
				 }).get();
		var maxHeight = Math.max.apply( Math, heightArray);
    container.find(element).height(maxHeight);
			}

function setEqualHeight(container, element) {
    $(container).add(element).height("auto");

    var bigScreen = 1000;
    if($(document).width() >= bigScreen) {
        $(container).each( function(){
            equalHeight( $(this), element);
        });
    }
}



/************************************************************************************
 Color Theme Change
 *************************************************************************************/

function setCookie(name, value) {
    $.cookie(name, value);

    $.cookie(name, null);
    $.cookie(name, value, {
        expires: 360,
        path: '/'
    });

}


function getCookie(name) {
    return  $.cookie(name);
}


function changeTheme() {
    //el = $(document.body);
    // el = $(document.documentElement);
    el = $("html");

    if (el.hasClass('theme-inverse')) {
        el.removeClass('theme-inverse');
        setCookie("mixdreams-theme", "base");
    }
    else {
        el.addClass("theme-inverse");
        setCookie("mixdreams-theme", "inverse");
    }

    setEqualHeight($(".thumbnail-container"), $(".thumbnail"));
}


function setTheme() {
    cookie = getCookie("mixdreams-theme")
    el = $("html");
    if (!el.hasClass('theme-base') && !el.hasClass('theme-inverse')) {
        if (cookie == "inverse") {
            el.addClass("theme-inverse");
        }
    }
}


function loadDisqus() {
    var disqus_shortname = 'mixdreams'; // required: replace example with your forum shortname

    /* * * DON'T EDIT BELOW THIS LINE * * */
    (function() {
        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
        dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    })();

      /* * * DON'T EDIT BELOW THIS LINE * * */
      (function () {
          var s = document.createElement('script'); s.async = true;
          s.type = 'text/javascript';
          s.src = '//' + disqus_shortname + '.disqus.com/count.js';
          (document.getElementsByTagName('HEAD')[0] || document.getElementsByTagName('BODY')[0]).appendChild(s);
      }());
}

$(window).resize(function() {
    setEqualHeight($(".thumbnail-container"), $(".thumbnail"));
 });

$('.change-theme').on('click', function() {
     changeTheme();
    loadDisqus();
 });

 $('#menu').on('click', function(e) {
         e.preventDefault();
         $('.nav--adaptive').toggleClass('open');
 });





$(document).ready(function () {
   setEqualHeight($(".thumbnail-container"), $(".thumbnail"));
    setTheme();
    showToTopButton();
    loadDisqus();
});





















