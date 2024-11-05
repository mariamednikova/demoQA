///<reference types="cypress" />
//test suit
describe("Student Registration Form", () => {
    // precondition
    beforeEach(() => {
      cy.visit("https://demoqa.com/automation-practice-form");
      // Ignore uncaught exceptions to prevent test failures
      Cypress.on("uncaught:exception", (err, runnable) => {
        // returning false here prevents Cypress from failing the test
        return false;
      });
    });
  
    // test case 1
    it("Filled Form Submission", () => {
      //steps
      cy.get("input#firstName").type('John');
      cy.get("input#lastName").type('Doe');
      cy.get('label[for="gender-radio-1"]').click();
      cy.get("input#userNumber").type('1234567890');
      cy.get('button#submit').click();
      // assertion
     cy.get("div.modal-content").should('be.visible');
     cy.get("div.modal-title").should("contain.text", "Thanks for submitting the form");
    });

      // test case 2
      let user1name = 'John';
      let user2name =  'Doe';
      it("Gender button not checked", () => {
        //steps
        cy.get("input#firstName").type(user1name);
        cy.get("input#lastName").type(user2name);
        cy.get("input#userNumber").type('1234567890');
        cy.get('button#submit').click();
        // assertion
cy.get('label[for="gender-radio-1"]').should('have.css','color','rgb(220, 53, 69)')

      });

       // test case 3
     
       it("Wrong number", () => {
         //steps
         cy.get("input#firstName").type(user1name);
         cy.get("input#lastName").type(user2name);
         cy.get('label[for="gender-radio-1"]').click();
         cy.get("input#userNumber").type('1235');
         cy.get('button#submit').click();
         // assertion
 cy.get('input#userNumber').should('have.css','border-color','rgb(220, 53, 69)')
 
       });
});