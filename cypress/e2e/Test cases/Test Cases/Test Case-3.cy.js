import Login from "../../PageObjects/Login";


describe('Invalid Login Test', () => {
    it('Valid (standard_user) user cannot log in with invalid credentials', () => {
      
      const baseUrl = Cypress.config('baseUrl');
      const login = new Login();
      const username = 'invalid_user';
      const password = 'invalid_password';

      
      cy.visit (baseUrl); 
      login.username().type(username);
      login.password().type(password);
      login.clickbutton().click();
  

      cy.get('h3[data-test="error"]').should('be.visible').and('have.text', 'Epic sadface: Username and password do not match any user in this service');
    });
  });
  