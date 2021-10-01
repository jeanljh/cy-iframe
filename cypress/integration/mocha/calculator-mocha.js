/// <reference types="cypress"/>

describe('Calculator Tests', () => {
    beforeEach(() => {
        cy.fixture('test-data').as('data')
        cy.visit('/')
        cy.GetIframe()
    })
    // method 1 - simulate entering values by key press using key codes
    it.only('Test calculations via key press', () => {
        cy.get('@data').then(dt => {
            dt.operations.forEach(op => {
                // perform calculations
                cy.KeyPress(op)
                cy.wait(500)
                // check result by visual comparison between current image with base image
                cy.CompareResult()
            })
        })
    })
    // method 2 - simulate entering values by mouse click at (x, y) positions
    it('Test calculations via mouse click', () => {
        cy.get('@data').then(dt => {
            dt.operations.forEach(op => {
                // perform calculations
                cy.MouseClick(op)
                cy.wait(500)
                // check result by visual comparison between current image with base image
                cy.CompareResult()
            });
        })
    })
})