document.addEventListener('DOMContentLoaded', function () {
    const header = document.getElementById('myHeader');

    // Adiciona um ouvinte de evento de clique no header
    header.addEventListener('click', function () {
        // Alternar a classe 'open' no header
        header.classList.toggle('open');
    });
});
