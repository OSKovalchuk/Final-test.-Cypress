import Login from "../../PageObjects/Login";

const login = new Login();
const username = 'standard_user';
const password = 'secret_sauce';

describe('login Test', () => {

  beforeEach(() => {
    cy.visit('/');
  })

  it('Valid (standard_user) user can log in', () => {
    
  cy.login (username,password);

    cy.url().should('include', '/inventory.html');
  });
});


