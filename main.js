`use strict`;

function main() {
    var ENTRY_POINT = '/menu';
    var layout = null;
    var navbar = null;
    var burguerMenu = null;
    var root = document.querySelector('#root');
    var links = [{ name: 'Menu', url: '/Menu' }, { name: 'Next Beer', url: '/nextbeer' }]

    generateLayout();
    generateNavbar();
    addListenersToNavbar();
    activateRouter();
    generateBurgerMenu();

    function generateLayout() {
        layout = new Layout(root);
        layout.generate();
    }

    function generateNavbar() {
        navbar = new Navbar(layout.header, links);
        navbar.generate();
    }

    function activateRouter() {
        router.buildDom(ENTRY_POINT, layout.main);
    }

    function addListenersToNavbar() {
        var anchors = document.querySelectorAll('nav a');
        anchors.forEach((anchor) => {
            anchor.addEventListener('click', changePage);
        })
    }

    function changePage(event) {
        var url = event.target.attributes.url.value;
        router.buildDom(url, layout.main);
    }

    function generateBurgerMenu() {
        burguerMenu = new BurgerMenu(layout.burgerMenu, layout.main);
        burguerMenu.generate();
    }

}
window.addEventListener('load', main);