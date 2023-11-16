describe("Placing orders test suite", () => {
    beforeEach(() => {
      cy.login('johndoe2023', "strongPassword21@!")
    });
  
    it("Add product to shopping cart ", () => {
      cy.get('a').contains('Home').click()
      cy.get('#block_frame_featured_1769 > div > div:nth-child(1) > div.thumbnail > div.pricetag.jumbotron > a').click()
      cy.get('#main_menu_top > li.dropdown.current > a > span').click({force: true})
      cy.get('#cart_checkout1').click()
      cy.get('#checkout_btn').click()
      cy.get('#maincontainer > div > div > div > h1 > span.maintext').contains(/ Your Order Has Been Processed!/i).should('be.visible')
    });
  });
  