export class CartActions {
    addToCart(){
        cy.get('a.cart').click()
    }

    cartCheck1(){
        cy.get('div.block_7').find('span.cart_total').should('have.text', '$26.00')
        cy.get('a.dropdown-toggle').eq(1).find('span').eq(0).should('have.text', '1')
    }

    cartCheck2(){
        cy.get('div.block_7').find('span.cart_total').should('have.text', '$58.00')
    }

    cartCheck3(){
        cy.get('div.block_7').find('span.cart_total').should('have.text', '$63.00')
    
    }
    addShirt(){
        cy.get('form').eq(1).find('div', '.control-label col-md-4')
    }
}
export const cart = new CartActions