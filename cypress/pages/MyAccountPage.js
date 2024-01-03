class MyAccountPage {
    getViewCartBtn() {
        return cy.get("#AccountFrm_firstname")
    }

    setFirstName() {
        return cy.get("#AccountFrm_firstname")
    }

    getEditAccountDetails() {
        return cy.get("a").contains("Edit account details")
    }

    getContinueBtn() {
        return cy.get("button").contains("Continue")
    }
}

export default new MyAccountPage();