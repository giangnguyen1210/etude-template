var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

$(document).ready(function () {
  $(window).scroll(function () {
    var scrollHeight = 735;
    // Kiểm tra nếu cuộn xuống dưới màn hình
    if ($(this).scrollTop() > scrollHeight) {
      // Thay đổi màu nền của header thành đen
      $('header').css('background-color', '#11171CF2');
    } else {
      // Nếu không, header sẽ có màu nền trong suốt
      $('header').css('background-color', 'transparent');
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // Load JSON data
  fetch('product.json')
    .then(response => response.json())
    .then(data => {
      // Render JSON data in HTML
      const outputDiv = document.querySelector('#product-info');
      let productsHTML = '';

      data.forEach(product => {
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
        </div>
        `;
      });

      outputDiv.innerHTML = productsHTML;
    })
    .catch(error => console.error('Error loading JSON:', error));
});

document.addEventListener("DOMContentLoaded", function () {
  // Load JSON data
  fetch('gallery.json')
    .then(response => response.json())
    .then(data => {
      // Render JSON data in HTML
      const outputDiv = document.querySelector('#gallery-info');
      let galleryHTML = '';

      data.forEach(gall => {
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

      outputDiv.innerHTML = galleryHTML;
    })
    .catch(error => console.error('Error loading JSON:', error));
});