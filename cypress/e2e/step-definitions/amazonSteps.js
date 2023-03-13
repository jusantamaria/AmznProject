const amazonPage = require ("../../pages/amazonPage");
const resultsPage = require ("../../pages/resultsPage")

context("Test Amazon search functionality", () => {
    beforeEach('the user navigates to www.amazon.es', () => {
            cy.visit('/');
    });
    it('User searches for a product {string}', () => { 
        amazonPage.enterSearchCriteria('Alexa{enter}');
        resultsPage.elements.titleSpan().should('contain.text','Alexa');
        amazonPage.goToPage2();
        cy.url().should('contain','/pg_2');
    });
    // it('User goes to page 2', () => {
        
    // });
    // it("selects the third item", () => {
    //     productListPage.pick3rdItem();
    // });
    // it("the user is able to add it to the cart", () =>{
    //     amazonPage.addToCart();
    // });

})