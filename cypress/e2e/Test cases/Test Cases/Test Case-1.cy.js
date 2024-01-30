//cypress/integration/login.spec.js
const username = 'standard_user';
const password = 'secret_sauce';


describe('Login Test', () => {
    it('Valid (standard_user) user can log in', () => {

      const baseUrl = Cypress.config('baseUrl');
      cy.visit (baseUrl); 
  
       cy.get('input[data-test="username"]').type(username);
       cy.get('input[data-test="password"]').type(password);
  
       cy.get('input[type="submit"]').click();
   
       cy.url().should('include', '/inventory.html');
      
    });
  });
 

