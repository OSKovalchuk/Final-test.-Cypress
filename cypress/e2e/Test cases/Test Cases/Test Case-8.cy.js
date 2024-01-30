// cypress/integration/responsiveLogin.spec.js
const username = 'standard_user';
const password = 'secret_sauce';

describe('Responsive Login Test', () => {
    it('Valid user can login when screen width is less than 1060px', () => {

      cy.viewport(1000, 800);
  
      const baseUrl = Cypress.config('baseUrl');
      cy.visit (baseUrl); 
  
      cy.get('input[data-test="username"]').type(username);
      cy.get('input[data-test="password"]').type(password);
      cy.get('input[type="submit"]').click();
  
      cy.url().should('include', '/inventory.html');
    });
  });
  