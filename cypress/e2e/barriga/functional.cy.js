/// <reference types="cypress" />

describe("Should test at a functional level", () => {
  beforeEach(() => {
    cy.visit("https://barrigareact.wcaquino.me/");
    cy.get('[data-test="email"]').type("NovoTeste@teste");
    cy.get('[data-test="passwd"]').type("teste");
    cy.get(".btn").click();
    cy.get(".toast-message").should("contain", "Bem vindo");
  });

  it("Should create a bill", () => {
    cy.get('[data-test="menu-settings"]').click();
    cy.get('[href="/contas"]').click();
    cy.get('[data-test="nome"]').type("Teste inserçãooooo de conta Nova");
    cy.get(".btn").click();
    cy.get(".toast-message").should("contain", "Conta inserida");
  });

  it.only("Should update a bill", () => {
    cy.get('[data-test="menu-settings"]').click();
    cy.get('[href="/contas"]').click();
    cy.get('tr > :nth-child(2) > :nth-child(1) > .far')
    cy.get('[data-test="nome"]')
    .clear()
    .type('conta de luz')
    cy.get('.btn').click()
    cy.get('toast-message').should('contain', 'Conta atualizada')
  });

//   it('Should not craeate a bill with the same name', () => {
//     cy.get('[data-test="menu-settings"]').click();
//     cy.get('[href="/contas"]').click();
//   })

// it('Create new User', () => {
//     cy.visit("https://barrigareact.wcaquino.me/");
//     cy.get(':nth-child(2) > .nav-link').click()
//     cy.get('.jumbotron > :nth-child(1) > .form-control').type('Teste')
//     cy.get('.input-group > .form-control').type('NovoTeste@teste')
//     cy.get(':nth-child(3) > .form-control').type('teste')
//     cy.get('.btn').click()

// })





});
