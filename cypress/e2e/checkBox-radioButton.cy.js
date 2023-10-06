/// <reference types="cypress" />
describe("Gestion Check Box", () => {
  beforeEach(function () {
    cy.visit("https://practice.automationbro.com/support-form/");
  });

  it("Selectionner un Check Box spécifique", () => {
    cy.get("#evf-680-field_sOAJfxP1Lf-7_1").check().should("be.checked");
  });

  it("Selectionner un Check Box avec un text spécifique", () => {
    cy.get('[type="checkbox"]').check("Hardware Issue").should("be.checked");
  });

  it("Selection d élément multiple en utilisant leur valeurs", () => {
    cy.get('[type="checkbox"]')
      .check(["Integration Issue", "Hardware Issue"])
      .should("be.checked");
  });

  it("Deselction Check Box", () => {
    cy.get('[type="checkbox"]').check("Hardware Issue").should("be.checked");
    cy.get('[type="checkbox"]')
      .uncheck("Hardware Issue")
      .should("not.be.checked");
  });

  it("Utilisation de la fonction Click", () => {
    cy.get("#evf-680-field_sOAJfxP1Lf-7_1").click().should("be.checked");
    cy.get("#evf-680-field_sOAJfxP1Lf-7_1").click().should("not.be.checked");
  });

  it("Selectionner tous les checkbox", () => {
    cy.get('[type="checkbox"]').check().should("be.checked");
    cy.get('[type="checkbox"]').uncheck().should("not.be.checked");
  });

  it("Selectionner tous les checkbox", () => {
    cy.get('[type="checkbox"]').check().should("be.checked");
    cy.get('[type="checkbox"]').uncheck().should("not.be.checked");
  });
});
