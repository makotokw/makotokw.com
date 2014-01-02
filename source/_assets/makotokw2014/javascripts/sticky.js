(function($){
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