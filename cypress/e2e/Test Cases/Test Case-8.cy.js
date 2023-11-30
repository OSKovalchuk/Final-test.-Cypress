// cypress/integration/responsiveLogin.spec.js

describe('Responsive Login Test', () => {
    it('Valid user can login when screen width is less than 1060px', () => {
      // Set the viewport size to less than 1060px width
      cy.viewport(1000, 800);
  
      // Visit the login page
      cy.visit('https://www.saucedemo.com/');
  
      // Log in with a valid username and password
      cy.get('input[data-test="username"]').type('standard_user');
      cy.get('input[data-test="password"]').type('secret_sauce');
      cy.get('input[type="submit"]').click();
  
      // Verify the URL is changed to the inventory page
      cy.url().should('include', '/inventory.html');
    });
  });
  