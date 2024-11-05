///<reference types="cypress" />
//test suit
describe("Login Page Tests", () => {
  // precondition
  beforeEach(() => {
    cy.visit("https://demoqa.com/");
    // Ignore uncaught exceptions to prevent test failures
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from failing the test
      return false;
    });
  });

  // test case 1
  it("form page open", () => {
    //steps
    cy.get("div.card").contains("Forms").click();
    // assertion
    cy.url().should("include", "/forms");
    cy.get("div.col-md-6").should(
      "contain.text",
      "Please select an item from left to start practice."
    );
  });

  //Test case 2
  it("Practice Form open", () => {
    //steps
    cy.get("div.card").contains("Forms").click();
    cy.wait(5000);
    cy.get("li.btn").contains("Practice Form").click();
    //assert
    cy.url().should("include", "/automation-practice-form");
    cy.get("h1.text-center").should("have.text", "Practice Form");
  });
});
