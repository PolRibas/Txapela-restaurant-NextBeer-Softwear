# MOZCORRA TXAPELA

# Project information
    MVP > a small software from a basc country resteurant. It will have two pages, one with all the menu and there prices, another with the Next Beer. 
    The dynamic part, the NEXT BEER button, this button will give you one of there 25 punkAPI beers randomly with a special price just for you. :) 

# Software structure
    - Menu
      - header 
        - <img> some wood
        - <img> Bussines logo
      - navbar
        - <button> Menu
        - <button> Next Beer
      - main
        - <section> card section;
          - some in this format 
            - <img> Product image 
            - <h2> Product title
            - <p> Product Information
            - <h3> Price
          - others in this format
            - ul li list of products and prices with <p> no image in.
      - footer
        - <img> map
        - <p> Bar information
    - Next Beer
      - header (same as menu)
      - navbar (same as menu)
      - main (big card)
        - <img> beer image
        - <h2> Name of the beer
        - <p> information of the beer
        - <h3> New price
        - <button> to order
      - footer (same as menu)
  
# Constructor 
    - f(x) main -> generateLayout, generateNavbar, activateRouter, addListenersToNavbar, changePage
    - f(x) Header -> this.img this.img.src (backgraund & logo) this.style this.elements
      - methods:
        - generate() -> generate header
        - render()
    - f(x) Navbar-> this.links this.url this.name this.style
      - methods:
        - generate() -> generate Navbar
        - render()
    - f(x) Footer-> this.img this.img.src this.text[] this.style
      - methods:
        - generate() -> generate Footer
        - render()
    - f(x) cards-> this.img this.img.src this.name this.info this.price this.style
      -  methods:
        - generate() -> generate card
        - render()
        - crearBiblioteca();
    - f(x) listsCards-> this.name[] this.prise[] this.style;
      - methods:
        - generate() -> generate listcard
        - render()
        - crearBiblioteca();
    - f(x) menu-> this.cards[] this.style this.elements
      - methods:
        - generate() -> generate card
        - render()
        - takeNewCards()
    - f(x) APIservice-> PunkApi conection this.baseUrl
      - methods:
        - getAllBeers()
    - f(x) nextBeer-> this.img this.img.src this.name this.info this.prise this.button this.elements
      - methods
        - getOneRandomBeer()
        - generate()
        - render()