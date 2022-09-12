let conta = 0
let coxinha = prompt('Você deseja uma coxinha? \n[S] Para sim \n[N] Para não').toUpperCase()

while (coxinha !== 'S' && coxinha !== 'N') {
    alert('Valor invalido, digite S/N')
    coxinha = prompt('Você deseja uma coxinha? \n[S] Para sim \n[N] Para não').toUpperCase()
}

while (coxinha === 'S') {
    coxinha = prompt('Você deseja mais coxinha? \n[S] Para sim \n[N] Para não').toUpperCase()
    conta += 2.5
    if (coxinha === 'N') {
        console.log(`A sua conta foi de ${conta}`)
    } else if (coxinha !== 'S' && coxinha !== 'N' ){
        alert('Valor invalido, digite S/N')
        coxinha = prompt('Você deseja uma coxinha? \n[S] Para sim \n[N] Para não').toUpperCase()
    }
}


