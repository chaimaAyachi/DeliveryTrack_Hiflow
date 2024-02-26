describe('Change the page langage', () => {

    let translation;
    let translation1;

    beforeEach(() => {

        //Translation
        cy.fixture('fr').then(fixture =>{translation=fixture})
        cy.fixture('en').then(fixture1 =>{translation1=fixture1})
    
        // Avant chaque test, visiter cette URL
        //cy.visit('https://test-track.hiflow.com/fr/05D2E6D41D54CEA');
        cy.visit({
          url: 'https://test-track.hiflow.com/fr/05D2E6D41D54CEA', // Remplacez par l'URL de votre choix
          headers: {
            'Accept-Language': 'fr;q=1,en;q=0.9,es;q=0.8,de;q=0.7,it;q=0.6,nl;q=0.5,pt;q=0.4'
          }
        })
      });

    it ('English', () => {
        //Click on the langage icon
        cy.get('button#headlessui-menu-button-\\:R1j6\\:').should('exist') .click(); 
        //select English
        cy.contains(translation.EN).click();

        //Check that the "Documents" tab doesn't exist
        cy.contains(translation.Documents).should('not.exist');

        //Check that all the principal page elements are in english
        cy.contains(translation1.Transfert).should('exist');
        cy.contains(translation1.Tracking).should('exist');
        cy.contains(translation1.Details).should('exist');
        cy.contains(translation1.topOfpage).should('exist');

        // click on the Transfer details tab
        cy.contains(translation1.Details).should('exist').click();
        
        //check that Transfer details elements are in english
        cy.contains(translation1.Delivery_Adress).should('exist');
        cy.contains(translation1.Adress).should('exist');
        cy.contains(translation1.City).should('exist');
        cy.contains(translation1.Country).should('exist');
        cy.contains(translation1.Contact).should('exist');
        cy.contains(translation1.Phone).should('exist');
        cy.contains(translation1.Email).should('exist');
        cy.contains(translation1.Comments).should('exist');
        
        cy.contains(translation1.Vehicle).should('exist');
        cy.contains(translation1.Brand).should('exist');
        cy.contains(translation1.Registr).should('exist');
        cy.contains(translation1.Chassis).should('exist');
        cy.contains(translation1.Motor).should('exist');

        cy.contains(translation1.Provider).should('exist');

        cy.contains(translation1.topOfpage).should('exist');




    })


})
