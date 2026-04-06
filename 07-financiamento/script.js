'use strict'

const calcularSimulacao = () => {
    const valorTotal = Number(document.getElementById('valorTotal').value)
    const taxaJuros = Number(document.getElementById('taxaJuros').value)
    const numParcelas = Number(document.getElementById('parcelas').value)
    const tbody = document.getElementById('tabelaResultado')

    if (!valorTotal || !taxaJuros || !numParcelas) {
        alert("Preencha todos os campos corretamente!")
        return
    }

    const parcelaFixa = valorTotal / numParcelas

    let saldoDevedor = valorTotal

    tbody.replaceChildren()

    for (let mes = 1; mes <= numParcelas; mes++) {
        
        const jurosDoMes = saldoDevedor * (taxaJuros / 100)
        const totalDoMes = parcelaFixa + jurosDoMes

        saldoDevedor = saldoDevedor - parcelaFixa

        const tr = document.createElement('tr')

        const tdMes = document.createElement('td')
        tdMes.textContent = mes

        const tdParcela = document.createElement('td')
        tdParcela.textContent = `R$ ${parcelaFixa.toFixed(2)}`

        const tdJuros = document.createElement('td')
        tdJuros.textContent = `R$ ${jurosDoMes.toFixed(2)}`
        tdJuros.style.color = "#ff4d4d" 

        const tdTotal = document.createElement('td')
        tdTotal.textContent = `R$ ${totalDoMes.toFixed(2)}`
        tdTotal.style.color = "#ffcc00" 
        tdTotal.style.fontWeight = "bold"

        const tdSaldo = document.createElement('td')
        tdSaldo.textContent = `R$ ${Math.abs(saldoDevedor).toFixed(2)}`

        tr.replaceChildren(tdMes, tdParcela, tdJuros, tdTotal, tdSaldo)
        
        tbody.appendChild(tr)
    }
}

document.getElementById('btnSimular').addEventListener('click', calcularSimulacao)