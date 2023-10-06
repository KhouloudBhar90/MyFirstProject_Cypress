/// <reference types="cypress" />
describe("Gestion Formulaire", () => {
  beforeEach(function () {
    cy.visit("https://practice.automationbro.com/support-form/");
  });

  it("Vérifier les informations d une formulaire", () => {
    cy.get('[class="evf-frontend-grid evf-grid-1"]').should(
      "contain.text",
      "Name"
    );
    cy.get('[class="evf-frontend-grid evf-grid-1"]').should("be.visible");
    cy.get("#evf-submit-680").should("be.visible");
  });

  it("Verification des champs obligatoire", () => {
    cy.get("#evf-submit-680").click();
    cy.get("#evf-680-field_lVizlNhYus-1-error").should(
      "contain.text",
      "This field is required."
    );
    cy.get("#evf-680-field_XYnMdkQDKM-3-error").should(
      "contain.text",
      "Please enter a valid email address."
    );
    cy.get("#evf-680-field_xJivsqAS2c-2-error").should(
      "contain.text",
      "This field is required."
    );
  });

  it.only("Renseigner le formulaire du client", () => {
    cy.get("#evf-680-field_lVizlNhYus-1").type("Khouloud");
    cy.get("#evf-680-field_XYnMdkQDKM-3").type("khouloud@gmail.com");
    cy.get("#evf-680-field_xJivsqAS2c-2").type("cc");
    cy.get("#evf-680-field_82kaAPhrnW-6")
      .select("Technical Team")
      .should("have.value", "Technical Team");
    cy.get("#evf-680-field_sOAJfxP1Lf-7_1").check().should("be.checked");
    cy.get("#evf-680-field_YalaPcQ0DO-4").type("Hello");
    cy.get("#evf-submit-680").click();
    cy.get("#evf-submit-680").click();
    cy.get(".everest-forms-notice").should(
      "contain.text",
      "		Thanks for contacting us! We will be in touch with you shortly.	"
    );
  });
});
