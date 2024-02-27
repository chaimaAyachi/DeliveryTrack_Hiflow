
describe('Check all the mandatory page elements', () => {

  let translation;


  beforeEach(() => {

    //Translation
    cy.fixture('fr').then(fixture =>{translation=fixture})

    // Avant chaque test, visiter cette URL
    //cy.visit('https://test-track.hiflow.com/fr/05D2E6D41D54CEA');
    cy.visit({
      url: 'https://test-track.hiflow.com/fr/05D2E6D41D54CEA', 
      headers: {
        'Accept-Language': 'fr;q=1,en;q=0.9,es;q=0.8,de;q=0.7,it;q=0.6,nl;q=0.5,pt;q=0.4'
      }
    })
  });

  it('checking elements', () => {
    //Client name should exist
    cy.get('.heading-1.mr-3').should('exist')
    //Langage icon should exist
    cy.get('button#headlessui-menu-button-\\:R1j6\\:').should('exist')
    //"Your transfer" title and section should exist
    cy.get('.py-64 > .heading-1').should('exist')
    cy.get('.mt-24.w-full.p-9.border-0.bg-white.rounded-md.mb-16.relative.flex.align-center.items-center').should('exist')
    //3Tabs:Suivi, Détail de transport and Documents should exist (default langage: French)
    cy.contains(translation.Tracking).should('exist')
    cy.contains(translation.Details).should('exist')
    cy.contains(translation.Documents).should('exist')
    //Top of the page button shoul exist
    cy.contains(translation.topOfpage).should('exist')
    
  })
})