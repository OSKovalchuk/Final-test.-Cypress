// cypress/integration/addToCart.spec.js

describe('Add to Cart Test', () => {
    it('Valid user can add any item to the cart', () => {
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
  
      // Verify that the added item exists in the cart with the same name and price
      cy.get('.cart_item').should('have.length', 1);
      cy.get('.cart_item').first().find('.inventory_item_name').should('have.text', 'Sauce Labs Backpack');
      cy.get('.cart_item').first().find('.inventory_item_price').should('have.text', '$29.99');
  
      // Verify that the checkout button is enabled
      cy.get('button[data-test="checkout"]').should('be.enabled');
    });
  });
  