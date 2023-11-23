const { faker } = require("@faker-js/faker");

describe("Registration test suite", function() {
  beforeEach(function()  {
    cy.visit("https://automationteststore.com/")
  });

  let password = faker.internet.password({ length: 20 })

  it("Try to register user with valid credentials", function() {
    cy.get("a").contains(/Login or register/i).click();
    cy.get("#accountFrm_accountregister").should("be.checked");
    cy.get('button[title="Continue"]').click();
    cy.get("#AccountFrm_firstname").type(faker.person.firstName(), {delay: 0,});
    cy.get("#AccountFrm_lastname").type(faker.person.lastName(), { delay: 0 });
    cy.get("#AccountFrm_email").type(faker.internet.email(), { delay: 0 });
    cy.get("#AccountFrm_address_1").type(faker.location.streetAddress(), {delay: 0,});
    cy.get("#AccountFrm_city").type(faker.location.city(), { delay: 0 });
    cy.get("#AccountFrm_zone_id[name='zone_id']").select(faker.number.int(20));
    cy.get("#AccountFrm_postcode").type(faker.number.int({ min: 100, max: 10000 }),{ delay: 0 });
    cy.get("#AccountFrm_loginname").type(faker.lorem.word({ length: { min: 5, max: 15 }, strategy: 'fail' })); 
    cy.get("#AccountFrm_password").type(password)
    cy.get("#AccountFrm_confirm").type(password);
    cy.get("#AccountFrm_agree").check();
    cy.get("button[title='Continue']").contains("Continue").click();
    cy.get(".maintext").contains(' Your Account Has Been Created!').should('be.visible')
  });
});
