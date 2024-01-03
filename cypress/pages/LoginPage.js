class LoginPage {
    setLoginUsername() {
        return cy.get("#loginFrm_loginname")
    }

    setLoginPassword() {
        return cy.get("#loginFrm_password")
    }

    getLoginBtn() {
        return cy.get('button[title="Login"]').contains('Login')
    }

    login(loginName, password) {
        cy.visit("https://automationteststore.com/");
        cy.get("a").contains(/Login or register/i).click();
        cy.get("#loginFrm_loginname").type(loginName, {delay: 0})
        cy.get("#loginFrm_password").type(password, {delay: 0})
        cy.get('button').contains('Login').click()
    }
}

export default new LoginPage();