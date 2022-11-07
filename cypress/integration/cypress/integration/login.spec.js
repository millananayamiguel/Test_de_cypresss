/// <reference types="cypress" />

describe('test de login', ()=>{

    beforeEach(()=>{

     cy.visit('https://the-internet.herokuapp.com/')
     cy.get(':nth-child(21) > a').click()    })

it ('A valid user can login', () =>{
    
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.fa').click()
    cy.get('#flash').contains(' You logged into a secure area!')
    //Test Login valido //
})
it("A not valid password try login", () =>{
    cy.get('#username').type("tomsmith")
    cy.get('#password').type("123")
    cy.get('.fa').click()
    cy.get('#flash').contains("Your password is invalid!")
    //Test Test Login invalido (password)//
})
it("A not valid username try login",() =>{
    
    cy.get('#username').type('juan')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.fa').click()
    cy.get('#flash').contains('Your username is invalid!')
    //Test Test Login invalido (username)//
})
it("A not valid empty fields try login",() =>{
    
    cy.get('#username').should('be.empty')
    cy.get('#password').should('be.empty')
    cy.get('.fa').click()
    /* cy.get('#flash').contains('Your empty fields is invalid!') */
    //Test Login Invalido (campos vacios)//
})



})

/* it ('A empty user and password cannot login', () =>{
    cy.visit("https://the-internet.herokuapp.com/")
    cy.get(':nth-child(21) > a').click()
    cy.get('#username').clear()
    cy.get('#password').clear()
    cy.get('.fa').click()
    cy.get('#flash').contains("Your username is invalid!")
damian con el clear
    }) */