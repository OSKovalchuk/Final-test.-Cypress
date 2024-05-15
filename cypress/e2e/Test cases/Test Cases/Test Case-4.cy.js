import Login from "../../PageObjects/Login";


describe('Locked-Out User Test', () => {
  beforeEach(() => {
    cy.visit('/');
  })
    it('Locked-out user cannot log in with valid credentials', () => {
      const baseUrl = Cypress.config('baseUrl');
      const login = new Login();
      const username = 'locked_out_user';
      const password = 'secret_sauce';

      cy.login (username,password); 
    
      cy.get('h3[data-test="error"]').should('be.visible').and('have.text', 'Epic sadface: Sorry, this user has been locked out.');

    });
  });
