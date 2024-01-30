// cypress invalidLogin.spec.js
const username = 'invalid_user';
const password = 'invalid_password';

describe('Invalid Login Test', () => {
    it('Valid (standard_user) user cannot log in with invalid credentials', () => {
      
      const baseUrl = Cypress.config('baseUrl');
      
      cy.visit (baseUrl); 
  
      cy.get('input[data-test="username"]').type(username);
      cy.get('input[data-test="password"]').type(password);

      cy.get('input[type="submit"]').click();
  
      cy.get('h3[data-test="error"]').should('be.visible').and('have.text', 'Epic sadface: Username and password do not match any user in this service');
    });
  });
  