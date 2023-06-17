$(document).ready(function() {
    $('#carousel-images').slick({
        autoplay: true
    });

    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();
    });

    $('#telefone').mask('(00) 00000-0000');

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');

        const nome_veiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nome_veiculo);

        $('nav').slideUp();

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    });

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            veiculoInteresse: {
                required: false
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: '<span class="error-message">Por favor, insira o seu nome</span>',
            telefone: '<span class="error-message">Por favor, insira o seu telefone</span>',
            email: '<span class="error-message">Por favor, insira o seu email</span>',
            mensagem: '<span class="error-message">Por favor, insira sua mensagem</span>'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let campos_incorretos = validador.numberOfInvalids();
            if (campos_incorretos) {
                alert(`Existe(m) ${campos_incorretos} campo(s) incorreto(s)`);
            }
        }
    });
})