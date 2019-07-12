`use strict`;

function main() {
    
    function goInsideWeb() {
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
    //goInsideWeb();

    function startLayout(){
        var body = document.querySelector('#startLayout');
        var elements = `
        <section class="start-layout">
            <header>
                <h1>The official afterworks of the drunken WEB/DEV programmers</h1>
                <img src="./images/iron-logo.png" alt="Ironhack Logo">
            </header>
                <button>I'm conected</button>
            <footer>
                <img src="./images/Logo-blanco.png" alt="White Logo">
                <p><small>© 2019 GRIZZLY for Mozcorra Txapela</small></p>
            </footer>
        </section>
        `;
        renderStartLayout(body, elements)
        var startLayout = document.querySelector('.start-layout');
        var button = document.querySelector('button');
        button.addEventListener('click', () => {
            startLayout.classList.add('outOfPage');
            elements = "";
            renderStartLayout(body,elements);
            goInsideWeb();
        })
    }
    startLayout()

    function renderStartLayout(body,elements){
        body.innerHTML = elements;
    }

}
window.addEventListener('load', main);