// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const compareSnapshotCommand = require('cypress-visual-regression/dist/command');
compareSnapshotCommand();

// -- Get iframe --
Cypress.Commands.add('getIframe', () => {
    cy.get('#fullframe').as('iframe').then(e => {
        const canvas = e.contents().find('#canvas')
        cy.wrap(canvas).as('canvas')
    })
})
// -- Key press --
Cypress.Commands.add('keyPress', keys => {
    keys.split('').forEach(k => {
        const code = k.charCodeAt(0)
        cy.get('body').trigger('keypress', { keyCode: code });
    });
})
// -- Mouse click --
Cypress.Commands.add('mouseClick', keys => {
    keys.split('').forEach(k => {
        switch (k) {
            case '0':
                cy.get('@canvas').click(50, 700)
                break;
            case '1':
                cy.get('@canvas').click(50, 600)
                break;
            case '2':
                cy.get('@canvas').click(200, 600)
                break;
            case '3':
                cy.get('@canvas').click(350, 600)
                break;
            case '4':
                cy.get('@canvas').click(50, 450)
                break;
            case '5':
                cy.get('@canvas').click(200, 450)
                break;
            case '6':
                cy.get('@canvas').click(350, 450)
                break;
            case '7':
                cy.get('@canvas').click(50, 350)
                break;
            case '8':
                cy.get('@canvas').click(200, 350)
                break;
            case '9':
                cy.get('@canvas').click(350, 350)
                break;
            case '/':
                cy.get('@canvas').click(500,350)
                break;
            case '-':
                cy.get('@canvas').click(500, 600)
                break;
            case '+':
                cy.get('@canvas').click(500, 700)
                break;
            case '=':
                cy.get('@canvas').click(600, 700)
                break;
            case '.':
                cy.get('@canvas').click(200, 700)
                break;
            case 'c':
                cy.get('@canvas').click(600, 200)
                break;
        }
    });
})