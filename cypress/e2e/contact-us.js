/// <reference types="cypress" />

describe("Test Contact Us from via WebdriverUni", () => {
    it("Should be able to submit a successfull submission contact us from", () => {
        //code
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type("Joe")
        cy.get('[name="last_name"]').type("Don")
        cy.get('[name="email"]').type("andrekripes@gmail.com")
        cy.get('[name="message"]').type("some text")
        cy.get('[class="contact_button"][value="SUBMIT"]').click()
        //cy.visit(cy.get('#contact-us').click({force: true}))
        //cy.get('#contact-us').invoke('attr', 'href').then(href => {cy.visit("http://www.webdriveruniversity.com/" + href)})
    });
    it.only("Should not be able to submit a successfull submission contact us from as ", () => {
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type("Joes")
        cy.get('[name="last_name"]').type("Don")
        cy.get('[name="message"]').type("some text")
        cy.get('[class="contact_button"][value="SUBMIT"]').click()
    });
});
