// main.js
$(document).ready(function() {
    const listaTarefas = $('ul');

    $('#lista-tarefas').submit(function(e) {
        e.preventDefault();

        const inputNomeDaTarefa = $('#Nome-Da-Tarefa').val();

        if (inputNomeDaTarefa) {
            const novaTarefa = `<li>${inputNomeDaTarefa}</li>`;
            listaTarefas.append(novaTarefa);

            // Limpa o campo de entrada
            $('#Nome-Da-Tarefa').val('');

            // Adiciona o evento de clicar para aplicar a classe 'finalizada'
            $('li').click(function() {
                $(this).toggleClass('finalizada');
            });
        }
    });
});
