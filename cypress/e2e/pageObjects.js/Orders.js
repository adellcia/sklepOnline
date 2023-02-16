let firstName = 'Brad'
let lastName = 'Pitt'
let emailAddress = 'brad.pitt@gmail.com'
let homeAddress = 'Lipowa Street'
let city = 'Warsaw'
let postCode = '10-464'
let country = 'Poland'
let region = 'Mazowieckie'

export class Orders {
    asGuest(){
        
    cy.get('form').eq(1)
           .find('div', '.control-label col-md-4').find('input').eq(0).type(firstName)
            
    cy.get('form').eq(1)
        .find('div', '.control-label col-md-4').find('input').eq(1).type(lastName)

    cy.get('form').eq(1)
    .find('div', '.control-label col-md-4').find('input').eq(2).type(emailAddress)

    cy.get('form').eq(1)
    .find('div', '.control-label col-md-4').find('input').eq(6).type(homeAddress)

    cy.get('form').eq(1)
    .find('div', '.control-label col-md-4').find('input').eq(8).type(city)

    cy.get('form').eq(1)
    .find('div', '.control-label col-md-4').find('input').eq(9).type(postCode)

    cy.get('form').eq(1)
    .find('div', '.control-label col-md-6').find('select').eq(1).select(country)

    cy.get('form').eq(1)
    .find('div', '.control-label col-md-6').find('select').eq(0).select(region)

    }

    submit(){
        cy.get('div.col-md-12').find('button').click().wait(500)
    }

    validation(){

        
            
    cy.get('form').eq(1)
           .find('div', '.control-label col-md-4').find('input[name="firstname"]').type(firstName)
            
    cy.get('form').eq(1)
        .find('div', '.control-label col-md-4').find('input[name="lastname"]').type(lastName)

    cy.get('form').eq(1)
    .find('div', '.control-label col-md-4').find('input[name="email"]').type(emailAddress)

    cy.get('form').eq(1)
    .find('div', '.control-label col-md-4').find('input[name="address_1"]').type(homeAddress)

    cy.get('form').eq(1)
    .find('div', '.control-label col-md-4').find('input[name="city"]').type(city)

    cy.get('form').eq(1)
    .find('div', '.control-label col-md-4').find('input[name="postcode"]').type(postCode)

    cy.get('form').eq(1)
    .find('div', '.control-label col-md-6').find('select[name="country_id"]').select(country)

    cy.get('form').eq(1)
    .find('div', '.control-label col-md-6').find('select[name="zone_id"]').select(region)
    
    
    //cy.get('div.col-md-12').find('button').click().wait(500)
        
    }

    clearAll(){
        cy.get('input[name="firstname"]').clear()
        cy.get('input[name="lastname"]').clear()
        cy.get('input[name="email"]').clear()
        cy.get('input[name="address_1"]').clear()
        cy.get('input[name="city"]').clear()
        cy.get('select[name="zone_id"]').select('FALSE')
        cy.get('input[name="postcode"]').clear()
        // cy.get('select[name="country_id"]').select('default')
    }

    validationAssert(){
        cy.get('.help-block').should('be.visible')
    }

    continueButton(){
        cy.get('div.col-md-12').find('button').click()
    }
}


export const orderForm  = new Orders