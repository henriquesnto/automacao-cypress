/// <reference types="cypress" />
require ( 'cypress-xpath' ) ;

context('Funcionalidade Login', () =>{

   beforeEach(() => {
      cy.visit('https://homologomnibeesacademybee2pay.niara.tech/login')
   });


   it('Deve fazer login com sucesso', ()=>{
      cy.wait(1000)
      cy.xpath("//input[@type='text']").type('teste.administrador')
      cy.wait(1000)
      cy.xpath("//input[@type='password']").type('Admin123')
      cy.get('.sc-wAnfg > .MuiButton-contained').click()
      cy.wait(1000)


   })



})