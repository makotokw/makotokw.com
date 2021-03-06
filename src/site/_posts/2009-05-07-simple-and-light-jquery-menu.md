---
title: "Simple and Light jQuery Menu"
category: "Product"
tag: ["jQuery"]
date: 2009-05-07
---
<link rel="stylesheet" type="text/css" media="screen" href="/assets/site/css/jquery.ui.potato.menu.css"/>

<style>
  #potatoMenuExample {
    margin: 10px;
  }

  .potato-menu li {
    font-size: 12px;
  }

  .potato-menu li ul {
    border-top: 2px solid #666;
    background: #333;
  }

  .potato-menu li ul a {
    width: 160px;
  }

  .potato-menu a {
    padding: 5px 12px 5px 12px;
    background: #333;
    color: #fff;
    padding-right: 20px;
  }

  .potato-menu a:hover {
    background: #666;
  }
</style>

Demo: <a href="/portfolio/jquery/ui_potato_menu/">jquery.ui.potato.menu</a>
Source Code and Download: <a href="https://github.com/makotokw/jquery.ui.potato.menu">github</a>

I read <a href="http://www.1stwebdesigner.com/resources/300-jquery-css-mootools-and-js-navigation-menus/">"300+ Jquery, CSS, MooTools and JS navigation menus"</a> and look for jQuery plugin for menu. But I didn't know which plugin is best way to use.

So... I have created new jQuery menu plugin.

<script type="text/javascript" src="/assets/site/js/jquery.ui.potato.menu.js"></script>
<script type="text/javascript">(function($) {
$(document).ready(function(){
$('#potatoMenuExample').ptMenu();
});
})(jQuery);
</script>

<ul id="potatoMenuExample">
<li><a href="#">Menu1</a></li>
<li><a href="#">Menu2</a></li>
<li><a href="#">Menu3</a><ul><li><a href="#">Menu3a</a></li><li><a href="#">Menu3b</a></li></ul></li>
</ul>

{% github makotokw/jquery.ui.potato.menu %}
