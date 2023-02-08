function swiperSlider() {
    const sliderDiff = document.querySelectorAll('[data-slider="slider-diff"]');
    if (sliderDiff) {
        sliderDiff.forEach(slider => {
          //
          let arrowLeft = slider.querySelector('.swiper-button-prev');
          let arrowRight = slider.querySelector('.swiper-button-next');
          //
    
          // let pagination = slider.querySelector('.swiper-pagination');
          swiper = new Swiper(slider.querySelector('.swiper'), {
            speed: 1500,
            // centeredSlides: true,
            // autoplay: {
            //     delay: 3000,
            //     disableOnInteraction: false,
            // },
    
            slidesPerView: 2,
            spaceBetween: 20,
            // pagination: {
            //     el: pagination,
            //     clickable: true,
            //     renderBullet: function (index, className) {
            //         return '<li class="' + className + '"></li>';
            //     },
            // },
            //
            navigation: {
              nextEl: arrowRight,
              prevEl: arrowLeft,
            },
            //
            on: {
              transitionStart: function () {
                let previousIndex = this.previousIndex;
                let previousSlide =
                  slider.getElementsByClassName('swiper-slide')[previousIndex];
                if (previousSlide) {
                  setTimeout(function () {
                    previousSlide.classList.remove('is-play');
                  }, 1000);
                }
              },
              transitionEnd: function () {
                let activeIndex = this.activeIndex;
                let activeSlide =
                  slider.getElementsByClassName('swiper-slide')[activeIndex];
                activeSlide.classList.add('is-play');
              },
            },
            breakpoints: {
              // when window width is >= 0px
              0: {
                slidesPerView: 'auto',
                centeredSlides: true,
                spaceBetween: 20,
              },
              // when window width is >= 1024px
              1024: {
                slidesPerView: 3,
                spaceBetween: 34,
                // centeredSlides: false,
              },
              // when window width is >= 1280px
              1280: {
                slidesPerView: 3,
                spaceBetween: 87,
              },
            },
          });
        });
      }
}
window.addEventListener('load', swiperSlider, false);