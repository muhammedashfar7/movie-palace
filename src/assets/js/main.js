document.addEventListener('DOMContentLoaded', function() {
    if (window.jQuery) {
        "use strict"; // start of use strict

        /*==============================
        Menu
        ==============================*/
        // document.addEventListener('touchstart', onTouchStart, { passive: true });
        $('.header__btn').on('click', function() {
            $(this).toggleClass('header__btn--active');
            $('.header__nav').toggleClass('header__nav--active');
            $('.body').toggleClass('body--active');

            if ($('.header__search-btn').hasClass('active')) {
                $('.header__search-btn').toggleClass('active');
                $('.header__search').toggleClass('header__search--active');
            }
        });

        /*==============================
        Search
        ==============================*/
        $('.header__search-btn').on('click', function() {
            $(this).toggleClass('active');
            $('.header__search').toggleClass('header__search--active');
            $('section.home #myTabContent .row').toggleClass('p-t-50')
            $('input[name="query"]').focus()

            if ($('.header__btn').hasClass('header__btn--active')) {
                $('.header__btn').toggleClass('header__btn--active');
                $('.header__nav').toggleClass('header__nav--active');
                $('.body').toggleClass('body--active');
            }
        });

        /*==============================
        Home
        ==============================*/

        $('.home__nav--next').on('click', function() {
            $('.home__carousel, .home__bg').trigger('next.owl.carousel');
        });
        $('.home__nav--prev').on('click', function() {
            $('.home__carousel, .home__bg').trigger('prev.owl.carousel');
        });

        $(window).on('resize', function() {
            var itemHeight = $('.home__bg').height();
            $('.home__bg .item').css("height", itemHeight + "px");
        });
        $(window).trigger('resize');

        /*==============================
        Tabs
        ==============================*/
        $('.content__mobile-tabs-menu li').each(function() {
            $(this).attr('data-value', $(this).text().toLowerCase());
        });

        $('.content__mobile-tabs-menu li').on('click', function() {
            var text = $(this).text();
            var item = $(this);
            var id = item.closest('.content__mobile-tabs').attr('id');
            $('#' + id).find('.content__mobile-tabs-btn input').val(text);
        });


        /*==============================
        Filter
        ==============================*/
        $('.filter__item-menu li').each(function() {
            $(this).attr('data-value', $(this).text().toLowerCase());
        });

        $('.filter__item-menu li').on('click', function() {
            var text = $(this).text();
            var item = $(this);
            var id = item.closest('.filter__item').attr('id');
            $('#' + id).find('.filter__item-btn input').val(text);
        });


        /*
        /url pathnames
        */
        let pathname = window.location.pathname,
            header = $('ul.header__nav')
        if (pathname === '/') {
            header.children().each(function(menu) { $(this).removeClass('active').find('*').removeClass('active') })
            header.find('li:nth-child(1)').addClass('active')
        } else if (pathname.includes('/search/')) {
            header.children().each(function(menu) { $(this).removeClass('active').find('*').removeClass('active') })
            $('.header__search-btn').trigger('click')

            const parsedUrl = new URL(window.location)
            let query = parsedUrl.searchParams.get('q') || parsedUrl.searchParams.get('query')

            if (pathname.split('/').pop()) {
                query = pathname.split('/').pop()
            }

            $('input[name="query"]').val(query)

            console.log(query);
        } else if (pathname.includes('/movies/')) {
            header.children().each(function(menu) { $(this).removeClass('active').find('*').removeClass('active') })
            header.find('li:nth-child(2)').addClass('active')
        } else if (pathname.includes('/tv-shows/')) {
            header.children().each(function(menu) { $(this).removeClass('active').find('*').removeClass('active') })
            header.find('li:nth-child(3)').addClass('active')
        }

        function footerAlign() {
            var docHeight = $(window).height();
            var footerHeight = $('.footer').height();
            var footerTop = $('.footer').position().top + footerHeight + 70;

            if (footerTop < docHeight) {
                $('.footer').css('margin-top', 10 + (docHeight - footerTop) + 'px');
            }
        }

        footerAlign()

        window.addEventListener('resize', footerAlign)

        // web share api
        if (navigator.share) {
            // console.log($('.share-btn,.grid-share-btn'));
            $('.share-btn,.grid-share-btn').addClass('show')
            $('.total_votes').addClass('hide')

            $('.share-btn,.grid-share-btn').on('click', function() {
                const host = `${window.location.protocol}//${window.location.hostname}`;
                let url = host + $(this).data('url')
                let title = $(this).data('title')

                navigator.share({
                        title,
                        url
                    }).then(() => {
                        console.log('Thanks! 😄');
                    })
                    .catch(err => {
                        console.log(`Couldn't share 🙁`);
                    });
            })
        } else {
            $('.share-btn,.grid-share-btn').removeClass('show')
            $('.total_votes').removeClass('hide')

            console.log('share is not supported');
        }


        /*==============================
        Morelines
        ==============================*/
        // $('.card__description--details').moreLines({
        // 	linecount: 6,
        // 	baseclass: 'b-description',
        // 	basejsclass: 'js-description',
        // 	classspecific: '_readmore',
        // 	buttontxtmore: "",
        // 	buttontxtless: "",
        // 	animationspeed: 400
        // });
    }
})