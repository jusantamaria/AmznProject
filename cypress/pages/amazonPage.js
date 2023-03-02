class amazonPage {

    elements = {
        searchBoxInput: () => cy.get("#twotabsearchtextbox"),
        searchButton: () => cy.get("#nav-search-submit-button"),
        thirdResult: () => cy.get("/html[1]/body[1]/div[1]/div[2]/div[1]/div[1]/div[1]/span[1]/div[1]/div[4]/div[1]/div[1]"),
        addToCartButton: () => cy.get("#add-to-cart-button"),
        addedMessageText: () => cy.get("text[data-test='añadido']")
    }

    enterSearchCriteria(product){
        this.elements.searchBoxInput().type(product);
    }

    clickSearchBtn(){
        this.elements.searchButton().click();
    }

    goToPage(pageNumber){

    }

    pick3rdItem(){
        this.elements.thirdResult().click();
    }

    addToCart(){
        this.elements.addToCartButton().click();
    }




}

module.exports = new amazonPage();