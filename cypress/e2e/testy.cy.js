
let baseUrl = 'https://automationteststore.com/'
let formPage = 'https://automationteststore.com/index.php?rt=checkout/guest_step_1'
import { goTo } from "./pageObjects.js/Navigation"
import { cart } from "./pageObjects.js/Cart-actions"
import { orderForm } from "./pageObjects.js/Orders"
const formFields = [('input[name="firstname"]'), ('input[name="lastname"]'), ('input[name="email"]'), ('input[name="address_1"]'), ('input[name="city"]'), ('input[name="postcode"]')]

describe('spec', () => {
  it('1', () => {
    
    goTo.accessorsPage()
    cy.get('a').eq(116).click({force: true})
    cart.addToCart()
    cart.cartCheck1()
    goTo.accessorsPage()
    cy.get('div.fixed_wrapper').eq(4).click()
    cart.addToCart()
    cart.cartCheck2()
  
    goTo.searchPage()
    cart.addToCart()
    cart.cartCheck3

  cy.get('a#cart_checkout2').click()
  cy.get('form#accountFrm').then( table => {
    cy.wrap(table).find('input#accountFrm_accountguest').click()
    cy.wrap(table).find('button').click()
  })
  orderForm.asGuest()
  cy.get('div.form-group').find('button').click()
  cy.get('div.col-md-12').find('button').click().wait(500)
  cy.get('div#maincontainer').find('h1', ' YOUR ORDER HAS BEEN PROCESSED!')
  })
})

describe('Form validation', () => {

  beforeEach(() => {
    goTo.accessorsPage()
    cy.get('div.fixed_wrapper').eq(4).click()
    cart.addToCart()
    goTo.formPage()
  })
  
  it('2', () => {
    
    cy.get('form').eq(1).find('div', '.control-label col-md-4')
      formFields.forEach((field, index) => {
        orderForm.validation()
         cy.get(field).clear()
          cy.get('div.col-md-12').find('button').click()
          cy.get('.help-block').should('be.visible')


            if (index ===formFields.lenght - 1) {
              orderForm.clearAll()
            } else {
              orderForm.clearAll()
            }
  })   
})
})

describe('Add items to cart', () =>{
  
  it.only('add multiple items and check cart amount', () => {
    goTo.fragrancePage()
    const itemCount = 9
    let cartCount = 0
    for (let i = 0; i < itemCount; i++) {
      cy.get(`a.prdocutname:eq(${i})`).click()
      cart.addToCart()
      cartCount += 1
      cy.get('a.dropdown-toggle').eq(1).find('span').eq(0).should('have.text', cartCount.toString())
      goTo.fragrancePage()
    }
  })
})
