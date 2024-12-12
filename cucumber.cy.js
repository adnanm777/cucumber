//import {Given,And,Then} from "cypress-cucumber-preprocessor/steps";
//Given('open the url',()=>{
//cy.visit('https://the-internet.herokuapp.com/login');
//})
//And("Enter username and pasword",()=>{
//cy.get("#username").type("tomsmith");
//cy.get('[type="password"]').type("SuperSecretPassword!");
//})
//Then('click on button',()=>{
//cy.get(".radius").click();
//})    //  


import {Given,And,Then} from "cypress-cucumber-preprocessor/steps";

Given('open the url',()=>{
    cy.visit('https://v1.training-support.net/selenium/simple-form');
})

And("Enter username and pasword",()=>{
    //first name
    cy.get("#firstName").type('Mohammad');
    //last name
    cy.get('#lastName').type('Adnan');

    //email
    cy.get('#email').type('adnan@gmail.com');
    //number
    cy.get('#number').type('8793182354');
    //Masses
    cy.get('[rows="2"]').type('I am Cypress user')

})

Then('click on button',()=>{
    cy.get('[value="submit"]').click();
})
