var fim = 0
var assentoValido = 0

var readline = require('readline-sync');
console.log("+------Passagens aereas------+ \n")
console.log("|    1-Comprar passagem       |\n")
console.log("|    2-Consultar voos         |\n")
console.log("|    3-Mapa de assentos       |\n")
console.log("|    4-Emitir Ticket          |\n")
console.log("|    0-Encerrar programa      |\n")
console.log("---------------------------------")
var opcao = readline.question('Escolha uma opcao: ');

if(opcao != 0){
    if (opcao == 1) {
        console.log("+------Passagens aereas------+ \n")
        console.log("Você esta em -> comprar passagem\n")
        var nome = readline.question('Digite seu nome: ');
        var sobrenome = readline.question('Digite seu sobrenome: ');
        var idade = readline.question('Digite sua idade: ');
        var assento = readline.question('Escolha seu assento: ');
        var origem = readline.question('Qual a sua origem? ');
        var destino = readline.question('Qual o seu destino? ');
        assentoValido = false
        while (assentoValido == false) {
            for (let index = 1; index < 13; index++) {
                if (assento == "A" + index || assento == "B" + index) {
                    assentoValido = true
                }
            }
            if (assentoValido == false) {
                console.log("Você digitou errado")
                assento = readline.question("Assento: ")
            }
        }
        
    
        var origemValido = false
    
        while (origemValido == false) {
    
            if (origem == "Presidente Prudente" || origem == "Dracena" || origem == "Curitiba" || origem == "Guarulhos") {
    
                origemValido = true
            }
            if (origemValido == false) {
    
                console.log(" Você digitou errado")
    
                origem = readline.question("  Origem: ")
            }
            }
    
        var destino = (readline.question("Destino: "))
    
        var destinoValido = false
    
        while (destinoValido == false) {
            if (destino == "Dubai" || destino == "Ceara" || destino == "Sao paulo" || destino == "Rio de Janeiro") {
    
                destinoValido = true
    
            }
            if (destinoValido == false) {
    
                console.log("Você digitou errado")
    
                destino = readline.question("Destino: ")
    
            }
        }
    
        console.log("+------Passagens aereas------+ \n")
        console.log("Você esta em -> comprar passagem\n")
        console.log("*Resumo de compra*")
        console.log("Cliente: " + nome + sobrenome)
        console.log("Idade: " + idade)
        console.log("Assento: " + assento)
        console.log("Voo: " + origem + " x " + destino)
        console.log("Status do voo ")
        console.log("Valor: R$ 4.000,00")
    }
    var continua = (readline.question("Pressione a tecla enter para continuar"))
    
    console.log("+------Passagens aereas------+ \n")
    console.log("|    1-Comprar passagem       |\n")
    console.log("|    2-Consultar voos         |\n")
    console.log("|    3-Mapa de assentos       |\n")
    console.log("|    4-Emitir Ticket          |\n")
    console.log("|    0-Encerrar programa      |\n")
    console.log("---------------------------------")
    var opcao = readline.question('Escolha uma opcao: ');
    
    if (opcao == 2) {
        console.log("+------Passagens aereas------+ \n")
        console.log("Você esta em -> Consultas de voo\n\n")
        console.log("Origem      x          Destino")
        console.log("--------------------------------\n")
        console.log("Presidente Prudente     x   Dubai")
        console.log("Dracena                 x   Ceara")
        console.log("Curitiba                x   São Paulo")
        console.log("Guarulhos               x   Rio de Janeiro")
        console.log("-------------------------------------------")
    
        readline.question("Escolha seu destino")
    }
    
    
    if (opcao == 3) {
        console.log("+------Passagens aereas------+ \n")
        console.log("Você esta em -> Mapas de asento\n")
        console.log("-------------------------------\n")
        var assentoA = ""
        var assentoB = ""
       
        for(var poltrona = 1;poltrona < 13; poltrona ++){

           var assentoVezA = "A"+poltrona
           var assentoVezB = "B"+poltrona

           if( assentoVezA == assento){
                assentoA += " X "
                assentoB += assentoVezB + " "
           }
           else if(assentoVezB == assento){
                assentoB += " X "
                assentoA += assentoVezA + " "
           }
           else{
                assentoA += assentoVezA + " "
                assentoB += assentoVezB + " "
           }
        }    
        console.log(assentoA)
        console.log(assentoB)
        var continua = (readline.question("Pressione a tecla enter para continuar"))
}
   
    if (opcao == 4) {
        
        console.log("+----------------- Passagens Aéreas -----------------+")
        console.log("  Você está em -> Emitir Tickets                    ")
        console.log("******************************************************")
        console.log("* Obrigado por viajar conosco!                       *")
        console.log("* Cliente: " + nome + sobrenome)
        console.log("* Idade: " + idade)
        console.log("Assento " + assentoValido)
        console.log("* Origem/Destino>" + origem + destino)
        console.log("* Status do voo: Confirmado                          *")
        console.log("*                                                    *")
        console.log("******************************************************")

    }
}

