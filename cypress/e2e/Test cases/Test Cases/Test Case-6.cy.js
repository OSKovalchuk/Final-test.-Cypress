import Login from "../../PageObjects/Login";


describe('Add to Cart Test', () => {
    it('Valid user can add any item to the cart', () => {
      const baseUrl = Cypress.config('baseUrl');
      const login = new Login();
      const username = 'standard_user';
      const password = 'secret_sauce';
      const Item1 = 'Sauce Labs Backpack';
      const price = '$29.99';
      const itemButtonLabel = "add-to-cart-sauce-labs-backpack"

      cy.visit (baseUrl); 
      login.username().type(username);
      login.password().type(password);
      login.clickbutton().click();
  
      cy.url().should('include', '/inventory.html');

      cy.get('.inventory_item').first().find(`button[data-test=${itemButtonLabel}]`).click();
  
      cy.get('.shopping_cart_link').click();
  
      cy.get('.cart_item').should('have.length', 1);
      cy.get('.cart_item').first().find('.inventory_item_name').should('have.text', Item1);
      cy.get('.cart_item').first().find('.inventory_item_price').should('have.text', price);
  
      cy.get('button[data-test="checkout"]').should('be.enabled');
      
    });
  });
  