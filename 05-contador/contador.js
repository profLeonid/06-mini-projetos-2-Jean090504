'use strict'

import { criarListaImpares, 
    criarListaMult5, 
    criarListaNumeros, 
    criarListaPares, 
    criarListaPotencia
} from "./listasNumericas.js"

const gerarNumeros = document.getElementById('gerarNumeros')

const criarLinha = (numero, par, impar, multi5, potencia2) => {
    const tabela = document.getElementById('tabela')

    const tr = document.createElement('tr')

    const tdNumeros = document.createElement('td')
    tdNumeros.textContent = numero

    const tdPares = document.createElement('td')
    tdPares.textContent = par

    const tdImpares = document.createElement('td')
    tdImpares.textContent = impar

    const tdMultiplicador = document.createElement('td')
    tdMultiplicador.textContent = multi5
    
    const tdPotencia = document.createElement('td')
    tdPotencia.textContent = potencia2

    tr.replaceChildren(tdNumeros, 
        tdPares,
        tdImpares, 
        tdMultiplicador, 
        tdPotencia)

    tabela.appendChild(tr)
}

const handleClick = () => {
    const quantidade = Number(document.getElementById('quantidade').value)

    const listaNumeros = criarListaNumeros(quantidade)
    const listaPares = criarListaPares(quantidade)
    const listaImpares = criarListaImpares(quantidade)
    const listaMultiplicador = criarListaMult5(quantidade)
    const listaPotencia = criarListaPotencia(quantidade)

    document.getElementById('tabela').replaceChildren()

    for (let i = 0; i < quantidade;i++){
        criarLinha(listaNumeros[i],
            listaPares [i], 
            listaImpares [i], 
            listaMultiplicador [i],  
            listaPotencia [i] )
    }
}
       
1       
gerarNumeros.addEventListener('click', handleClick)