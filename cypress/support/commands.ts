// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
export {}
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      nav(): Cypress.Chainable<JQuery<HTMLElement>>;
      navBar(label: string): Cypress.Chainable<JQuery<HTMLElement>>;
      navBarMenu(label: string): Cypress.Chainable<JQuery<HTMLElement>>;
    }
  }
}

Cypress.Commands.add('nav', () => {
  return cy
    .get('nav[class="bg-white flex items-center z-[400] lg:z-[1000] fixed lg:relative shadow-selectDragable w-full h-12 sm:h-14 md:h-16 lg:h-[70px] lg:px-14 justify-around  top-0"]');
});

Cypress.Commands.add('navBar', (label: string) => {
    return cy
      .nav()
      .contains(label);
});

Cypress.Commands.add('navBarMenu', (label: string) => {
  return cy
    .navBar(label)
    .click()
    .get('div[class="h-16 hidden lg:block transition-all duration-300 overflow-hidden rounded-b-2xl shadow-selectDragable"]');
});