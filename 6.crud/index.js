const botao = document.querySelector("#botaoAdicionar");
botao.addEventListener("click", (e) => {
    e.preventDefault()
    let titulo = document.querySelector("#titulo").value
    let pontos = document.querySelector("#pontos").value

    let card = document.createElement("div")
    document.querySelector("#tarefas").appendChild(card)
    card.classList.add("card")

    let h2 = document.createElement("h2")
    h2.textContent = titulo

    let span = document.createElement("span")
    span.textContent = pontos + " pontos"

    let meter = document.createElement("meter")
    meter.value = pontos
    meter.min = 0
    meter.max = 100

    let botaoFinalizar = document.createElement("button")
    botaoFinalizar.classList.add("botao")
    botaoFinalizar.textContent = "finalizar"

    card.appendChild(h2)
    card.appendChild(span)
    card.appendChild(meter)
    card.appendChild(botaoFinalizar)

    document.querySelector("#tarefas").appendChild(card)

    console.log(titulo)
    console.log(pontos)
})