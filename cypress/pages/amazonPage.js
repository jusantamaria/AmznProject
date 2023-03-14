class amazonPage {

    get = {
        searchBoxInput: () => cy.get("#twotabsearchtextbox"),
        searchButton: () => cy.get("#nav-search-submit-button"),
        thirdResult: () => cy.get(".s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_51"),
        addToCartButton: () => cy.get("#add-to-cart-button"),
        addedMessageText: () => cy.get("text[data-test='añadido']"),
        Items: () => cy.get('[data-asin="B08B3FNXJ9"] > .sg-col-inner > .s-widget-container > [data-component-type="s-impression-logger"] > .s-featured-result-item > .s-card-container > .a-spacing-base > .s-product-image-container > .rush-component > .a-link-normal > .a-section > .s-image'),
        NextPageButton: () => cy.get('.s-pagination-next'),
        
    }

    enterSearchCriteria(text){
        this.get.searchBoxInput().type(text);
    }

    clickSearchBtn(){
        this.get.searchButton().click();
    }
    goToPage2(){
        this.get.NextPageButton().click();      
    }

    pick3rdItem(){
        this.get.thirdResult().click();
    }
    
    addToCart(){
        this.get.addToCartButton().click();
    }

}

module.exports = new amazonPage();