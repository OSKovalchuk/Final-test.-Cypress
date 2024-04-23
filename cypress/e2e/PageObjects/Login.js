
class Login {

    username (){
        return cy.get('input[data-test="username"]')
    }

    password (){

    return cy.get('input[data-test="password"]')
    }
    clickbutton (){

        return  cy.get('input[type="submit"]')
        }
}
beforeEach(() => {
    cy.visit('/');
  })

export default Login