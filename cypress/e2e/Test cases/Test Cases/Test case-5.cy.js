// cypress/integration/performanceGlitchUser.spec.js
const username = 'performance_glitch_user';
const password = 'secret_sauce';

describe('Performance Glitch User Test', () => {
    it('Valid (performance_glitch_user) user can log in with a long timeout', () => {
      const baseUrl = Cypress.config('baseUrl');
      cy.visit (baseUrl); 
  
      cy.get('input[data-test="username"]').type(username);
      cy.get('input[data-test="password"]').type(password);
  
      cy.get('input[type="submit"]').wait(5000).click();
  
      cy.url().should('include', '/inventory.html');
  
      cy.get('.bm-burger-button').click();
      cy.get('#logout_sidebar_link').should('be.visible');
    });
  });
  