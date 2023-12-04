// cypress/integration/performanceGlitchUser.spec.js

describe('Performance Glitch User Test', () => {
    it('Valid (performance_glitch_user) user can log in with a long timeout', () => {
      // Visit the login page
      cy.visit('https://www.saucedemo.com/');
  
      // Log in with a valid username and password for performance_glitch_user
      cy.get('input[data-test="username"]').type('performance_glitch_user');
      cy.get('input[data-test="password"]').type('secret_sauce');
  
      // Click the login button with a delay to simulate a long timeout
      cy.get('input[type="submit"]').wait(5000).click(); // Adjust the wait time accordingly
  
      // Verify the URL is changed to the inventory page
      cy.url().should('include', '/inventory.html');
  
      // Open the sidebar to check for the logout element
      cy.get('.bm-burger-button').click(); // Assuming you are using BurgerMenu for sidebar
      cy.get('#logout_sidebar_link').should('be.visible');
    });
  });
  