import Login from "../../PageObjects/Login";

describe('Logout Test', () => {
  beforeEach(() => {
    cy.visit('/');
  })
    it('Valid (standard_user) user can logot', () => {
      const baseUrl = Cypress.config('baseUrl');
      const login = new Login();
      const username = 'standard_user';
      const password = 'secret_sauce';
      
     cy.login (username,password); 
     cy.url().should('include', '/inventory.html');
      
      cy.get('.bm-burger-button').click(); 
      cy.get('#logout_sidebar_link').should('be.visible');
    
      cy.get('#logout_sidebar_link').click();
    
      cy.url().should('eq', baseUrl);   

    });
  });