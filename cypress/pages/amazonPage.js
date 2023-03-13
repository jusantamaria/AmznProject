class amazonPage {

    get = {
        searchBoxInput: () => cy.get("#twotabsearchtextbox"),
        searchButton: () => cy.get("#nav-search-submit-button"),
        thirdResult: () => cy.get("/html[1]/body[1]/div[1]/div[2]/div[1]/div[1]/div[1]/span[1]/div[1]/div[4]/div[1]/div[1]"),
        addToCartButton: () => cy.get("#add-to-cart-button"),
        addedMessageText: () => cy.get("text[data-test='añadido']"),
        Items: () => cy.get('[data-component-type="s-search-result"] h2 a'),
        page2Button: () => cy.xpath('1'),
    }

    enterSearchCriteria(text){
        this.get.searchBoxInput().type(text);
    }

    clickSearchBtn(){
        this.get.searchButton().click();
    }
    goToPage2(){
        this.get.page2Button().click();      
    }

    pick3rdItem(){
        this.get.Items().third().click();
    }
    
    addToCart(){
        this.get.addToCartButton().click();
    }

}

module.exports = new amazonPage();