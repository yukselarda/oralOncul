function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
  $("body, html").toggleClass("hidden_time")
  $("body, html,banner").toggleClass("banner_time")
  $("body, html, header").toggleClass("mobile_menu")
  // document.body.style.overflow = 'hidden';
}

$('.aktivite_cards').slick({
  centerMode: true,
  centerPadding: '330px',
  focusOnSelect: true,
  slidesToShow: 1,
  infinity: true,
  arrows: true,
  variableWidth: false,
  responsive: [
    {
      breakpoint: 1208,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '150px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 1008,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '-10px',
        slidesToShow: 1
      }
    }
  ]
});

$('.uye_cards').slick({
  slidesToShow: 7,
  infinity: true,
  arrows: false,
  slidesToScroll: 1,
  autoplay: true,
  centerMode: false,
  autoplaySpeed: 0,
  speed: 3000,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        center: false,
        centerPadding: '40px',
        slidesToShow: 4
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        center: false,
        centerPadding: '40px',
        slidesToShow: 4
      }
    }
  ]
});

$(document).ready(function () {

  var counters = $(".count span");
  var countersQuantity = counters.length;
  var counter = [];

  for (i = 0; i < countersQuantity; i++) {
    counter[i] = parseInt(counters[i].innerHTML);
  }

  var count = function (start, value, id) {
    var localStart = start;
    setInterval(function () {
      if (localStart < value) {
        localStart++;
        counters[id].innerHTML = localStart;
      }
    }, 40);
  }

  for (j = 0; j < countersQuantity; j++) {
    count(0, counter[j], j);
  }
});