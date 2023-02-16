let baseUrl = 'https://automationteststore.com/'
let searchThing = 'lipstick{enter}'
export class Navigation {

    accessorsPage() {
        cy.visit(baseUrl)
        cy.get('div.container-fixed')
        .find('section#categorymenu').contains('Apparel & accessories').click()
    }

    searchPage() {
        cy.visit(baseUrl)
        cy.get('div.block_4').find('input', '#filter_keyword').eq(1).type(searchThing)
    }

    formPage() {
        cy.visit('https://automationteststore.com/index.php?rt=checkout/guest_step_1')
        cy.get('form').eq(1)
    }

    fragrancePage() {
        cy.visit(baseUrl)
        cy.get('div.container-fixed')
        .find('section#categorymenu').contains('Fragrance').click()
    }
}
export const goTo = new Navigation



