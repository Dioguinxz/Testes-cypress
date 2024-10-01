/// <reference types="cypress" />

describe("Should test at a functional level", () => {
  beforeEach(() => {
    cy.visit("https://barrigareact.wcaquino.me/");
    cy.get('[data-test="email"]').type("a@a");
    cy.get('[data-test="passwd"]').type("a");
    cy.get(".btn").click();
    cy.get(".toast-message").should("contain", 'Bem vindo');
  });

  it("Should create an account", () => {
    cy.get('[data-test="menu-settings"]').click()
    cy.get('[href="/contas"]').click()
    cy.get('[data-test="nome"]').type('Teste inserção de conta Nova')
    cy.get('.btn').click()
    cy.get('.toast-message').should('contain', 'Conta inserida')
   

  });



});
