(function() {
window["JST"] = window["JST"] || {};

window["JST"]["feed_entry.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="feed-entry">\n    <span class="entry-published entry-published-feed">' +
((__t = ( friendlyPublishedDate )) == null ? '' : __t) +
'</span>\n    <span class="entry-title entry-title-feed"><a href="' +
((__t = ( link )) == null ? '' : __t) +
'">' +
((__t = ( title )) == null ? '' : __t) +
'</a></span>\n    <p class="entry-summary entry-summary-feed">' +
((__t = ( contentSnippet )) == null ? '' : __t) +
'<p>\n</div>\n\n\n';

}
return __p
}})();
(function() {
window["JST"] = window["JST"] || {};

window["JST"]["portfolio.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="portfolio-image"><img src="' +
((__t = ( thumbnail )) == null ? '' : __t) +
'" alt="' +
((__t = ( name )) == null ? '' : __t) +
'"></div>\n<div class="portfolio-name">' +
((__t = ( name )) == null ? '' : __t) +
'</div>\n<div class="portfolio-tags"></div>\n<div class="portfolio-over" style="opacity: 0;"></div>\n';

}
return __p
}})();
(function() {
window["JST"] = window["JST"] || {};

window["JST"]["portfolio_list.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '\n\n';

}
return __p
}})();
(function() {
window["JST"] = window["JST"] || {};

window["JST"]["portfolio_loading.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<p><i class="fa fa-spinner fa-spin"></i> Loading...</p>';

}
return __p
}})();
(function() {
window["JST"] = window["JST"] || {};

window["JST"]["portfolio_tag.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<a href="#"></a>\n\n';

}
return __p
}})();
(function() {
window["JST"] = window["JST"] || {};

window["JST"]["portfolio_tag_category.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="portfolio-tag-category">\n    <h3 class="portfolio-category-title">' +
((__t = ( title )) == null ? '' : __t) +
'</h3>\n    ';
 _.each(list, function(tag) { ;
__p += '\n    <a class="portfolio-tag" data-tag="' +
((__t = ( tag.get('id') )) == null ? '' : __t) +
'">' +
((__t = ( tag.get('name') )) == null ? '' : __t) +
'</a>\n    ';
 }) ;
__p += '\n</div>';

}
return __p
}})();
(function() {
window["JST"] = window["JST"] || {};

window["JST"]["portfolio_tag_list.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '';

}
return __p
}})();