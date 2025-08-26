'use strict'

import products from './produtos_atualizados.json' with {type: 'json'}

function getInfoProducts(products) {

    const listaProdutos = document.getElementById('listaProdutos')

    const produtos = document.getElementById('produtos')

    const card = document.createElement('div')

    card.classList.add('card')

    const img = document.createElement('img')

    const nome = document.createElement('span')

    nome.classList.add('nome')

    const precoAvaliacao = document.createElement('div')

    precoAvaliacao.classList.add("precoAvaliacao")

    const avaliacao = document.createElement('p')

    const preco = document.createElement('span')

    preco.classList.add('preco')

    const descricao = document.createElement('span')

    descricao.classList.add('descricao')

    const path = `./imgProdutos/${products.imagem}`
    img.src = path

    nome.textContent = products.nome
    preco.textContent = (`R$${products.preco}`)
    descricao.textContent = products.descricao
    avaliacao.textContent = (`Avaliação ${products.classificacao * 2}/10`)
    precoAvaliacao.append(preco, avaliacao)

    card.append(img, nome, precoAvaliacao, descricao)
    produtos.appendChild(card)

    card.addEventListener('click', () => {

        alert(`Você clicou no produto : ${products.nome}`)

    })

}

products.forEach(getInfoProducts)