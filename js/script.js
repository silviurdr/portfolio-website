

// handles the burger menu


$(document).ready(function () {
  $("#burger").on("click", function () {
    $(".mob-nav-link").toggleClass("open");
  });
  $(".mob-links").on("click", function () {
    $(".mob-nav-link").toggleClass("open");
  });
  $(".main-content").on("click", function () {
    $(".mob-nav-link").removeClass("open");
  });
  $("#5").on("click", function () {
    $(".mob-nav-link").removeClass("open");
  });
  $(".header-image").on("click", function () {
    $(".mob-nav-link").removeClass("open");
  });
});


// click logo to go to top of the page

$("#logo").on('click', function () {
  $('html, body').animate({ scrollTop: 0 }, 'slow');
})


// changes active class on header menu


let sections = $("section"),
  nav = $("nav"),
  mobile_menu = $("#mobile-menu"),
  nav_height = nav.outerHeight();

$(window).on("scroll", function () {
  let cur_pos = $(this).scrollTop();

  sections.each(function () {
    let top = $(this).offset().top - nav_height,
      bottom = top + $(this).outerHeight();

    if (cur_pos >= top + 10 && cur_pos <= bottom) {
      nav.find("a").removeClass("active");

      nav.find('a[href="#' + $(this).attr("id") + '"]').addClass("active");
    }
  });
});


// animated scroll to different sections of the page (mobile)


mobile_menu.find("a").on("click", function () {
  let $el = $(this),
    id = $el.attr("href");

  $(".mob-links").toggleClass("open");
  $("html, body").animate(
    {
      scrollTop: $(id).offset().top - nav_height - 42
    },
    800
  );

  return false;
});


// animated auto scroll to different sections of the page


nav.find("a").on("click", function () {
  let $el = $(this),
    id = $el.attr("href");

  $("html, body").animate(
    {
      scrollTop: $(id).offset().top - nav_height + 21
    },
    800
  );

  return false;
});

window.onscroll = function () {
  scrollFunction();
};


// modifies the header dimensions on scroll


function scrollFunction() {
  if
    (window.innerWidth > 990 && (document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50)
  ) {
    document.getElementById("header").style.height = "70px";
    document.getElementById("logo").style.height = "90px";
    document.getElementById("burger").style.height = "70px";
    document.getElementById("logo").style.width = "90px";
    document.getElementById("logo").style.fontSize = "2em";
    document.getElementById("logo").style.marginTop = "30px";
    document.getElementById("mobile-menu").style.marginTop = "-10px";
    document.getElementById("menu").style.lineHeight = "70px";
    document.getElementById("menu").style.marginLeft = "50px";
    document.getElementById("logo").style.backgroundImage =
      'url("../images/logo-full-scroll.png")';
  } else if (window.innerWidth > 990) {
    document.getElementById("header").style.height = "90px";
    document.getElementById("logo").style.height = "130px";
    document.getElementById("burger").style.height = "90px";
    document.getElementById("logo").style.width = "130px";
    document.getElementById("logo").style.fontSize = "2.5em";
    document.getElementById("logo").style.marginTop = "30px";
    document.getElementById("mobile-menu").style.marginTop = "-18px";
    document.getElementById("menu").style.lineHeight = "90px";
    document.getElementById("menu").style.marginLeft = "60px";
    document.getElementById("logo").style.backgroundImage =
      "url('images/logo-full.png')";
  } else if
    (window.innerWidth < 550 && (document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50)
  ) {
    document.getElementById("header").style.height = "42px";
    document.getElementById("logo").style.height = "70px";
    document.getElementById("burger").style.height = "44px";
    document.getElementById("logo").style.width = "70px";
    document.getElementById("logo").style.fontSize = "2em";
    document.getElementById("logo").style.marginTop = "14px";
    document.getElementById("mobile-menu").style.marginTop = "9px";
    document.getElementById("menu").style.lineHeight = "42px";
    document.getElementById("burger").style.lineHeight = "44px";
    document.getElementById("menu").style.marginLeft = "50px";
    document.getElementById("logo").style.backgroundImage =
      "url('/images/logo-max500-scroll.png')";
  } else if (window.innerWidth < 550) {
    document.getElementById("header").style.height = "52px";
    document.getElementById("logo").style.height = "90px";
    document.getElementById("burger").style.height = "54px";
    document.getElementById("logo").style.width = "90px";
    document.getElementById("logo").style.fontSize = "2.5em";
    document.getElementById("logo").style.marginTop = "14px";
    document.getElementById("mobile-menu").style.marginTop = "0px";
    document.getElementById("menu").style.lineHeight = "52px";
    document.getElementById("burger").style.lineHeight = "54px";
    document.getElementById("menu").style.marginLeft = "60px";
    document.getElementById("logo").style.backgroundImage =
      "url('../images/logo-max990-500.png')";
  }
}
