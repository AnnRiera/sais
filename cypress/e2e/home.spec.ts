/// <reference types="cypress" />

const baseUrl = Cypress.env('BASE_URL');

describe('Home page', () => {
    beforeEach('Reload page', () => {
        cy.visit(baseUrl);
    });

    describe('Testing nav bar for Nuevos option', () => {
        it('should get four brand new car options to pick', () => {
            cy.navBarMenu('Nuevos')
                .find('a')
                .then((newOptions) => {
                    expect(newOptions[0]).to.contain('Sedán');
                    expect(newOptions[1]).to.contain('Suv');
                    expect(newOptions[2]).to.contain('Camioneta');
                    expect(newOptions[3]).to.contain('Hatchback');
                });
        });

        it('should be able to pick first option', () => {
            cy.navBarMenu('Nuevos')
                .find('a')
                .then((newOptions) => {
                    cy.wrap(newOptions[0]).click();
                    cy.go('back');
                });
        });

        it('should be able to pick second option', () => {
            cy.navBarMenu('Nuevos')
                .find('a')
                .then((newOptions) => {
                    cy.wrap(newOptions[1]).click();
                    cy.go('back');
                });
        });

        it('should be able to pick third option', () => {
            cy.navBarMenu('Nuevos')
                .find('a')
                .then((newOptions) => {
                    cy.wrap(newOptions[2]).click();
                    cy.go('back');
                });
        });

        it('should be able to pick fourth option', () => {
            cy.navBarMenu('Nuevos')
                .find('a')
                .then((newOptions) => {
                    cy.wrap(newOptions[3]).click();
                    cy.go('back');
                });
        });


        it('should have a Ver todos los autos button', () => {
            cy.navBarMenu('Nuevos')
                .find('button')
                .then((newOptions) => {
                    const buttonName = newOptions.text();
                    expect(buttonName).to.contain('Ver todos los autos');

                    cy.wrap(newOptions).click();
                    cy.wrap(newOptions).go('back');
                });
        });
    });

    describe('Testing nav bar for Usados option', () => {
        it('should get two used car options to pick', () => {
            cy.navBarMenu('Usados')
                .find('a')
                .then((usedOptions) => {
                    expect(usedOptions[0]).to.contain('Autos al Costo');
                    expect(usedOptions[1]).to.contain('Kia Seminuevos');
                });
        });

        it('should be able to pick first option', () => {
            cy.navBarMenu('Usados')
                .find('a')
                .then((usedOptions) => {
                    cy.wrap(usedOptions[0]).click();
                    cy.go('back');
                });
        });

        it('should be able to pick second option', () => {
            cy.navBarMenu('Usados')
                .find('a')
                .then((usedOptions) => {
                    cy.wrap(usedOptions[1]).click();
                    cy.go('back');
                });
        });

        it('should have a Ver todos los autos button', () => {
            cy.navBarMenu('Nuevos')
                .find('button')
                .then((usedOptions) => {
                    const buttonName = usedOptions.text();
                    expect(buttonName).to.contain('Ver todos los autos');

                    cy.wrap(usedOptions).click();
                    cy.wrap(usedOptions).go('back');
                });
        });
    });

    describe('Testing nav bar for Servicio Técnico option', () => {
        it('should get one technical support option to pick', () => {
            cy.navBarMenu('Servicio Técnico')
                .find('a')
                .then((supportOptions) => {
                    expect(supportOptions).to.contain('Pautas de mantención');
                });
        });

        it('should be able to pick first option', () => {
            cy.navBarMenu('Servicio Técnico')
                .find('a')
                .then((supportOptions) => {
                    cy.wrap(supportOptions).click();
                    cy.go('back');
                });
        });

        it('should have a button to schedule your service', () => {
            cy.navBarMenu('Servicio Técnico')
                .find('button')
                .should('contain', 'Agenda tu servicio');
        });

        it('should be able to click the button and go to another page', () => {
            cy.navBarMenu('Servicio Técnico')
                .find('button')
                .click();

            cy.go('back');
        });
    });

    describe('Testing nav bar for SAIS logo', () => {
        it('should exist SAIS logo', () => {
            cy.nav()
                .find('img');
        });

        it('should click in SAIS logo', () => {
            cy.nav()
                .find('a[class="cursor-pointer"]')
                .click();
        });
    });

    describe('Testing the banner', () => {
        it('should contain text in the banner', () => {
            cy.get('.bodyContainer')
                .first()
                .find('h1')
                .should('contain', 'Miles de autos a tu alcance ¡Cotiza ya!');
        });
    });
});