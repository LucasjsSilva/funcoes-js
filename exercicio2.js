function verifica_maior_idade(idade){
    if (idade < 18){
        return "Você não é maior de idade!!"
    }
    else{
        return "Você é maior de idade!!"
    }
}

console.log(verifica_maior_idade(18));