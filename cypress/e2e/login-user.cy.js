import NavBarPage from "../pages/NavBarPage";

describe("Login test suite", () => {
  before(function () {
    cy.visit("https://automationteststore.com/")
    cy.fixture("login-info").then((data) => {
      this.data = data
    })
  });

  it("Try to login with valid credentials ", function () {
    cy.get("a").contains(/Login or register/i).click();
    cy.get("#accountFrm_accountregister").should("be.checked");
    cy.get("#loginFrm_loginname").type(this.data.username, {delay: 0})
    cy.get("#loginFrm_password").type(this.data.password, {delay: 0})
    cy.get('button').contains('Login').click()
    cy.get('#customer_menu_top > li:nth-child(1) .menu_text').should("contain", "Welcome back")
  });

  it.only("Try to login with invalid password", function () {
    cy.get("a").contains(/Login or register/i).click()
    cy.get("#accountFrm_accountregister").should("be.checked");
    cy.get("#loginFrm_loginname").type(this.data.username, {delay: 0})
    cy.get("#loginFrm_password").type("wrong_password")
    cy.get('button').contains('Login').click()
    cy.get('div.alert-error').contains(/Error: Incorrect login or password provided./i).should('be.visible')
  });

  it("Try to login with missing username and password", function () {
    cy.get("a").contains(/Login or register/i).click()
    cy.get("#accountFrm_accountregister").should("be.checked");
    cy.get('button').contains('Login').click()
    cy.get('div.alert-error').contains(/Error: Incorrect login or password provided./i).should('be.visible')
  });

  it("Try to login with missing username", function () {
    cy.get("a").contains(/Login or register/i).click()
    cy.get("#accountFrm_accountregister").should("be.checked");
    cy.get("#loginFrm_password").type(this.data.password, {delay: 0})
    cy.get('button').contains('Login').click()
    cy.get('div.alert-error').contains(/Error: Incorrect login or password provided./i).should('be.visible')
  });

  it("Try to login with missing password", function () {
    cy.get("a").contains(/Login or register/i).click()
    cy.get("#accountFrm_accountregister").should("be.checked");
    cy.get("#loginFrm_loginname").type(this.data.username, {delay: 0})
    cy.get('button').contains('Login').click()
    cy.get('div.alert-error').contains(/Error: Incorrect login or password provided./i).should('be.visible')
  });

});
