$(document).ready(function () {
  // slide 
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false
    // }
  });
  $('.more-btn').on('click', function () {
    $('#navbarRight').css('width', '388px');
  });

  // $(document).on('click', function (event) {
  //   if (!$(event.target).closest('.more-btn, #navbarRight').length) {
  //     $('#navbarRight').css('width', '0');
  //   }
  // });

  $('#closeNavRight').on('click', function () {
    $('#navbarRight').css('width', '0');
  })

  $('#tabsBestsellers').click(function () {
    $('#bestsellers').toggleClass('open');
    $('.tabs').toggleClass('left');
    $('#overlay').toggleClass('open');
  });


  $('.bestsellers__header--close').click(function(){
    $('#bestsellers').removeClass('open');
    $('.tabs').removeClass('left');
    $('#overlay').removeClass('open');
  })
  // $('#overlay').click(function() {
  //   $('#bestsellers').removeClass('open');
  //   $('#tabs').removeClass('open');
  //   $(this).removeClass('open');
  // });
  // button scroll to top
  let mybutton = $("#scrollToTop");

  $(window).scroll(function () {
    // nếu scroll high > 100 thì hiển thị button scroll to top
    if ($(this).scrollTop() > 100) {
      mybutton.css("display", "block");
    } else {
      mybutton.css("display", "none");
    }
  });

  // click vào button thì cuộn lên đầu trang thời gian cuộn 0.5s
  mybutton.click(function () {
    $("body,html").animate({ scrollTop: 0 }, 0);
    return false;
  });

  var menuItems = $('.navbar__menu > li a');

  menuItems.on('click', function () {
    menuItems.removeClass('active');
    $(this).addClass('active');

    var target = $(this).attr('href');
    var targetOffset = $(target).offset().top;

    // Animate the scroll to the target section
    $('html, body').animate({
      scrollTop: targetOffset
    }, 0);
  });

  function highlightActiveSection() {
    let sections = $('#home, #journey, #gallery, #product, #fashion, #contact');
    let navLinks = $('.navbar__menu > li  a');
    let top = $(window).scrollTop();

    sections.each(function () {
      let offset = $(this).offset().top - 500;
      let height = $(this).outerHeight();
      let id = $(this).attr('id');

      if (top >= offset && top < offset + height) {
        navLinks.removeClass('active');
        $('.navbar__menu > li > a[href="#' + id + '"]').addClass('active');
      }
    });
  }

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".header").addClass("scroll");
    } else {
      $(".header").removeClass("scroll");
    }
    highlightActiveSection();
  });
  $('.tabs__cart--right, .tabs__image--right, .tabs__folder--right').mouseenter(function () {
    $(this).siblings('.tabs__cart--left').addClass('show');
    $(this).siblings('.tabs__image--left').addClass('show');
    $(this).siblings('.tabs__folder--left').addClass('show');
  });

  $('.tabs__cart--right, .tabs__image--right, .tabs__folder--right').mouseleave(function () {
    $(this).siblings('.tabs__cart--left').removeClass('show');
    $(this).siblings('.tabs__image--left').removeClass('show');
    $(this).siblings('.tabs__folder--left').removeClass('show');
  });

 

});


// Function to toggle submenu when list-btn is clicked
$(".list-btn").click(function () {
  $(".navbar__menu").toggleClass("show-submenu");
  $(".cart-btn, .search-btn, .list-btn").hide(); // Ẩn các icon khác
  $(".close-btn").show();
  $(".mobile__tablet").toggleClass("main-color");
});

$(".close-btn").click(function () {
  $(".navbar__menu").removeClass("show-submenu");
  $(".close-btn").hide();
  $(".cart-btn, .search-btn, .list-btn").show(); // Ẩn các icon khác
  $(".mobile__tablet").removeClass("main-color");

  var $closeIcon = $('.close-icon');
  $closeIcon.addClass('rotate');

  // Loại bỏ lớp 'rotate' sau khi animation kết thúc để có thể click nhiều lần
  setTimeout(function () {
    $closeIcon.removeClass('rotate');
  }, 2); // Thời gian này phải khớp với thời gian animation
})

// Function to toggle submenu when a menu item is clicked
$(".navbar__menu > li > a").click(function () {
  $(this).toggleClass("active");
  $(this).next(".menu__submenu").toggleClass("show");
});


