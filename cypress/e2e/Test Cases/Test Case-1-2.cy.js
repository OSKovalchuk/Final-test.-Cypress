// cypress/integration/login.spec.js

describe('Login Test', () => {
    it('Valid (standard_user) user can log in', () => {
      // Visit the login page
      cy.visit('https://www.saucedemo.com/');
  
      // Enter valid username and password
      cy.get('input[data-test="username"]').type('standard_user');
      cy.get('input[data-test="password"]').type('secret_sauce');
  
      // Click the login button
      cy.get('input[type="submit"]').click();
  
      // Verify the URL is changed to the inventory page
      cy.url().should('include', '/inventory.html');
  
      // Open the sidebar to check for the logout element
      cy.get('.bm-burger-button').click(); // Assuming you are using BurgerMenu for sidebar
      cy.get('#logout_sidebar_link').should('be.visible');
      
      //Logout from the application
      cy.get('#logout_sidebar_link').click();

    });
  });
  