class BodyPage {
    getFirstItemBtn() {
        return cy.get("#block_frame_featured_1769 > div > div:nth-child(1) > div.thumbnail > div.pricetag.jumbotron > a")
    }

    getCheckoutBtn() {
        return cy.get("#cart_checkout1")
    }

    getConfirmOrderBtn() {
        return cy.get("#checkout_btn")
    }

    setLoginUsername() {
        return cy.get("#loginFrm_loginname")
    }

    setLoginPassword() {
        return cy.get("#loginFrm_password")
    }

    getLoginBtn() {
        return cy.get('button[title="Login"]').contains('Login')
    }
}

export default new BodyPage();