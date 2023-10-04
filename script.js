// Classe que representa um herói
class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;   // Variável para armazenar o nome do herói
      this.idade = idade; // Variável para armazenar a idade do herói
      this.tipo = tipo;   // Variável para armazenar o tipo do herói (mago, guerreiro, monge, ninja)
    }
  
    // Método para realizar o ataque
    atacar() {
      let ataque = ""; // Variável para armazenar a descrição do ataque
  
      // Estrutura de decisão (switch...case) para determinar o ataque com base no tipo do herói
      switch (this.tipo) {
        case "mago":
          ataque = " magia"; // Ataque do mago
          break;
        case "guerreiro":
          ataque = " espada"; // Ataque do guerreiro
          break;
        case "monge":
          ataque = " artes marciais"; // Ataque do monge
          break;
        case "ninja":
          ataque = " shuriken"; // Ataque do ninja
          break;
        default:
          ataque = "não possui ataque definido"; // Valor padrão caso o tipo não seja reconhecido
      }
      // Imprime a mensagem do ataque
      console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Exemplo de uso da classe Heroi
  const heroi1 = new Heroi("Herói 1", 30, "mago"); // Criação de uma instância de herói (objeto)
  const heroi2 = new Heroi("Herói 2", 25, "guerreiro"); // Criação de outra instância de herói
  
  heroi1.atacar(); // Chamada do método de ataque para o primeiro herói
  heroi2.atacar(); // Chamada do método de ataque para o segundo herói
  