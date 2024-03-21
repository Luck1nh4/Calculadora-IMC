const form = document.getElementById('form')

form.addEventListener('submit', function(event){
    event.preventDefault()

    const weight = document.getElementById('weight').value
    const height = Number(document.getElementById('height').value)

    const imc = (weight / (height * height)).toFixed(2)

    const value = document.getElementById('value')
    let descricao = ''



    document.getElementById('infos').classList.remove('hidden')

    if (imc <= 13){
        descricao = 'Muito Cuidado! Você está muito abaixo do peso. Procure de imediato uma ajuda profissional!'
        value.classList.remove()
        value.classList.add('atencao')
    }else if (imc > 13 && imc < 18.5){
        descricao = 'Cuidado! Você esta abaixo do peso!'
        value.classList.remove('atencao')
        value.classList.add('cuidado')
    } else if(imc >= 18.5 && imc <= 25){
        descricao = 'Parabéns! Você está no peso ideal!'
        value.classList.remove('cuidado')
        value.classList.add('normal')
    } else if(imc > 25 && imc <= 30){
        descricao = 'Abre o Olho! Você está com sobrepeso. Então não exagere!'
        value.classList.remove('normal')
        value.classList.add('cuidado')
    } else if (imc > 30 && imc <=35){
        descricao = 'Opa, muito cuidado! Você está com obesidade moderada. Vamos começar a se cuidar melhor!'
        value.classList.remove('cuidado')
        value.classList.add('alerta')
    } else if (imc > 35 && imc <= 40){
        descricao = 'Liga o Alerta! Você está com obesidade severa. Precisamos procurar uma ajuda profissional rapidamente'
        value.classList.remove('alerta')
        value.classList.add('mcuidado')
    } else {
        descricao = 'ATENÇÃO! É SÉRIO, MUITA ATENÇÃO! Você está com obesidade morbida. Precisamos de uma ajuda profissional URGENTEMENTE!'
        value.classList.remove('mcuidado')
        value.classList.add('atencao')
    }


    value.textContent = imc.replace('.', ',')
    document.getElementById('descricao').textContent = descricao
})