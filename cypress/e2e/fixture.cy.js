/// <reference types="cypress" />
describe("Gestion Formulaire", function () {
  beforeEach(function () {
    cy.visit("https://practice.automationbro.com/support-form/");
    // then: permet de récupérer le contenue du fichier json
    // this: pour rendre nos données définis dans fixture accessible à tous nos tests d'intégration
    cy.fixture("inputForm.json").then((formulaire) => {
      this.formulaire = formulaire;
    });
  });
  it.only("Renseigner le formulaire du client", function () {
    cy.get("#evf-680-field_lVizlNhYus-1").type(this.formulaire.Name);
    cy.get("#evf-680-field_XYnMdkQDKM-3").type(this.formulaire.Email);
    cy.get("#evf-680-field_xJivsqAS2c-2").type(this.formulaire.Subject);
    cy.get("#evf-680-field_82kaAPhrnW-6")
      .select("Technical Team")
      .should("have.value", "Technical Team");
    cy.get("#evf-680-field_sOAJfxP1Lf-7_1").check().should("be.checked");
    cy.get("#evf-680-field_YalaPcQ0DO-4").type("Hello");
    cy.get("#evf-submit-680").click();
    cy.get("#evf-submit-680").click();
    cy.get(".everest-forms-notice").should(
      "contain.text",
      this.formulaire.Message
    );
  });
});
