 // Initialize AOS
AOS.init({
  duration: 800,
  easing: 'slide',
});

(function () {
  "use strict";

  // Initialize Stellar.js
  if ($.fn.stellar) {
    $(window).stellar({
      responsive: true,
      parallaxBackgrounds: true,
      parallaxElements: true,
      horizontalScrolling: false,
      hideDistantElements: false,
      scrollProperty: 'scroll',
      horizontalOffset: 0,
      verticalOffset: 0,
    });
  }

  // Adjust full-height elements dynamically
  const setFullHeight = () => {
    const elements = document.querySelectorAll('.js-fullheight');
    const adjustHeight = () => {
      const height = window.innerHeight;
      elements.forEach(el => el.style.height = `${height}px`);
    };
    adjustHeight();
    window.addEventListener('resize', adjustHeight);
  };
  setFullHeight();

  // Remove loader after page load
  const loader = () => {
    const loaderElement = document.getElementById('ftco-loader');
    if (loaderElement) {
      setTimeout(() => loaderElement.classList.remove('show'), 1);
    }
  };
  loader();

  // Initialize Owl Carousel for testimonials
  const initializeCarousel = () => {
    const carousel = $('.carousel-testimony');
    if (carousel.length) {
      carousel.owlCarousel({
        center: true,
        loop: true,
        items: 1,
        margin: 30,
        stagePadding: 0,
        nav: false,
        responsive: {
          0: { items: 1 },
          600: { items: 3 },
          1000: { items: 3 },
        },
      });
    }
  };
  initializeCarousel();

  // Add hover effects for navigation dropdowns
  const setupNavHover = () => {
    const dropdowns = document.querySelectorAll('nav .dropdown');
    dropdowns.forEach(dropdown => {
      dropdown.addEventListener('mouseenter', () => {
        dropdown.classList.add('show');
        dropdown.querySelector('> a').setAttribute('aria-expanded', 'true');
        const menu = dropdown.querySelector('.dropdown-menu');
        if (menu) menu.classList.add('show');
      });
      dropdown.addEventListener('mouseleave', () => {
        dropdown.classList.remove('show');
        dropdown.querySelector('> a').setAttribute('aria-expanded', 'false');
        const menu = dropdown.querySelector('.dropdown-menu');
        if (menu) menu.classList.remove('show');
      });
    });
  };
  setupNavHover();

  // Handle scroll-based navbar effects
  const setupScrollEffects = () => {
    const navbar = document.querySelector('.ftco_navbar');
    const scrollWrapper = document.querySelector('.js-scroll-wrap');
    const onScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 150) {
        navbar?.classList.add('scrolled');
      } else {
        navbar?.classList.remove('scrolled', 'sleep');
      }

      if (scrollTop > 350) {
        navbar?.classList.add('awake');
        scrollWrapper?.classList.add('sleep');
      } else {
        navbar?.classList.remove('awake');
        navbar?.classList.add('sleep');
        scrollWrapper?.classList.remove('sleep');
      }
    };

    window.addEventListener('scroll', onScroll);
  };
  setupScrollEffects();

  // Initialize content animations
  const contentWayPoint = () => {
    let i = 0;
    const items = document.querySelectorAll('.ftco-animate');

    items.forEach(item => {
      const waypoint = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !item.classList.contains('ftco-animated')) {
            i++;
            item.classList.add('item-animate');

            setTimeout(() => {
              const effect = item.getAttribute('data-animate-effect');
              item.classList.add(effect || 'fadeInUp', 'ftco-animated');
              item.classList.remove('item-animate');
            }, i * 50);

            waypoint.disconnect();
          }
        });
      }, { threshold: 0.1 });

      waypoint.observe(item);
    });
  };
  contentWayPoint();

  // Smooth scroll for anchor links
  const setupSmoothScroll = () => {
    const links = document.querySelectorAll(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']");

    links.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();

        const targetId = link.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);

        if (target) {
          window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth',
          });
        }
      });
    });
  };
  setupSmoothScroll();

  // Initialize Magnific Popup
  const initMagnificPopup = () => {
    const imagePopup = $('.image-popup');
    if (imagePopup.length) {
      imagePopup.magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: true,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom',
        gallery: { enabled: true, navigateByImgClick: true, preload: [0, 1] },
        image: { verticalFit: true },
        zoom: { enabled: true, duration: 300 },
      });
    }

    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    });
  };
  initMagnificPopup();

  // Initialize date and time pickers
  $('.appointment_date').datepicker({
    format: 'mm/dd/yyyy',
    autoclose: true,
  });
  $('.appointment_time').timepicker();

})();

document.addEventListener('DOMContentLoaded', function () {
    const dropdowns = document.querySelectorAll('.nav-item.dropdown');

    dropdowns.forEach(dropdown => {
        const dropdownToggle = dropdown.querySelector('.nav-link.dropdown-toggle');
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');

        // Add click event for toggling dropdown on mobile
        dropdownToggle.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent link navigation
            dropdownMenu.classList.toggle('show'); // Toggle visibility

            // Close other open dropdowns
            dropdowns.forEach(otherDropdown => {
                if (otherDropdown !== dropdown) {
                    otherDropdown.querySelector('.dropdown-menu').classList.remove('show');
                }
            });
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.nav-item.dropdown')) {
            dropdowns.forEach(dropdown => {
                dropdown.querySelector('.dropdown-menu').classList.remove('show');
            });
        }
    });
});


// owl carousel for treatment images on treatment pages
$(document).ready(function(){
    $(".treatment-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000, // 4 seconds per image
        autoplayHoverPause: false,
        margin: 10,
        items: 1, // Show 1 image at a time
        nav: false,
        dots: false // No navigation dots
    });
});
