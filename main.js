$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-header-fechar').click(function() {
        $('form').slideUp();
    })
    
    $('form').on('submit', function(e) {
        e.preventDefault();
        const textoNovaTarefa = $('#texto-nova-tarefa').val();
        const novoItem = $('<li></li>');
        $('<li></li>').text(textoNovaTarefa).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('#texto-nova-tarefa').val('');
        $('ul').on('click', 'li', function() {
        $(this).toggleClass('concluida');
        })
    })
})    
