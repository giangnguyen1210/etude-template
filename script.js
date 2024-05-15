$(document).ready(function () {
  // slide 
  var swiper = new Swiper(".mySwiper", {
    // spaceBetween: 30,
    // effect slider
    effect: "fade",
    // effect: "cube",
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // auto play in 3s
    autoplay: {
      delay: 3000,
      disableOnInteraction: false // Tắt tự động chuyển slide khi người dùng tương tác
    },
    // Sự kiện cho các chuyển đổi slide
    on: {
      // Khi bắt đầu chuyển đổi slide
      slideChangeTransitionStart: function () {
        let slides = document.querySelectorAll('.swiper-slide img');
        // Đặt kích thước của tất cả các hình ảnh về kích thước ban đầu
        slides.forEach((img) => {
          img.style.transform = 'scale(1)';
        });
        // Lấy hình ảnh của slide hiện tại và phóng to nó lên một chút
        let activeSlide = document.querySelector('.swiper-slide-active img');
        activeSlide.style.transform = 'scale(1.1)';
      },
      // Khi kết thúc chuyển đổi slide
      slideChangeTransitionEnd: function () {
        // Lấy hình ảnh của slide hiện tại và phóng to nó lên một chút
        let activeSlide = document.querySelector('.swiper-slide-active img');
        activeSlide.style.transform = 'scale(1.1)';
      }
    }
  });
  // click vào button .more-btn mở navbarRight
  $('.more-btn').on('click', function () {
    $('#navbarRight').css('width', '388px');
  });

  // click vào button close #closeNavRight tắt navbarRight
  $('#closeNavRight').on('click', function () {
    $('#navbarRight').css('width', '0');
  })

  // click vào button #tabsBestsellers và mở #bestsellers
  $('#tabsBestsellers').click(function () {
    $('#bestsellers').toggleClass('open');
    $('.tabs').toggleClass('left');
    $('#overlay').toggleClass('open');
  });

  // click vào button .bestsellers__header--close để tắt #bestsellers
  $('.bestsellers__header--close').click(function () {
    $('#bestsellers').removeClass('open');
    $('.tabs').removeClass('left');
    $('#overlay').removeClass('open');
  })

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

  // button menuItem 
  var menuItems = $('.navbar__menu > li a');
  // click vào menuItem 
  menuItems.on('click', function () {
    // đổi màu cho menu được click
    menuItems.removeClass('active');
    $(this).addClass('active');
    // Lấy giá trị của thuộc tính 'href' của menu item được click
    var target = $(this).attr('href');
    // Lấy vị trí offset từ đầu của trang đến phần tử mục tiêu
    var targetOffset = $(target).offset().top;
    // Animate the scroll to the target section
    $('html, body').animate({
      scrollTop: targetOffset
    }, 0);
  });

  // highlight menu item
  function highlightActiveSection() {
    let sections = $('#home, #journey, #gallery, #product, #fashion, #contact');
    let navLinks = $('.navbar__menu > li  a');
    // Lấy vị trí cuộn hiện tại của trang web
    let top = $(window).scrollTop();
    // Duyệt qua từng phần tử mục tiêu
    sections.each(function () {
      // Lấy vị trí offset và chiều cao của phần tử mục tiêu
      let offset = $(this).offset().top - 500;
      let height = $(this).outerHeight();
      let id = $(this).attr('id'); // Lấy id của phần tử
      // Kiểm tra xem phần tử có hiển thị trên màn hình không
      if (top >= offset && top < offset + height) {
        // Loại bỏ class 'active' (màu) khỏi tất cả các liên kết điều hướng
        navLinks.removeClass('active');
        $('.navbar__menu > li > a[href="#' + id + '"]').addClass('active');
      }
    });
  }

  // khi scroll > 100 thì header đổi màu sang maincolor và highlight menu item tương ứng
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".header").addClass("scroll");
    } else {
      $(".header").removeClass("scroll");
    }
    highlightActiveSection();
  });

  // khi hover vào button màu cam bên trái thì show các thẻ tương ứng
  $('.tabs__cart--right, .tabs__image--right, .tabs__folder--right').mouseenter(function () {
    $(this).siblings('.tabs__cart--left').addClass('show');
    $(this).siblings('.tabs__image--left').addClass('show');
    $(this).siblings('.tabs__folder--left').addClass('show');
  });

  // khi mouseleave thì huỷ show 
  $('.tabs__cart--right, .tabs__image--right, .tabs__folder--right').mouseleave(function () {
    $(this).siblings('.tabs__cart--left').removeClass('show');
    $(this).siblings('.tabs__image--left').removeClass('show');
    $(this).siblings('.tabs__folder--left').removeClass('show');
  });


  // mobile
  // Function to toggle submenu when list-btn is clicked
  $(".list-btn").click(function () {
    $(".navbar__menu").toggleClass("show-submenu");
    $(".list-btn").hide(); // Ẩn icon list-btn
    $(".close-btn").show(); // hiển thị icon close-btn
    $(".mobile__tablet").toggleClass("main-color");
  });

  // khi click vào close-btn thì huỷ show các menu
  $(".close-btn").click(function () {
    $(".navbar__menu").removeClass("show-submenu");
    $(".close-btn").hide();
    $(".cart-btn, .search-btn, .list-btn").show(); // Ẩn các icon khác
    $(".mobile__tablet").removeClass("main-color");
  })

  // Function to toggle submenu when a menu item is clicked
  $(".navbar__menu > li > a").click(function () {
    $(this).toggleClass("active");
    $(this).next(".menu__submenu").toggleClass("show");
  });




});  
