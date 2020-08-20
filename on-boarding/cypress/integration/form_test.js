describe('Onboarding App', () =>{

    const inputName = () => cy.get('input[name="name"]')
    const inputEmail = () => cy.get('input[name="email"]')
    const inputPassword = () => cy.get('input[name="password"]')

    it('can navigate to http://localhost:3000/',() =>{
        cy.visit('http://localhost:3000/')
        cy.url().should('include', 'localhost')
    })
    // check to see if value of name matches inputs
    it('can check for name change', ()=>{
        inputName()
            .type('kalvin zhao')
            .should('have.value', 'kalvin zhao')
            .clear()
    })
    
    //check to see if value of email matches inputs
    it('can check for email change', ()=>{
        inputEmail()
            .type('kal@kal.com')
            .should('have.value', 'kal@kal.com')
            .clear()
    })
    //check to see if value of password matches inputs
    it('can check for password change', ()=>{
        inputPassword()
            .type('12345678')
            .should('have.value', '12345678')
            .clear()
    })
    //check to see if checkbox is checked/ uncheck
    it('can check for checked checkboxes', ()=>{
        cy.get('[type="checkbox"]')
            .check()
            .should('be.checked')
            .uncheck()
            .should('not.be.checked')
    })
    // check for roles
    it('can select a role', ()=>{
        cy.get('select').select('front_end')
        cy.get('select').should('have.value', 'front_end')
        cy.get('select').select('')
    })
    //check to see if submit button is disabled
    it('can check to see if submit button is disabled', ()=>{
        cy.get('button').should('be.disabled')
    })
    // check for error message for name
    it('can check if for error message if name is less than 3 characters', ()=>{
        inputName().type('Hi')
        cy.contains('your name must have 3 characters')
        inputName().clear()
    })
    // check for error message for email
    it('can check for valid email', ()=>{
        inputEmail().type('kal.com')
        cy.contains('this must be a valid email')
        inputEmail().clear()
    })
    // check for error message for password
    it('can check for valid password', ()=>{
        inputPassword().type('kal.com')
        cy.contains('your password must have 8 characters')
        inputPassword().clear()
    })
    //check can submit
    it('can submit', ()=>{
        inputName().type('Kalvin Zhao')
        inputEmail().type('kalvin@kalvin.com')
        inputPassword().type('12345678')
        cy.get('select').select('front_end')
        cy.get('[type="checkbox"]').check()
        cy.get('button').click()
    })
    //check can display
})