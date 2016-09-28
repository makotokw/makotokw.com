(function() {
window["JST"] = window["JST"] || {};

window["JST"]["feed_entry.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="entry">\n  <div class="entry-header">\n    <span class="entry-date">' +
((__t = ( moment(publishedDate).format('YYYY/MM/DD') )) == null ? '' : __t) +
'</span>\n    <span class="entry-title"><a href="' +
((__t = ( link )) == null ? '' : __t) +
'">' +
((__t = ( title )) == null ? '' : __t) +
'</a></span>\n  </div>\n  <p class="entry-summary">' +
((__t = ( contentSnippet )) == null ? '' : __t) +
'\n  <p>\n</div>\n\n\n';

}
return __p
}})();
(function() {
window["JST"] = window["JST"] || {};

window["JST"]["github.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 _.each(repos, function (repo) { ;
__p += '\n<div class="entry">\n  <div class="entry-header">\n    <span class="entry-date">\n      ' +
((__t = ( moment(repo.pushed_at).format('YYYY/MM/DD') )) == null ? '' : __t) +
'\n    </span>\n    <span class="entry-title">\n      <a href="' +
((__t = ( repo.html_url )) == null ? '' : __t) +
'">' +
((__t = ( repo.name )) == null ? '' : __t) +
'</a>\n      <span>★' +
((__t = ( repo.stargazers_count )) == null ? '' : __t) +
'</span>\n    </span>\n  </div>\n  <p class="entry-summary">' +
((__t = ( repo.description )) == null ? '' : __t) +
'</p>\n</div>\n';
 }); ;
__p += '\n\n\n';

}
return __p
}})();
(function() {
window["JST"] = window["JST"] || {};

window["JST"]["loading.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<p><i class="fa fa-spinner fa-spin"></i> Loading...</p>';

}
return __p
}})();
(function() {
window["JST"] = window["JST"] || {};

window["JST"]["portfolio_item.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<img src="' +
((__t = ( thumbnail )) == null ? '' : __t) +
'" alt="' +
((__t = ( name )) == null ? '' : __t) +
'" class="portfolioItem-thumbnail">\n<div class="portfolioItem-title">' +
((__t = ( name )) == null ? '' : __t) +
'</div>\n<div class="portfolioItem-tags"></div>\n<p class="portfolioItem-description">' +
((__t = ( description )) == null ? '' : __t) +
'</p>\n<div class="portfolioItem-over" style="opacity: 0;"></div>\n';

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
__p += '<div class="portfolio-tagCategory">\n    <h3 class="portfolio-tagCategory-title">' +
((__t = ( title )) == null ? '' : __t) +
'</h3>\n    ';
 _.each(list, function(tag) { ;
__p += '\n    <a class="portfolioTag" data-tag="' +
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
(function() {
window["JST"] = window["JST"] || {};

window["JST"]["recent_portfolio_item.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="entry-header">\n  <span class="entry-date">\n    ' +
((__t = ( last_updated_year )) == null ? '' : __t) +
'\n  </span>\n  <span class="entry-title">\n    <a href="' +
((__t = ( url )) == null ? '' : __t) +
'">' +
((__t = ( name )) == null ? '' : __t) +
'</a>\n  </span>\n  <span class="entry-categories">' +
((__t = ( categories )) == null ? '' : __t) +
'</span>\n</div>\n<p class="entry-summary">' +
((__t = ( description )) == null ? '' : __t) +
'</p>\n';

}
return __p
}})();
(function() {
window["JST"] = window["JST"] || {};

window["JST"]["recent_portfolio_list.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '\n\n';

}
return __p
}})();