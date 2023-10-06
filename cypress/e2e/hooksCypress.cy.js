/// <reference types="cypress" />

describe("Fonction Hook", () => {
  before(function () {
    //est executé une seule fois avant tous les tests
    cy.log("Hook Before");
  });
  beforeEach(function () {
    //est executé avant chaque bloc de test
    cy.log("Hook BeforeEach");
  });
  afterEach(function () {
    //est executé aprés chaque bloc de tes
    cy.log("Hook AfterEach");
  });
  after(function () {
    //est executé à la fin de tous les bloc de test
    cy.log("Hook After");
  });
  // only => execute uniquement les elements tagué à only
  // skip => ignore les elements tagué à skip

  it.only("Mon premier cas de test", () => {
    cy.log("Premier test");
  });

  it("Mon deuxiéme cas de test", () => {
    cy.log("Deuxiéme test");
  });
  it.skip("Mon troixiéme cas de test", () => {
    cy.log("Troixiéme test");
  });
});
