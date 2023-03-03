import{Given, When, And, Then,} from "@badeball/cypress-cucumber-preprocessor";
const amazonPage = require ("../../pages/amazonPage");

context("Test Amazon search functionality", () => {


    Given('the user navigates to www.amazon.es', () => {
            cy.visit('https://www.amazon.es');
            searchBoxInput.enterSearchCriteria('Alexa{enter}');
    });

    And ('User searches for a product {string}', () => {
        
    });


    And ("selects the third item", () => {
        productListPage.pick3rdItem();

    });

    Then ("the user is able to add it to the cart", () =>{
        amazonPage.addToCart();

    });

})