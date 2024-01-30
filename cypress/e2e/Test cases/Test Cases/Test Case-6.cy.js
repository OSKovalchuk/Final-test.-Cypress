// cypress/integration/addToCart.spec.js
const username = 'standard_user';
const password = 'secret_sauce';
const Item1 = 'Sauce Labs Backpack';
const price = '$29.99';
const itemButtonLabel = "add-to-cart-sauce-labs-backpack"

describe('Add to Cart Test', () => {
    it('Valid user can add any item to the cart', () => {
      const baseUrl = Cypress.config('baseUrl');
      cy.visit (baseUrl); 
  
      cy.get('input[data-test="username"]').type(username);
      cy.get('input[data-test="password"]').type(password);
      cy.get('input[type="submit"]').click();
  
      cy.url().should('include', '/inventory.html');

      cy.get('.inventory_item').first().find(`button[data-test=${itemButtonLabel}]`).click();
  
      cy.get('.shopping_cart_link').click();
  
      cy.get('.cart_item').should('have.length', 1);
      cy.get('.cart_item').first().find('.inventory_item_name').should('have.text', Item1);
      cy.get('.cart_item').first().find('.inventory_item_price').should('have.text', price);
  
      cy.get('button[data-test="checkout"]').should('be.enabled');
      
    });
  });
  