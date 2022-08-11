import { Given, And, Then } from "cypress-cucumber-preprocessor/steps";

Given('eu acesso DuckDuckGo', () => {
  cy.visit("/")
})

And("devo buscar {string} e usar {string}", (palavra) => {
	cy.get('#search_form_input_homepage')
  .should('be.visible')
    .type(`${palavra}{enter}`);
  
});

Then("devo ter mais de {string} resultados", (resultado) => {
  const number = parseInt(resultado);
  cy.get(':nth-child(4) > .zcm__link')
    .should('be.visible')
    .click({force: true})

  cy.get('body .nrn-react-div')
    .its('length')
    .should('be.gt', number);

});

And("devo buscar {string} e usando LUPA", (palavra) => {
  cy.get('#search_form_input_homepage')
  .should('be.visible')
    .type(`${palavra}`);
  cy.get('#search_button_homepage')
  .should('be.visible')
  .click({force: true})
  
});