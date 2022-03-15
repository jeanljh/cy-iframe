/// <reference types="cypress"/>

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

let id = 0

Given('I navigate to the url', () => {
    cy.visit('/')
    cy.getIframe()
})

When('I press {string}', (val) => {
    // perform calculations
    cy.keyPress(val)
    cy.wait(1000)
})

Then('I validate that actual result is matched with expected result', () => {
    // check result by visual comparison between actual image with base image
    cy.get('#fullframe').compareSnapshot(`${id++}`, 0.3)
    // press 'CE' to clear
    cy.keyPress('c')
})

