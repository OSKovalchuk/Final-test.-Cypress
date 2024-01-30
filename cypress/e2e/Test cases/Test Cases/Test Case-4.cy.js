// cypress/integration/lockedOutUser.spec.js
const username = 'locked_out_user';
const password = 'secret_sauce';

describe('Locked-Out User Test', () => {
    it('Locked-out user cannot log in with valid credentials', () => {
      const baseUrl = Cypress.config('baseUrl');
      cy.visit (baseUrl);
    
      cy.get('input[data-test="username"]').type(username);
      cy.get('input[data-test="password"]').type(password);
      cy.get('input[type="submit"]').click();

      cy.get('h3[data-test="error"]').should('be.visible').and('have.text', 'Epic sadface: Sorry, this user has been locked out.');

    });
  });
