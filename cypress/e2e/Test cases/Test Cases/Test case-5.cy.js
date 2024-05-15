import Login from "../../PageObjects/Login";


describe('Performance Glitch User Test', () => {
  beforeEach(() => {
    cy.visit('/');
  })
    it('Valid (performance_glitch_user) user can log in with a long timeout', () => {
      const baseUrl = Cypress.config('baseUrl');
      const login = new Login();
      const username = 'performance_glitch_user';
      const password = 'secret_sauce';

      cy.login (username,password); 
    
      cy.url().should('include', '/inventory.html');
  
      cy.get('.bm-burger-button').click();
      cy.get('#logout_sidebar_link').should('be.visible');
    });
  });
  