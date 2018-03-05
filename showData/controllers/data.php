<?php
// Más o menos algo como esto se hace para cargar datos desde PHP y mostrarlos en la página.
// En internet puedes encontrar la parte divertida de todo esto; que es DE QUÉ MANERA PASAR
// ESTO DE UN EJEMPLO FIJO A UNA SHIT DINÁMICA, es decir, que ya no cargue los dato de 
// Felipe y de Jhon, sino que se conecte a una base de datos, ejecute una conulta y ponga 
// el resultado de dicha consulta en un array

// Objeto en PHP
$person = new \stdClass();
$person->id = 1;
$person->name = "John";
$person->age = 30;
$person->city = "New York";

// Otro objeto en PHP
$person2 = new \stdClass();
$person2->id = 2;
$person2->name = "Felipe";
$person2->age = 30;
$person2->city = "New York";

// Junto los dos objetos y los convierto en un array
$arrayToConvert = array( $person, $person2);

// Convierto el array a formato JSON para poder transportarlo más rico entre el PHP
// Y el JavaScript
$myJSON = json_encode($arrayToConvert);

// Mando la información al JS
echo $myJSON;
?>