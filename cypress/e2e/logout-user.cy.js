describe("Edit info test suite", () => {
  beforeEach(() => {
    cy.fixture("login-info").then((data) => {
      cy.login(data.username, data.password);
    });
  });

  it("Try to edit first name ", () => {
    cy.get("#main_menu_top > li:nth-child(2) > a > span").trigger("mouseover");
    cy.get('span[class="menu_text"]').contains("Logout").click();
    cy.get("p").contains("You have been logged off your account. It is now safe to leave the computer.").should("be.visible");
    cy.get('a[title="Continue"]').contains("Continue").click();
    cy.get("a").contains(/Login or register/i).should("be.visible");});
});
