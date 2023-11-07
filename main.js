const alunos = [
    { nome: "Kessia", nota: 9.0 },
    { nome: "Fernanda", nota: 7.0 },
    { nome: "Camila", nota: 5.5 },
    { nome: "Carol", nota: 8.5 },
    { nome: "Zilda", nota: 9.5 },
    { nome: "Maria", nota: 6.0 },
    { nome: "Demi", nota: 7.0 },
];

function alunosAprovados(alunos){
    return alunos.filter(aluno => aluno.nota >= 6)
}

console.log(alunosAprovados(alunos));