(function () {
    "use strict";

    var headerNav = document.getElementById("header-nav");
    document.getElementById("header-nav-toggle").addEventListener("click", toggleHeaderNav);

    /**
     * Toggle the navigation menu in the header
     */
    function toggleHeaderNav() {
        if (headerNav.className.indexOf('opened') > 0) {
            headerNav.className = headerNav.className.replace('opened', '');
        } else {
            headerNav.className = headerNav.className + ' opened';
        }
    }
})();