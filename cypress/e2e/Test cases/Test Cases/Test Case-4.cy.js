import Login from "../../PageObjects/Login";


describe('Locked-Out User Test', () => {
    it('Locked-out user cannot log in with valid credentials', () => {
      const baseUrl = Cypress.config('baseUrl');
      const login = new Login();
      const username = 'locked_out_user';
      const password = 'secret_sauce';
      
      cy.visit (baseUrl); 
      login.username().type(username);
      login.password().type(password);
      login.clickbutton().click();

      cy.get('h3[data-test="error"]').should('be.visible').and('have.text', 'Epic sadface: Sorry, this user has been locked out.');

    });
  });
