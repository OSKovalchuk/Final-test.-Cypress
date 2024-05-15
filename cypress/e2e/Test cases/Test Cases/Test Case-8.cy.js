import Login from "../../PageObjects/Login";


describe('Responsive Login Test', () => {
  beforeEach(() => {
    cy.visit('/');
  })
    it('Valid user can login when screen width is less than 1060px', () => {

      const login = new Login();
      const username = 'standard_user';
      const password = 'secret_sauce';
      const baseUrl = Cypress.config('baseUrl');

      cy.viewport(1000, 800);
      cy.login (username,password); 
  
      cy.url().should('include', '/inventory.html');
    });
  });
  