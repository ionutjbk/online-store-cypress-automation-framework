class NavBarPage {
    getRegisterLoginBtn() {
        return cy.get("a").contains(/Login or register/i);
    }

    getCartBtn() {
        return cy.get("#main_menu_top > li:nth-child(3) > a > span")
    } 
}

export default new NavBarPage();