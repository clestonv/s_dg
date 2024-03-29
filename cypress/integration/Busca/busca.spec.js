import { Given, And, Then } from "cypress-cucumber-preprocessor/steps";

Given('eu acesso DuckDuckGo', () => {
  cy.visit("/")
})

And("devo buscar {string} e usar {string}", (palavra) => {
	cy.get('#searchbox_input')
  .should('be.visible')
    .type(`${palavra}{enter}`);
  
});

Then("devo ter mais de {string} resultados", (resultado) => {
  const number = parseInt(resultado);
  cy.get(':nth-child(4) > .zcm__link')
    .should('be.visible')
    .click({force: true})
  cy.wait(500)
  cy.get('.result__body')
    .its('length')
    .should('be.gt', number);

});

And("devo buscar {string} e usando LUPA", (palavra) => {
  cy.get('#searchbox_input')
  .should('be.visible')
    .type(`${palavra}`);
  cy.get('#search_button_homepage')
  .should('be.visible')
  .click({force: true})
  
});