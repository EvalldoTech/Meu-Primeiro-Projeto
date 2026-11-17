// Lista de heróis com seus respectivos nomes e quantidades de XP
let herois = [
    { nome: "Pikachu", xp: 6500 },
    { nome: "Articuno", xp: 9800 },
    { nome: "Zapdosf", xp: 7500 },
    { nome: "Mewtwo", xp: 12500 }
];

// Laço de repetição para testar todos os heróis da lista um por um
for (let i = 0; i < herois.length; i++) {
let heroi = herois[i].nome;
let xp = herois[i].xp;

    console.log("--------------------------------------");
    console.log("Analisando o herói: " + heroi + " (XP: " + xp + ")");

// Se o XP for menor ou igual a 1000, pikachu é nivel Ferro.
if (xp <= 1000) {
  console.log("O nivel do " + heroi + " é Ferro");
  
    // Se o XP for entre 1001 e 2000, pikachu é nivel Bronze.
}  else if (xp >= 1001 && xp <= 2000) {
   console.log("O nivel do " + heroi + " é Bronze");

   // Se o XP for entre 2001 e 5000, pikachu é nivel Prata.
} else if (xp >= 2001 && xp <= 5000) {
    console.log("O nivel do " + heroi + " é Prata");

      // Se o XP for entre 6001 e 7000, pikachu é nivel Ouro.
} else if (xp >= 6001 && xp <= 7000) {
   console.log("O nivel do " + heroi + " é Ouro");

// Se o XP for entre 7001 e 8000, pikachu é nivel Platina.
} else if (xp >= 7001 && xp <= 8000) {
    console.log("O nivel do " + heroi + " é Platina");

// Se o XP for entre 8001 e 9000, pikachu é nivel Ascendente.
}else if (xp >= 8001 && xp <= 9000) {
    console.log("O nivel do " + heroi + " é Ascendente");

// Se o XP for entre 9001 e 10000, pikachu é nivel Imortal.
}else if (xp >= 9001 && xp <= 10000) {
    console.log("O nivel do " + heroi + " é Imortal");

    // Se o XP for maior ou igual a 10001, pikachu é nivel Lendário.
}else if (xp >= 10001) {
    console.log("O nivel do " + heroi + " é Lendário");
} 
}
//confesso achei muito dificil e tive que pesquisar na internet, 
// mas consegui fazer o que eu queria, e estou muito feliz com o resultado.