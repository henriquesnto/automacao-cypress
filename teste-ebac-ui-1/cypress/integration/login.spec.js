/// <reference types="cypress" />

context('Funcionalidade Login', () =>{
   
   it('Deve fazer login com sucesso', ()=>{
      cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
      cy.get('#username').type('aluno_ebac@teste.com')
      cy.get('#password').type('teste@teste.com')
      cy.get('.woocommerce-form > .button').click()
      cy.get('a > .hidden-xs').should('contain','Welcome aluno_ebac !')

   })
   
   it('Deve exibir uma mensagem de erro ao inserir usuario ou senha inválidos', () =>{
      cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
      cy.get('#username').type('ebac@teste.com')
      cy.get('#password').type('teste@teste.com')
      cy.get('.woocommerce-form > .button').click()

      cy.get('.woocommerce-error > li').should('contain','Endereço de e-mail desconhecido.')
   })

   it('Deve exibir uma mensagem de erro ao inserir senha inválidos', () =>{
      cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
      cy.get('#username').type('aluno_ebac@teste.com')
      cy.get('#password').type('teste@teste')
      cy.get('.woocommerce-form > .button').click()

      cy.get('.woocommerce-error > li').should('contain','Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta.')
   })
   

})