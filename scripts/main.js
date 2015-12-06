(function() {
    "use strict";

    handleToggleNav();
    handleLeftMenu();

    /**
     * Handle the toggle button to show/hide the menu
     */
    function handleToggleNav() {
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
    }


    /**
     * Handle the position of the left menu
     */
    function handleLeftMenu() {
        var header = document.getElementById("header");
        var leftMenu = document.getElementById("left-nav");
        updateLeftMenuTop();
        document.addEventListener("scroll", updateLeftMenuTop);

        /**
         * Update the position of the left menu
         */
        function updateLeftMenuTop() {
            var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            leftMenu.style.top = Math.max(0, header.offsetHeight - scrollTop) + 'px';
        }
    }
})();
