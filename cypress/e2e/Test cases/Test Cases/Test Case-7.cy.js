import Login from "../../PageObjects/Login";


describe('Buy Item Test', () => {
  beforeEach(() => {
    cy.visit('/');
  })
    it('Valid user can buy any item', () => {
      const login = new Login();
      const baseUrl = Cypress.config('baseUrl');
      const username = 'standard_user';
      const password = 'secret_sauce';
      const Item1 = 'Sauce Labs Backpack';
      const price = '29.99';
      const firstName = 'John';
      const lastName = 'Doe';
      const postalCode = '12345';
      const itemButtonLabel = "add-to-cart-sauce-labs-backpack"
      cy.login (username,password); 
     
      cy.url().should('include', '/inventory.html');
  
      cy.get('.inventory_item').first().find(`button[data-test=${itemButtonLabel}]`).click();
  
      cy.get('.shopping_cart_link').click();

      cy.get('button[data-test="checkout"]').click();
  
      cy.get('input[data-test="firstName"]').type(firstName);
      cy.get('input[data-test="lastName"]').type(lastName);
      cy.get('input[data-test="postalCode"]').type(postalCode);
      cy.get('input[data-test="continue"]').click();
  
      cy.get('button[data-test="finish"]').click();
  
      cy.url().should('include', '/checkout-complete.html');
  
      cy.get('.complete-header').should('have.text', 'Thank you for your order!');
    });
  });
  