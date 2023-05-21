/// <reference types="cypress" />

const baseUrl = Cypress.env('BASE_URL');

describe('Home page', () => {
    beforeEach(() => {
        cy.visit(baseUrl);
    })

    it('Testing nav bar', () => {
        // cy.contains('Miles de autos a tu alcance ¡Cotiza ya!');
        cy.navBar('Nuevos')
            .click()
            .get('div[class="h-16 hidden lg:block transition-all duration-300 overflow-hidden rounded-b-2xl shadow-selectDragable"]')
            .find('a')
            .then((menuOptions) => {
                const options = menuOptions.toArray();
                expect(options[0]).to.contain('Sedán');
                expect(options[1]).to.contain('Suv');
                expect(options[2]).to.contain('Camioneta');
                expect(options[3]).to.contain('Hatchback');
            });
    });
});