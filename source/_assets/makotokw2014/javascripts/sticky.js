(function($){
    var isMobile = navigator.userAgent.match(/(iPhone)|(iPod)|(android)|(webOS)/i);
    $(document).ready(function($) {
        var $pageHome = $('#home');
        if (!isMobile) {
            $pageHome.css('height', window.innerHeight+'px');
            $(window).resize(function() {
                $pageHome.css('height', window.innerHeight+'px');
            });
        }
   });

    var lastId,
        $headNavBar = $('#headNavBar'),
        $menu = $('#menuNav'),
        topMenuHeight = $menu.outerHeight() + 15,
        $menuItems = $('#menuNav, #menuHome').find("a");
//        $scrollItems = $menuItems.map(function(){
//            var $item = $($(this).parent().not('.custom-link').children().attr("href"));
//            if ($item.length) {
//                return $item;
//            }
//        });


    $menuItems.click(function(e){
        var href = this.hash,
            offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+30;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, window.speed, 'easeInOutExpo');
        e.preventDefault();
    });


    var stickyHeaderTop = 100;

    // Bind to scroll
    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop();
        var fromTop = scrollTop + topMenuHeight;

//        var cur = $scrollItems.map(function(){
//            if ($(this).offset().top < fromTop) {
//                return this;
//            }
//
//        });

//        cur = cur[cur.length-1];
//        var id = cur && cur.length ? cur[0].id : "";
//
//        if (lastId !== id) {
//            lastId = id;
//            $menuItems
//                .parent().removeClass("active")
//                .end().filter("[href=#"+id+"]").parent().addClass("active");
//        }
        if (scrollTop > stickyHeaderTop) {
            $headNavBar.fadeIn();
        } else {
            $headNavBar.fadeOut();
        }
    });

    $.fn.extend({
        stickyFooter: function(options) {
            var $footer = $(this);
            positionFooter();
            $(window)
                .on('sticky', positionFooter)
                .scroll(positionFooter)
                .resize(positionFooter);
            function positionFooter() {
                var $margin = $('#footerMargin');
                var docHeight = $(document.body).height() - $margin.height();
                if(docHeight < $(window).height()){
                    var diff = $(window).height() - docHeight;
                    if ($margin.length == 0) {
                        $margin = $('<div id="#footerMargin"/>');
                        $footer.before($margin);
                    }
                    $margin.height(diff);
                }
            }
        }
    });
    $('.footer').stickyFooter();
})(jQuery);