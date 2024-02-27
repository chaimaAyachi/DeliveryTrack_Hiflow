describe('Download documents', () => {
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

    it('Télécharge un document via une API', () => {
        cy.contains(translation.Documents).click();
        cy.get('.documentLink_ui-icon__mBnza').click();



        // Interceptez la requête de téléchargement de l'API
        cy.intercept('GET', 'https://test-api.expedicar.com/', (req) => {
          req.reply(statusCode= 200)
        }).as('document');

        });
      });