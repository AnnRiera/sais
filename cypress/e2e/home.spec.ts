/// <reference types="cypress" />

const baseUrl = Cypress.env('BASE_URL');

describe('Home page', () => {
    beforeEach(() => {
        cy.visit(baseUrl);
    })

    it('Testing nav bar', () => {
        // cy.contains('Miles de autos a tu alcance ¡Cotiza ya!');
        cy.get('nav[class="bg-white flex items-center z-[400] lg:z-[1000] fixed lg:relative shadow-selectDragable w-full h-12 sm:h-14 md:h-16 lg:h-[70px] lg:px-14 justify-around  top-0"]')
            .contains('Nuevo')
            .click();
    });
  
    // it('displays two todo items by default', () => {
    //   // We use the `cy.get()` command to get all elements that match the selector.
    //   // Then, we use `should` to assert that there are two matched items,
    //   // which are the two default items.
    //   cy.get('.todo-list li').should('have.length', 2)
  
    //   // We can go even further and check that the default todos each contain
    //   // the correct text. We use the `first` and `last` functions
    //   // to get just the first and last matched elements individually,
    //   // and then perform an assertion with `should`.
    //   cy.get('.todo-list li').first().should('have.text', 'Pay electric bill')
    //   cy.get('.todo-list li').last().should('have.text', 'Walk the dog')
    // });
});