if (location.host && location.host.match(/^localhost/)) {
    document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':38084/livereload.js?snipver=1"></' + 'script>');
}