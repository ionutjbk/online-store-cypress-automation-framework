import NavBarPage from "../pages/NavBarPage";
import BodyPage from "../pages/BodyPage";

describe("Login test suite", () => {
  beforeEach(function () {
    cy.visit("https://automationteststore.com/")
    cy.fixture("login-info").then((data) => {
      this.data = data
    })
  });

  it("Try to login with valid credentials ", function() {
    NavBarPage.getRegisterLoginBtn().click()
    cy.get("#accountFrm_accountregister").should("be.checked");
    BodyPage.setLoginUsername().type(this.data.username, {delay: 0})
    BodyPage.setLoginPassword().type(this.data.password, {delay: 0})
    BodyPage.getLoginBtn().click()
    cy.get('#customer_menu_top > li:nth-child(1) .menu_text').should("contain", "Welcome back")
  });

  it("Try to login with invalid password", function () {
    NavBarPage.getRegisterLoginBtn().click()
    cy.get("#accountFrm_accountregister").should("be.checked");
    BodyPage.setLoginUsername().type(this.data.username, {delay: 0})
    BodyPage.setLoginPassword().type("wrong_password", {delay: 0})
    BodyPage.getLoginBtn().click()
    cy.get('div.alert-error').contains(/Error: Incorrect login or password provided./i).should('be.visible')
  });

  it("Try to login with missing username and password", function () {
    NavBarPage.getRegisterLoginBtn().click()
    cy.get("#accountFrm_accountregister").should("be.checked");
    BodyPage.getLoginBtn().click()
    cy.get('div.alert-error').contains(/Error: Incorrect login or password provided./i).should('be.visible')
  });

  it("Try to login with missing username", function () {
    NavBarPage.getRegisterLoginBtn().click()
    cy.get("#accountFrm_accountregister").should("be.checked");
    BodyPage.setLoginPassword().type(this.data.password, {delay: 0})
    BodyPage.getLoginBtn().click()
    cy.get('div.alert-error').contains(/Error: Incorrect login or password provided./i).should('be.visible')
  });

  it("Try to login with missing password", function () {
    NavBarPage.getRegisterLoginBtn().click()
    cy.get("#accountFrm_accountregister").should("be.checked");
    BodyPage.setLoginUsername().type(this.data.username, {delay: 0})
    BodyPage.getLoginBtn().click()
    cy.get('div.alert-error').contains(/Error: Incorrect login or password provided./i).should('be.visible')
  });

});
