/// <reference types="cypress" />

describe('Test Shifting Content ', ()=>{

    beforeEach(()=>{

     cy.visit('https://the-internet.herokuapp.com/')    })

it ('Test Shifting Content',() =>{
    cy.get(':nth-child(39) > a').click()
    cy.get('[href="/shifting_content/menu"]').click()
    cy.get(':nth-child(1) > a') 
    cy.get('li').eq(0).should('contain','Home')
    cy.get('li').eq(1).should('contain','About')
    cy.get('li').eq(2).should('contain','Contact Us')
    cy.get('li').eq(3).should('contain','Portfolio')
    cy.get('li').eq(4).should('contain','Gallery')
    
    

    
})


    })