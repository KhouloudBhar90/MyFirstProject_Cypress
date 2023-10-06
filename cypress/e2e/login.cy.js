/// <reference types="cypress" />

describe("Ma page login", () => {
  it("Login avec champ vide", () => {
    cy.visit(Cypress.env("baseUrl"));
    cy.get("#Email").type(" ");
    cy.get("#Password").type(" ");
    cy.get(".button-1").click();
    cy.get(".message-error").should(
      "contain.text",
      "Login was unsuccessful. Please correct the errors and try again."
    );
  });

  it("login avec le bon id et mdp vide", () => {
    cy.visit(Cypress.env("baseUrl"));
    cy.get("#Email").clear().type(Cypress.env("user"));
    cy.get("#Password").type(" ");
    cy.get(".button-1").click();
    cy.get(".message-error").should(
      "contain.text",
      "Login was unsuccessful. Please correct the errors and try again."
    );
  });

  it("login avec le bon id et mdp erroné", () => {
    cy.visit(Cypress.env("baseUrl"));
    cy.get("#Email").clear().type(Cypress.env("user"));
    cy.get("#Password").type("demo");
    cy.get(".button-1").click();
    cy.get(".message-error").should(
      "contain.text",
      "Login was unsuccessful. Please correct the errors and try again."
    );
  });

  it("login avec le bon id et un bon mdp", () => {
    cy.visit(Cypress.env("baseUrl"));
    cy.get("#Email").clear().type(Cypress.env("user"));
    cy.get("#Password").clear().type(Cypress.env("password"));
    cy.get(".button-1").click();
    cy.get(".content-header > h1").should(
      "contain.text",
      Cypress.env("assert")
    );
  });

  it.only("Deconnexion à la session", () => {
    cy.visit(Cypress.env("baseUrl"));
    cy.login(
      Cypress.env("user"),
      Cypress.env("password"),
      Cypress.env("assert")
    );

    // Click on Logout
    cy.get('[class="nav-link"][href="/logout"]').click();
    cy.get("h1").should("contain.text", "Admin area demo");
    cy.get("strong").should("contain.text", "Welcome, please sign in!");
    cy.get("#Email").should("be.visible");
  });
});
