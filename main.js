$(document).ready(function() {
    const listaTarefas = $('ul');

    $('#lista-tarefas').submit(function(e) {
        e.preventDefault();

        const inputNomeDaTarefa = $('#NomeDaTarefa').val();  // Adicione o # aqui

        if (inputNomeDaTarefa) {
            const novaTarefa = `<li>${inputNomeDaTarefa}</li>`;
            listaTarefas.append(novaTarefa);

            // Limpa o campo de entrada
            $('#NomeDaTarefa').val('');  // Adicione o # aqui
        }
    });

    // Adiciona o evento de clicar para aplicar a classe 'finalizada'
    $('ul').on('click', 'li', function() {
        $(this).toggleClass('finalizada');
    });
});
