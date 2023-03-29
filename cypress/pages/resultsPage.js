class resultsPage {

    elements = {
        titleSpan: () => cy.get('.a-color-state'),
        lastSpan: () => cy.get('.a-size-medium-plus'),
    }


}
module.exports = new resultsPage();