// Definição da classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        // Determinando o ataque baseado no tipo do herói
        const ataques = {
            mago: "magia",
            guerreiro: "espada",
            monge: "artes marciais",
            ninja: "shuriken",
        };

        const ataque = ataques[this.tipo.toLowerCase()] || "ataque desconhecido";
        console.log(`O ${this.tipo} atacou usando ${ataque}!`);
    }
}

// Exemplos de utilização
const mago = new Heroi("Gandalf", 150, "mago");
const guerreiro = new Heroi("Aragorn", 87, "guerreiro");
const monge = new Heroi("Shaolin", 30, "monge");
const ninja = new Heroi("Naruto", 16, "ninja");

// Testando os ataques
mago.atacar();        // O mago atacou usando magia!
guerreiro.atacar();   // O guerreiro atacou usando espada!
monge.atacar();       // O monge atacou usando artes marciais!
ninja.atacar();       // O ninja atacou usando shuriken!
