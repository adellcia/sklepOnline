//css selectors
let baseUrl = 'https://automationteststore.com/'
let formPage = 'https://automationteststore.com/index.php?rt=checkout/guest_step_1'

import { goTo } from "../support/pageObjects.js/Navigation"
import { cart } from "../support/pageObjects.js/Cart-actions"
import { orderForm } from "../support/pageObjects.js/Orders"

const formFieldsall = [('input[name="firstname"]'), ('input[name="lastname"]'), ('input[name="email"]'), ('input[name="address_1"]'), ('input[name="city"]'), ('input[name="postcode"]')]
const formFields1 = [('input[name="firstname"]'), ('input[name="lastname"]'), ('input[name="address_1"]'), ('input[name="postcode"]')]
let shortZIP = '1'
let longZIP = '12345678910'
let longForm = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et sem quis orci mollis imperdiet. Sed a nibh nec dui semper orci.'

describe('spec', () => {
  it.only('1', () => {
    
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
    cart.cartCheck3()

  cy.get('a#cart_checkout2').click()
  cy.get('form#accountFrm').then( table => {
    cy.wrap(table).find('input#accountFrm_accountguest').click()
    cy.wrap(table).find('button').click()
  })
  orderForm.asGuest()
  cy.get('div.form-group').find('button').click()
  orderForm.continueButton()
  cy.wait(500)
  cy.get('div#maincontainer').find('h1').should('have.text', '\n   Your Order Has Been Processed!\n  \n')
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
    cart.addShirt()
      formFieldsall.forEach((field, index) => {
        orderForm.validation()
        cy.get(field).clear()
        orderForm.continueButton()
        orderForm.validationAssert()
        if (index ===formFieldsall.lenght - 1) {
           orderForm.clearAll()
            } else {
              orderForm.clearAll()
            }
  })   
})
it('<3 signs validation', () => {
  cart.addShirt()
  formFields1.forEach((field, index) => {
  orderForm.validation()
  cy.get(field).clear().type('a')
  orderForm.continueButton()
  orderForm.validationAssert()
  if (index ===formFields1.lenght - 1) {
    orderForm.clearAll()
  } else {
    orderForm.clearAll()
  }
})
})
it('>128 signs validation', () => {
  cart.addShirt()
  formFields1.forEach((field, index) => {
  orderForm.validation()
  cy.get(field).clear().type(longForm)
  orderForm.continueButton()
  orderForm.validationAssert()
  if (index ===formFields1.lenght - 1) {
    orderForm.clearAll()
  } else {
    orderForm.clearAll()
  }
})
it('email validation', () => {
  cart.addShirt()
  orderForm.validation()
  cy.get('input[name="email"]').first().clear().type('brad.pitt.gmail.com')
  orderForm.continueButton()
  orderForm.validationAssert()
})

it('ZIP validation', () => {
  cart.addShirt()
  orderForm.validation()
  cy.get('input[name="postcode"]').clear().type(shortZIP)
  orderForm.continueButton()
  orderForm.validationAssert()
  cy.get('input[name="postcode"]').clear().type(longZIP)
  orderForm.continueButton()
  orderForm.validationAssert()
})
})
describe('Add items to cart', () =>{
  it('add multiple items and check cart amount', () => {
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
})