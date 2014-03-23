this["JST"] = this["JST"] || {};

this["JST"]["feed-entry"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="feed-entry">\n<span class="feed-entry-published">' +
((__t = ( publishedDate )) == null ? '' : __t) +
'</span>\n<span class="feed-entry-title"><a href="' +
((__t = ( link )) == null ? '' : __t) +
'">' +
((__t = ( title )) == null ? '' : __t) +
'</a></span>\n<p>' +
((__t = ( contentSnippet )) == null ? '' : __t) +
'<p>\n</div>\n\n';

}
return __p
};