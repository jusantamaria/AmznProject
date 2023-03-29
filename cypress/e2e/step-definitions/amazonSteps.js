const amazonPage = require ("../../pages/amazonPage");
const resultsPage = require ("../../pages/resultsPage")

context("Test Amazon search functionality", () => {
    before('the user navigates to www.amazon.es', () => {
            cy.visit('/');
    });
    it('User searches for a product {string}', () => { 
        //The cookies are accepted
        cy.get('#a-autoid-0').click();
        //Typing search criteria on the search box
        amazonPage.enterSearchCriteria('Alexa{enter}');
        resultsPage.elements.titleSpan().should('contain.text','Alexa');
        //Navigating to page number 2
        amazonPage.goToPage2();
        cy.get('.sg-col-14-of-20 > .sg-col-inner > .a-section > :nth-child(1)').should('contain.text','49-96');
        //Choosing the third item on the results of page 2
        cy.get('.s-image').eq(4).click({force:true});
        //Adding third item to cart
        cy.get('#add-to-cart-button').click()
        cy.get('#attachSiNoCoverage').click()
        resultsPage.elements.lastSpan().should('contain.text','Añadido a la cesta')
    });
})