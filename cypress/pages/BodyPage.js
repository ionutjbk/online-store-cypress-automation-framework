class Body {
    getFirstItemBtn() {
        cy.get("#block_frame_featured_1769 > div > div:nth-child(1) > div.thumbnail > div.pricetag.jumbotron > a")
    }

    getCheckoutBtn() {
        cy.get("#cart_checkout1")
    }

    getConfirmOrderBtn() {
        cy.get("#checkout_btn")
    }
}

export default new Body();