// Una función que recibe un array de JS y lo transforma en HTML
function rellenar(array) {

    // Variable donde mostraremos el HTML generado
    var cardsToShow = '';


    // JQuery.each es como un for; en vez de la clásica 'i' le pasas
    // el parametro a la funcion que se llama 'index', y en 'value' se encuentra
    // el valor del registro (en este caso nombre, edad y ciudad)
    jQuery.each(array, function (index, value) {
        console.log(index, value.name)

        // Por cada registro en el array se agrega uno de estos
        cardsToShow += '<div id=card' + index + ' class="col s12 m6">' +
            '                <div class="card animated fadeInUp blue-grey darken-1">' +
            '                    <div class="card-content white-text">' +
            '                        <span class="card-title">' + value.name + '</span>' +
            '                        <p>' + value.city + '</p>' +
            '                        <p>' + value.age + '</p>' +
            '                    </div>' +
            '                </div>' +
            '            </div>';
    })

    // Al terminar el ciclo, insertamos el HTML generado con el metodo .html
    // Se inserta en el contenedor con el id 'cards'
    $('#cards').html(cardsToShow);
}

// La función que manda a llamar mi PHP
function getData() {
    $.ajax({
        type: 'POST',
        url: 'controllers/data.php',
        //Response es la respuesta de mi servicio PHP, en este caso, el 'echo' que termino mandando
        success: function (response) {
            console.log(response);

            // Como el repsonse es un JSON, antes de manejarlo ocupo transformalo en un array de JavaScript
            var myPerson = JSON.parse(response);

            console.log('myPerson: ', myPerson[0]);
            console.log('myPerson.name: ', myPerson[0].name);

            // Sabiendo que todo salió bien, mando mi array ya convertido a una fucnión que me genere código HTML para insertar en la página
            rellenar(myPerson)
        }
    });
}
