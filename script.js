/* FUNÇÃO ABRIR */

$('#containFaq-1').click(function(){
    $('#repostaFaq-1').css('display','block')
    $('#containFaq-1 .hr1').css('display','block')
});

$('#containFaq-2').click(function(){
    $('#repostaFaq-2').css('display','block')
    $('#containFaq-2 .hr2').css('display','block')
});

$('#containFaq-3').click(function(){
    $('#repostaFaq-3').css('display','block')
    $('#containFaq-3 .hr3').css('display','block')
});

//////////////////////////////////////////////

/* FUNÇÃO PRA FECHAR */

$('#fecharFaq-1').click(function(){
    $('#repostaFaq-1').fadeOut()
    $('#containFaq-1 .hr1').fadeOut()
});

$('#fecharFaq-2').click(function(){
    $('#repostaFaq-2').fadeOut()
    $('#containFaq-2 .hr2').fadeOut()
});

$('#fecharFaq-3').click(function(){
    $('#repostaFaq-3').fadeOut()
    $('#containFaq-3 .hr3').fadeOut()
});