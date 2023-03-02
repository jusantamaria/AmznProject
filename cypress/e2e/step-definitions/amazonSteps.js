import{Given, When, And, Then,} from "@badeball/cypress-cucumber-preprocessor";

const amazonPage = require ("../../pages/amazonPage");

describe("Test Amazon search functionality", () => {


    Given("the user navigates to www.amazon.es", () => {
        cy.visit("https://www.amazon.es");
    });

    And ("User searches for a product {string}", (product) => {
        amazonPage.enterSearchCriteria(product);
        
    });

    And ("navigates to second page", () => {

    });

    And ("selects the third item", () => {
        amazonPage.pick3rdItem();

    });

    Then ("the user is able to add it to the cart", () =>{
        amazonPage.addToCart();

    });

});