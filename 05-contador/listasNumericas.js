'use strict'

export const criarListaNumeros = (quantidade) => {
    let listaNumeros = []
    for (let i = 1; i <= quantidade; i++) {
        listaNumeros.push(i)
    }
    return listaNumeros
}

export const criarListaPares = (quantidade) => {
    let listaNumeros = []
    let par = 2

    for (let i = 1; i <= quantidade; i++) {
        listaNumeros.push(par)
        par += 2
    }
    return listaNumeros
}

export const criarListaImpares = (quantidade) => {
    let listaNumeros = []
    let par = 1

    for (let i = 1; i <= quantidade; i++) {
        listaNumeros.push(par)
        par += 2
    }
    return listaNumeros
}

export const criarListaMult5 = (quantidade) => {
    let listaNumeros = []
    let multiplicador = 5

    for (let i = 1; i <= quantidade; i++) {
        listaNumeros.push(multiplicador)
        multiplicador += 5
    }
    return listaNumeros
}

export const criarListaPotencia = (quantidade) => {
    let listaNumeros = []

    for (let i = 0; i <= quantidade; i++) {
        listaNumeros.push(2 ** i)
    }
    return listaNumeros
}