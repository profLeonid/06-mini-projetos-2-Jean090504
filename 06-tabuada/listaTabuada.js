'use strict'

import { adicao, subtracao, multiplicacao, divisao } from "./tabuada.js"

const criarLinha = (n, resAdicao, resSubtracao, resMulti, resDiv) => {
    const tabela = document.getElementById('tabela')
    const tr = document.createElement('tr')

    //N
    const tdN = document.createElement('td')
    tdN.textContent = n

    //Adição
    const tdAdicao = document.createElement('td')
    tdAdicao.textContent = resAdicao

    //Subtração
    const tdSubtracao = document.createElement('td')
    tdSubtracao.textContent = resSubtracao
    if (resSubtracao < 0) {
        tdSubtracao.style.color = 'red'
        tdSubtracao.style.fontWeight = 'bold'
    }

    //Multiplicação
    const tdMulti = document.createElement('td')
    tdMulti.textContent = resMulti

    //Divisão
    const tdDiv = document.createElement('td')
    tdDiv.textContent = resDiv

    tr.replaceChildren(tdN, tdAdicao, tdSubtracao, tdMulti, tdDiv)
    tabela.appendChild(tr)
}

const handleClick = () => {
    const campoNumero = document.getElementById('numero')
    const numeroDigitado = Number(campoNumero.value)

    const tabela = document.getElementById('tabela')
    tabela.replaceChildren()

    if (campoNumero.value === "") return

    // Passo 6: Loop de 1 a 10
    for (let i = 1; i <= 10; i++) {
        const rA = adicao(numeroDigitado, i)
        const rS = subtracao(numeroDigitado, i)
        const rM = multiplicacao(numeroDigitado, i)
        const rD = divisao(numeroDigitado, i)

        criarLinha(i, rA, rS, rM, rD)
    }
}

// Passo 3: Conectar ao botão
document.getElementById('gerarTabuada').addEventListener('click', handleClick)