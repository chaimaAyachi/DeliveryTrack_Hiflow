
describe('Check transfer Details tab', () => {

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

      

    it ('Mandatory elements', () => {
        cy.contains(translation.Details).should('exist').click();
        cy.contains(translation.Delivery_Adress).should('exist').click();
        cy.get('.break-words').should('exist').invoke('text') .then(contenu => {
        expect(contenu.trim()).to.not.be.empty; // Vérifie que le contenu n'est pas vide
        expect(contenu.trim().toLowerCase()).to.not.equal('non renseigné');
        })

    });
        
     it ('Optional elements', () => {
        
        cy.contains(translation.Details).should('exist').click();
        cy.contains(translation.Delivery_Adress).should('exist').click();
        cy.get('.break-words').should('exist').invoke('text').then(Optcontent => {
        // Vérification du texte
        expect(Optcontent.trim()).to.satisfy(content => {
          // Vérifie si le contenu est "Non renseigné" ou une autre chaîne de caractères
          return content === "Non renseigné" || content !== "";
        });
      });
    })
    
        })