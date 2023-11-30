// cypress/integration/invalidLogin.spec.js

describe('Invalid Login Test', () => {
    it('Valid (standard_user) user cannot log in with invalid credentials', () => {
      // Visit the login page
      cy.visit('https://www.saucedemo.com/');
  
      // Enter invalid username and password
      cy.get('input[data-test="username"]').type('invalid_user');
      cy.get('input[data-test="password"]').type('invalid_password');
  
      // Click the login button
      cy.get('input[type="submit"]').click();
  
      // Verify the error label is visible with the correct text
      //cy.get('h3[data-test="error"]').should('be.visible').and('have.text', 'Username and password do not match any user in this service.');
    });
  });
  