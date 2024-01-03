import MyAccountPage from "../pages/MyAccountPage";

const { faker } = require("@faker-js/faker");

describe("Edit details test suite", () => {
  beforeEach(() => {
    cy.fixture("login-info").then((data) => {
      cy.login(data.username, data.password);
    });
  });

  it("Try to change first name using correct input ", () => {
    MyAccountPage.getEditAccountDetails().click({ force: true });
    MyAccountPage.setFirstName().clear().type(faker.person.firstName());
    MyAccountPage.getContinueBtn().click();
    cy.get(".alert-success")
      .contains(/Success: Your account has been successfully updated/i)
      .should("be.visible");
    cy.get(".subtext").then(($name) => {
      const changedName = $name.text()
      cy.get('.side_account_list > :nth-child(3) > a').click()
      cy.get('#AccountFrm_firstname').should('contain.value', changedName)
    })
  });

  it.only("Try to change first name and leave the input field empty", () => {
    MyAccountPage.getEditAccountDetails().click({ force: true });
    MyAccountPage.setFirstName().clear();
    MyAccountPage.getContinueBtn().click();
    cy.get(".alert-error")
    .contains(/Oops, there is an error with information provided!/i)
    .should('be.visible')
    cy.get('#AccountFrm_firstname').should('be.empty').should("have.css", "border-color", "rgb(169, 68, 66)")
    cy.get('.has-error > .help-block').contains(/First Name must be between 1 and 32 characters!/i).should('be.visible')
  })

});