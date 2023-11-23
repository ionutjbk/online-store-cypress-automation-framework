describe("Placing orders test suite", () => {
  beforeEach(function () {
    cy.fixture("login-info").then((data) => {
      this.data = data
    })
  });

  it("Checkout order while user is authentificated ", function() {
    cy.login(this.data.username, this.data.password)
    cy.get("a").contains("Home").click()
    cy.get("#block_frame_featured_1769 > div > div:nth-child(1) > div.thumbnail > div.pricetag.jumbotron > a").click()
    cy.get("#main_menu_top > li:nth-child(3) > a > span").click()
    cy.get("#cart_checkout1").click()
    cy.get("#checkout_btn").click()
    cy.get("#maincontainer > div > div > div > h1 > span.maintext").contains(/ Your Order Has Been Processed!/i).should("be.visible")
  });

  it("Checkout order while user is not authentificated ", function() {
    cy.visit("https://automationteststore.com/")
    cy.get("a").contains(/Login or register/i).should("be.visible");
    cy.get("#block_frame_featured_1769 > div > div:nth-child(1) > div.thumbnail > div.pricetag.jumbotron > a").click()
    cy.get(".menu_text").contains("Checkout").click()
    cy.get('button').contains('Login').should("be.visible")
  });
});
