'use strict'

import products from './produtos_atualizados.json' with {type: 'json'} 

function getInfoProducts(products){

    const listaProdutos = document.getElementById('listaProdutos')
    const produtos = document.getElementById('produtos')
    const card = document.createElement('div')
    card.classList.add('card')
    const img = document.createElement('img')
    const nome = document.createElement('span')
    nome.classList.add('nome')
    const preco = document.createElement('span')
    preco.classList.add('preco')
    const descricao = document.createElement('span')
    descricao.classList.add('descricao')

    const path = `./imgProdutos/${products.imagem}`
    img.src = path

    nome.textContent = products.nome
    preco.textContent = (`R$${products.preco}`)
    descricao.textContent = products.descricao

    card.append(img, nome, preco, descricao)
    produtos.appendChild(card)

    console.log("teste")
}

products.forEach(getInfoProducts)