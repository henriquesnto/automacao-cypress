/// <reference types="cypress" />

context('Funcionalidade Login', () =>{

   it('Deve fazer login com sucesso', ()=>{
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta')
    

   })
   
   it('Deve exibir uma mensagem de erro ao inserir usuario ou senha inválidos', () =>{

   })

})