       var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true
        });

        $(".shop").click(function () {
            $('html,body').animate({
                scrollTop: $("#siteBanner2").offset().top
            },
                500);
        });

        $(".product").click(function () {
            $('html,body').animate({
                scrollTop: $("#products").offset().top
            },
                500);
        });

        $(".support").click(function () {
            $('html,body').animate({
                scrollTop: $("#service").offset().top
            },
                500);
        });     
