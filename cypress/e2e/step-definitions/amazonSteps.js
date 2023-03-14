const amazonPage = require ("../../pages/amazonPage");
const resultsPage = require ("../../pages/resultsPage")

context("Test Amazon search functionality", () => {
    before('the user navigates to www.amazon.es', () => {
            cy.visit('/');
    });
    it('User searches for a product {string}', () => { 
        cy.get('#sp-cc-rejectall-link').click();
        amazonPage.enterSearchCriteria('Alexa{enter}');
        resultsPage.elements.titleSpan().should('contain.text','Alexa');
        amazonPage.goToPage2();
        cy.get('.sg-col-14-of-20 > .sg-col-inner > .a-section > :nth-child(1)').should('contain.text','49-96');
        amazonPage.pick3rdItem();
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