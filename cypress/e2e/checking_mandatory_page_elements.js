const { beforeEach } = require("mocha")
const cypress = require("cypress")


let transalation= cy.fixture('fixtures/fr.json')



describe('template spec', () => {
  beforeEach(() => {
    // Avant chaque test, visiter cette URL
    cy.visit('https://test-track.hiflow.com/fr/05D2E6D41D54CEA');
  });

  it('checking elements', () => {
    //Client name should exist
    cy.get('.heading-1.mr-3').should('exist')
    //Langage icon should exist
    .and('id=headlessui-menu-button-:R1j6:').should('exist')
    //"Your transfer" title and section should exist
    .and('h1[class='heading-1']').should('exist')
    .and('.mt-24.w-full.p-9.border-0.bg-white.rounded-md.mb-16.relative.flex.align-center.items-center').should('exist')
    //3Tabs:Suivi, Détail de transport and Documents should exist (default langage: French)
    cy.contains(translation.Tracking).should('exist')
    cy.contains(translation.Details).should('exist')
    cy.contains(translation.Documents).should('exist')

    //Top of the page button shoul exist
    cy.contains(translation.topOfpage).should('exist')
    
  })
})