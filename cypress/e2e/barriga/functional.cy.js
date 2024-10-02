/// <reference types="cypress" />

describe("Should test at a functional level", () => {
  beforeEach(() => {
    cy.visit("https://barrigareact.wcaquino.me/");
    cy.get('[data-test="email"]').type("a@a");
    cy.get('[data-test="passwd"]').type("a");
    cy.get(".btn").click();
    cy.get(".toast-message").should("contain", "Bem vindo");
  });

  it("Should create a bill", () => {
    cy.get('[data-test="menu-settings"]').click();
    cy.get('[href="/contas"]').click();
    cy.get('[data-test="nome"]').type("Teste inserção de conta Nova");
    cy.get(".btn").click();
    cy.get(".toast-message").should("contain", "Conta inserida");
  });

  it.only("Should update a bill", () => {
    cy.get('[data-test="menu-settings"]').click();
    cy.get('[href="/contas"]').click();
    cy.xpath("(//i[contains(@class,'far fa-edit')])[3]").click()
    cy.get('[data-test="nome"]')
    .clear()
    .type('conta de agua')
    cy.get('.btn').click()
    // cy.get('toast-message').should('contain', 'Conta atualizada')

  });




});
