class NavBar {
    registerOrLogin() {
        return cy.get("a").contains(/Login or register/i);
    }
}

export default new NavBar();