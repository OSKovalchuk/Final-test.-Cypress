
import Login from "../../PageObjects/Login";

describe('login Test', () => {

    it('Valid (standard_user) user can log in', () => {

      const login = new Login();
      const username = 'standard_user';
      const password = 'secret_sauce';
      const baseUrl = Cypress.config('baseUrl');

      cy.visit (baseUrl); 
      login.username().type(username);
      login.password().type(password);
      login.clickbutton().click();
   
      cy.url().should('include', '/inventory.html');
      
   });
  });
 

