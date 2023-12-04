// cypress/integration/buyItem.spec.js

describe('Buy Item Test', () => {
    it('Valid user can buy any item', () => {
      // Visit the login page
      cy.visit('https://www.saucedemo.com/');
  
      // Log in with a valid username and password
      cy.get('input[data-test="username"]').type('standard_user');
      cy.get('input[data-test="password"]').type('secret_sauce');
      cy.get('input[type="submit"]').click();
  
      // Verify the URL is changed to the inventory page
      cy.url().should('include', '/inventory.html');
  
      // Add the first item to the cart
      cy.get('.inventory_item').first().find('button[data-test="add-to-cart-sauce-labs-backpack"]').click();
  
      // Open the cart
      cy.get('.shopping_cart_link').click();
  
      // Click on the checkout button
      cy.get('button[data-test="checkout"]').click();
  
      // Enter checkout information and continue
      cy.get('input[data-test="firstName"]').type('John');
      cy.get('input[data-test="lastName"]').type('Doe');
      cy.get('input[data-test="postalCode"]').type('12345');
      cy.get('input[data-test="continue"]').click();
  
      // Finish the checkout
      cy.get('button[data-test="finish"]').click();
  
      // Verify the URL is changed to the thank you page
      cy.url().should('include', '/checkout-complete.html');
  
      // Verify the thank you message
      cy.get('.complete-header').should('have.text', 'THANK YOU FOR YOUR ORDER!');
    });
  });
  