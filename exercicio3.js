function aplicar_desconto(valor, porcentagem){
    return valor - (valor * (porcentagem/100))
}

function mensalidade_total(valor, prestacoes){
    return valor * prestacoes
}

function aplica_juros(valor, porcentagem){
    return valor + (valor * (porcentagem/100))
}

//função main invocada imediatamente somente uma vez:

(function (preco_etiqueta, forma_de_pagamento, numero_prestacoes) {if (forma_de_pagamento === 1){
    console.log('Voce vai pagar: R$' + aplicar_desconto(preco_etiqueta, 10))
}else if (forma_de_pagamento === 2){
    console.log('Voce vai pagar: R$' + aplicar_desconto(preco_etiqueta, 15))
}else if (forma_de_pagamento === 3){
    if (numero_prestacoes === 2){
        console.log('Voce vai pagar: R$' + mensalidade_total(preco_etiqueta, numero_prestacoes))
    }else if(numero_prestacoes > 2){
        console.log('Voce vai pagar: R$' + mensalidade_total(aplica_juros(preco_etiqueta,10), numero_prestacoes))
    }}
})(95, 3, 2) 