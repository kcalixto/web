const precoEtanol = Number(prompt("Digite o preço do etanol: "))
const precoGasolina = Number(prompt("Digite o preço da gasolina: "))

function verificaCombustivel(precoEtanol, gasolina) {
    const precoGasolinaAdaptado = gasolina * 0.70

    // return (precoEtanol < precoGasolinaAdaptado) ?
    //     "Etanol é o mais vantajoso" :
    //     "Gasolina é o mais vantajoso"
    return `${precoEtanol < precoGasolinaAdaptado ? `Gasolina` : `Etanol`} é o mais vantajoso`
}

alert(verificaCombustivel(precoEtanol, precoGasolina))