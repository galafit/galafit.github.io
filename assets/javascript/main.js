
// Set equal heights of .thumbnails inside of the .thumbnail-container
// (Originally  had set equal heights of columns (divs) inside of the .container)
function setEqualHeight(columns) {
    var tallestcolumn = 0;
    columns.each(
        function () {
            currentHeight = $(this).height();
            if (currentHeight > tallestcolumn) {
                tallestcolumn = currentHeight;
            }
        }
    );
    columns.height(tallestcolumn);
}
$(document).ready(function () {
    // setEqualHeight($(".container > div"));
    setEqualHeight($(".thumbnail-container .thumbnail"));
});


//  Show #toTop button only after scrolling page dawn a little ( 150 px )
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
});


//  Activate fancybox to show images and galleries
$(document).ready(function () {
    $(".fancybox").fancybox();
});


/************************************************************************************
 Color Theme Change
 *************************************************************************************/

function setCookie (name, value, expires, path, domain, secure) {
      document.cookie = name + "=" + value +
        ((expires) ? "; expires=" + expires : "") +
        ((path) ? "; path=" + path : "") +
        ((domain) ? "; domain=" + domain : "") +
        ((secure) ? "; secure" : "");
}



function getCookie(name) {
    var cookie = " " + document.cookie;
    var search = " " + name + "=";
    var setStr = null;
    var offset = 0;
    var end = 0;
    if (cookie.length > 0) {
        offset = cookie.indexOf(search);
        if (offset != -1) {
            offset += search.length;
            end = cookie.indexOf(";", offset)
            if (end == -1) {
                end = cookie.length;
            }
            setStr = cookie.substring(offset, end);
        }
    }
    return(setStr);
}

function setCookie_(name, value){
    $.cookie(name, value);
}

function getCookie_(name){
    $.cookie(name);
}





function setTheme(theme) {
    //el = $(document.body);
    el = $(document.documentElement);
    el.removeClass('theme-base-intense');
    el.removeClass('theme-inverse');
    el.removeClass('theme-inverse-intense');
    el.addClass(theme);
    setCookie("theme", theme);
}

function changeTheme() {
    el = $(document.documentElement);

    if (el.hasClass('theme-inverse-intense')) {
        el.removeClass('theme-inverse-intense');
        el.addClass("theme-base-intense");
        setCookie("theme", "base", "", '/', 'mixdreams.com','');
    }
    else if (el.hasClass('theme-inverse')) {
        el.removeClass('theme-inverse');
        ssetCookie("theme", "base", "", '/', 'mixdreams.com','');
    }
    else if (el.hasClass('theme-base-intense')) {
        el.removeClass('theme-base-intense');
        el.addClass("theme-inverse-intense");
        setCookie("theme", "inverse", "", '/', 'mixdreams.com','');
    }
    else {
        el.addClass("theme-inverse");
        setCookie("theme", "inverse", "", '/', 'mixdreams.com','');
    }
}

function init() {
    cookie = getCookie("theme");
    el = $(document.documentElement);
    if (cookie == "inverse") {
        if (el.hasClass('theme-base-intense')) {
            el.removeClass('theme-base-intense');
            el.addClass("theme-inverse-intense");
        }
        else if (!(el.hasClass('theme-inverse')) && !(el.hasClass('theme-inverse-intense'))) {
            el.addClass("theme-inverse");
        }
    }
}

init();




