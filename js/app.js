const btn = document.getElementById('advice-btn')
const adviceNumero = document.querySelector('.advice-Numero')
const adviceDescricao = document.querySelector('#advice-texto-aleatorio')

btn.addEventListener('click', () => {
    geradorDeFraseAleatorio()
})

async function geradorDeFraseAleatorio() {
    const url = await fetch("https://api.adviceslip.com/advice")
    const adviceContent = await url.json()
    const adviceId = `Advice #${adviceContent.slip.id}`
    const adviceTexto = `${adviceContent.slip.advice}`

    adviceNumero.innerHTML = adviceId
    adviceDescricao.innerHTML = adviceTexto
}
