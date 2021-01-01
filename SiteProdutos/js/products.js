/**
	Carregamento dos objectos JSON 
**/
var local_array = [];

$.ajax({
    dataType: "json",
    url: './json/products.json',
    success: function(b) {
        $.each(b, function(key, val) {
            $('#mainProducts').append('<div class="col-3"><img src="' + val['img'] + '"><div class="modelo-smart"><h3>' + val['model'] + '</h3><div class="prod-details"><button onclick="showData(this)" data-id="' + val['id'] + '" >Details</button><div></div>');
        });
        local_array = b;
    }
});

/**
	Mostra os dados de cada objecto JSON, que está "dentro de cada botão" no evento definido acima
**/
function showData(object) {
    var id = $(object).data('id');

    $('#modalMarca').html(local_array[id]['brand']);

    $('#modalModelo').html(local_array[id]['model']);

    $('#modalProcessador').html(local_array[id]['processor']);

    $('#modalCamaraTraseira').html(local_array[id]['rear-camera']);

    $('#modalCamaraFrontal').html(local_array[id]['front-camera']);

    $('#modalMemoriaInterna').html(local_array[id]['internal-storage']);

    $('#modalMemoriaRAM').html(local_array[id]['RAM']);

    $('#modalEcra').html(local_array[id]['display']);

    $('#modalPreco').html(local_array[id]['price']);

    $('#modalImagem').attr('src', local_array[id]['img']);

    //Mostra o modal após o carregamento dos dados;
    $('#id01').css({
        "display": "block"
    })
    return false;
}