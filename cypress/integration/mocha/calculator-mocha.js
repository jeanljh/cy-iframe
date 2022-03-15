/// <reference types="cypress"/>

describe('Calculator Tests - Mocha', () => {
    beforeEach(() => {
        cy.fixture('test-data').as('data')
        cy.visit('/')
        cy.getIframe()
    })
    // method 1 - simulate entering values by key press using key codes
    it.only('Test calculations via key press', () => {
        cy.get('@data').then(dt => {
            dt.operations.forEach((op, id) => {
                // perform calculations
                cy.keyPress(op)
                cy.wait(1000)
                // check result by visual comparison between actual image with base image
                cy.get('#fullframe').compareSnapshot(`${id}`, 0.3)
            })
        })
    })
    // method 2 - simulate entering values by mouse click at (x, y) positions
    it('Test calculations via mouse click', () => {
        cy.get('@data').then(dt => {
            dt.operations.forEach(op => {
                // perform calculations
                cy.mouseClick(op)
                cy.wait(1000)
                // check result by visual comparison between actual image with base image
                cy.get('#fullframe').compareSnapshot(`${id}`, 0.3)
            });
        })
    })
})