$(document).ready(function () {
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    }
  });

  let mybutton = $("#scrollToTop");

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      mybutton.css("display", "block");
    } else {
      mybutton.css("display", "none");
    }
  });

  mybutton.click(function () {
    $("body,html").animate({ scrollTop: 0 }, 500);
    return false;
  });

  $.getJSON("product.json", function (data) {
    let outputDiv = $("#product-info");
    let productsHTML = '';

    $.each(data, function (index, product) {
      productsHTML += `
        <div class="col-xl-3 col-md-6">
          <div class="product__info">
            <div class="product__info--image">
              <img src="${product.image_url}" alt="${product.name}">
              ${product.discount_percent ? `<span class="onsale">-${product.discount_percent}%</span>` : ''}
              ${product.status === 'out of stock' ? `<span class="stock">${product.status}</span>` : ''}
              <span class="wishlist">
                <i class="ti-heart"></i>
              </span>
              <div class="info__bottom">
                <div class="info__bottom--quick-view">
                  <i class="ti-eye"></i>
                  Quick view
                </div>
                <div class="info__bottom--add-cart">
                  <i class="ti-shopping-cart"></i>
                  Add to cart
                </div>
              </div>
            </div>
            <div class="product__info--name">
              ${product.name}
            </div>
            <div class="product__info--price">
              ${product.discount_price ? `<span class="product__info--discount text-decoration-line-through">$${product.price}</span>` : ''}
              <span class="product__info--cost">$${product.discount_price || product.price}</span>
            </div>
          </div>
        </div>
      `;
    });

    outputDiv.html(productsHTML);
  });

  $.getJSON("gallery.json", function (data) {
    let outputDiv = $("#gallery-info");
    let galleryHTML = '';

    $.each(data, function (index, gall) {
      galleryHTML += `
        <div class="col-md-3 gallery__info">
          <div class="gallery__info--image">
            <img src="${gall.image_url}" alt="${gall.name}" />
          </div>
          <div class="gallery__info--name">
            ${gall.name}
          </div>
          <div class="gallery__info--link">
            View all <i class="ti-arrow-right"></i>
          </div>
        </div>
      `;
    });

    outputDiv.html(galleryHTML);
  });

  var menuItems = $('.navbar__menu > li a');

  menuItems.on('click', function () {
    menuItems.removeClass('active');
    $(this).addClass('active');
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
});


// Function to toggle submenu when list-btn is clicked
$(".list-btn").click(function () {
  $(".navbar__menu").toggleClass("show-submenu");
});

// Function to toggle submenu when a menu item is clicked
$(".navbar__menu > li > a").click(function () {
  $(this).toggleClass("active");
  $(this).next(".menu__submenu").toggleClass("show");
});