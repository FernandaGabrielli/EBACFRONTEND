// Classe abstrata para representar um paciente
function Paciente(nome, idade, endereco, especialidade) {
    this.nome = nome;
    this.idade = idade;
    this.endereco = endereco;
    this.especialidade = especialidade;
}

// Classes que herdaram da classe Paciente para representar pacientes
function Cardiologista(nome, idade, endereco) {
    Paciente.call(this, nome, idade, endereco, "Cardiologia");

    this.realizarExameCardiaco = function realizarExameCardiaco() {
        console.log(this.nome + " realizou um exame cardíaco.");
    };
}

function Ortopedista(nome, idade, endereco) {
    Paciente.call(this, nome, idade, endereco, "Ortopedia");

    this.realizarExameOrtopedico = function realizarExameOrtopedico() {
        console.log(this.nome + " realizou um exame ortopédico.");
    };
}

function Dermatologista(nome, idade, endereco) {
    Paciente.call(this, nome, idade, endereco, "Dermatologia");

    this.realizarConsultaDermatologica = function realizarExameOrtopedico() {
        console.log(this.nome + " realizou uma consulta dermatológica.");
    };
}

// Criar três instâncias de objetos representando pacientes com diferentes especialidades
const paciente1 = new Cardiologista("Késsia", 21, "Rua A, 123");
const paciente2 = new Ortopedista("Maria", 22, "Rua B, 456");
const paciente3 = new Dermatologista("Larissa", 20, "Rua C, 789");

console.log(paciente1);
console.log(paciente2);
console.log(paciente3);

paciente1.realizarExameCardiaco();
paciente2.realizarExameOrtopedico();
paciente3.realizarConsultaDermatologica();
