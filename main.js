// --- Definição da Classe (Molde para criar heróis) ---
class Heroi {
    // O Construtor é chamado quando usamos 'new Heroi()'
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método (Função) que executa a ação de atacar
    atacar() {
        let ataque = "";

        // Estrutura de decisão para definir o tipo de ataque
        // Usamos toLowerCase() para garantir que funcione mesmo se escrever "Mago" ou "mago"
        switch (this.tipo.toLowerCase()) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "um ataque desconhecido";
        }

        // Saída esperada
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

// --- Execução e Testes ---

// Criando uma lista (array) de objetos baseados na classe Heroi
// Isso nos permite testar todos os cenários usando um Laço de Repetição
let grupoDeHerois = [
    new Heroi("Merlin", 150, "mago"),
    new Heroi("Arthur", 35, "guerreiro"),
    new Heroi("Lee", 25, "monge"),
    new Heroi("Hanzo", 30, "ninja")
];

// Laço de repetição para fazer todos atacarem
for (let i = 0; i < grupoDeHerois.length; i++) {
    grupoDeHerois[i].atacar();
}
