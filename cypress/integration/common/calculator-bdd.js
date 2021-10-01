/// <reference types="cypress"/>

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('I navigate to the url', () => {
    cy.visit('/')
    cy.GetIframe()
})

When('I press {string}', (val) => {
    // perform calculations
    cy.KeyPress(val)
    cy.wait(500)
})

Then('I validate that actual result is matched with expected result', () => {
    // check result by visual comparison between current image with base image
    cy.CompareResult()
    // press 'CE' to clear
    cy.KeyPress('c')
})

