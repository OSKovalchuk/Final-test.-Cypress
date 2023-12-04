// cypress/integration/lockedOutUser.spec.js

describe('Locked-Out User Test', () => {
    it('Locked-out user cannot log in with valid credentials', () => {
      // Visit the login page
      cy.visit('https://www.saucedemo.com/');
  
      // Log in with a locked-out user's valid username and password
      cy.get('input[data-test="username"]').type('locked_out_user');
      cy.get('input[data-test="password"]').type('secret_sauce');
      cy.get('input[type="submit"]').click();

      // Verify the error label is visible with the correct text
      cy.get('h3[data-test="error"]').should('be.visible').and('have.text', 'Epic sadface: Sorry, this user has been locked out.');

    });
  });
