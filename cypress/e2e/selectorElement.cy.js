/// <reference types="cypress" />

describe("Selecteur Element avec Playground", () => {
  it("Mon premier selecteur", () => {
    cy.visit("https://www.globalsqa.com/angularJs-protractor/BankingProject");
    // cy.get(".borderM > :nth-child(1) > .btn");
    // cy.contains("Bank Manager Login");
    // cy.get("button").contains("Customer Login");
    cy.get('[class="btn btn-primary btn-lg"][ng-click="customer()"]');
  });
});
