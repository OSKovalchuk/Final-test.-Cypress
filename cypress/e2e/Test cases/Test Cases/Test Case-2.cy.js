// cypress/integration/login.spec.js
const username = 'standard_user';
const password = 'secret_sauce';
describe('Logout Test', () => {
    it('Valid (standard_user) user can logot', () => {
      const baseUrl = Cypress.config('baseUrl');
      
      cy.visit (baseUrl); 
  
      cy.get('input[data-test="username"]').type(username);
      cy.get('input[data-test="password"]').type(password);
  
      cy.get('input[type="submit"]').click();
      
      cy.url().should('include', '/inventory.html');
      
      cy.get('.bm-burger-button').click(); 
      cy.get('#logout_sidebar_link').should('be.visible');
    
      cy.get('#logout_sidebar_link').click();
    
      cy.url().should('eq', baseUrl);   

    });
  });