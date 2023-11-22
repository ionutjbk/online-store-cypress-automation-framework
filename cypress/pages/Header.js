class Header {
    getHomeBtn() {
        return cy.get("a").contains("Home")
    }
}

export default new Header();