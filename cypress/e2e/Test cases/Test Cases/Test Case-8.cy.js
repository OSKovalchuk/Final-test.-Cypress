import Login from "../../PageObjects/Login";


describe('Responsive Login Test', () => {
    it('Valid user can login when screen width is less than 1060px', () => {

      const login = new Login();
      const username = 'standard_user';
      const password = 'secret_sauce';
      const baseUrl = Cypress.config('baseUrl');

      cy.viewport(1000, 800);
  
      
      cy.visit (baseUrl); 
  
      login.username().type(username);
      login.password().type(password);
      login.clickbutton().click();
  
      cy.url().should('include', '/inventory.html');
    });
  });
  