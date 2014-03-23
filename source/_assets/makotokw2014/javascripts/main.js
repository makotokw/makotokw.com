/*global makotokw, $*/

window.makotokw = {
    isMobile: navigator.userAgent.match(/(iPhone)|(iPod)|(android)|(webOS)/i),
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {

    }
};

$(document).ready(function () {
    'use strict';
    makotokw.init();
});
