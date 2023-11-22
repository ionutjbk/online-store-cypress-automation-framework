const { faker } = require("@faker-js/faker");

describe("Logout test suite", () => {

    beforeEach(() => {
      cy.login('johndoe2023', "strongPassword21@!")
    });
  
    it("Try log out ", () => {
      cy.get('a').contains('Edit account details').click({force: true})
      cy.get('#AccountFrm_firstname').clear().type(faker.person.firstName())
      cy.get('button').contains('Continue').click()
      cy.get('.alert-success').contains(/Success: Your account has been successfully updated/i).should('be.visible')
    });
  });
  