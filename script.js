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


let mybutton = document.getElementById("scrollToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// $(document).ready(function () {
//   $(window).scroll(function () {
//     var scrollHeight = 735;
//     var mainColor = '#11171CF2';
//     // Kiểm tra nếu cuộn xuống dưới màn hình
//     if ($(this).scrollTop() > scrollHeight) {
//       // Thay đổi màu nền của header thành đen
//       $('header').css('background-color', mainColor);
//     } else {
//       // Nếu không, header sẽ có màu nền trong suốt
//       $('header').css('background-color', 'transparent');
//     }
//   });
// });

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

var menuItems = document.querySelectorAll('.navbar__menu > li > a');
console.log(menuItems);
// Loop through each menu item
menuItems.forEach(function (item) {
  // Add click event listener
  item.addEventListener('click', function () {
    // Remove 'active' class from all menu items
    menuItems.forEach(function (item) {
      item.classList.remove('active');
    });
    // Add 'active' class to the clicked menu item
    this.classList.add('active');
  });
});


const highlightActiveSection = () => {
  let sections = document.querySelectorAll('#home, #journey, #gallery, #product, #fashion, #contact');

  console.log(sections);
  let navLinks = document.querySelectorAll('.navbar__menu > li > a');
  let top = window.scrollY;

  sections.forEach(sec => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
      });
      document.querySelector('.navbar__menu > li > a[href="#' + id + '"]').classList.add('active');
    }
  });
}

window.onscroll = function () {
  if (window.scrollY > 100) {
    document.querySelector(".header").classList.add("scroll");
  } else {
    document.querySelector(".header").classList.remove("scroll");
  }

  highlightActiveSection();

};