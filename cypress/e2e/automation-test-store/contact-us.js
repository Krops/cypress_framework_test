/// <reference types="cypress" />

describe("Test Contact Us from via Automation Test Store", () => {
    it("Should be able to submit a successfull submission contact us from", () => {
       cy.visit("https://automationteststore.com/")
       cy.get('.info_links_footer > :nth-child(5) > a').click()
       cy.get('#ContactUsFrm_first_name').type("Joe")
       cy.get('#ContactUsFrm_email').type("andre_cocks@gmail.com")
       cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')
       cy.get('#ContactUsFrm_enquiry').type("sometest dfsdf")
       cy.get('.col-md-6 > .btn').click()
       //cy.xpath('//*[@class="col-md-6"//*[@class="btn"]]').click()
       cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
    });
});
