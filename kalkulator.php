<?php

error_reporting(0);

/*
osszsuly=(vastagsag*szelesseg*hosszusag*fajsuly)/1000000;
osszsuly=  —> kerekíteni 2 tizedesre
osszsuly = $osszsuly * db;
*/


$fajsulyok = [78000, 52000, 36000];   // acél, aluminum, bádog
$fajsuly = $fajsulyok[$_REQUEST['termek_tipus']];

function adatAtalakito($ertek)
{
    // Dobjuk el a szóközöket
    $ertek = str_replace(' ', '', $ertek);
    // ha van benne , abból csináljunk .-ot
    $ertek = str_replace(',', '.', $ertek);
    // ha mm-ben van, akkor a megadott adatból kivesszük a stringet
    if (strpos($ertek, 'mm')) {
        return str_replace('mm', '', $ertek);
    }
    // ha cm-ben van, akkor megadott adatból kivesszük a stringet és * 10-el
    if (strpos($ertek, 'cm')) {
        return str_replace('cm', '', $ertek) * 10;
    }
    // ha méterben van, akkor  megadott adatból kivesszük a stringet és * 1000-el
    if (strpos($ertek, 'm')) {
        return str_replace('m', '', $ertek) * 1000;
    }
    return $ertek;
}

/*
// 2 mm -> 2 
var_dump(adatAtalakito('2 mm') == '2');
var_dump(adatAtalakito('2mm') == '2');
// 2,1 mm -> 2.1
var_dump(adatAtalakito('2,1 mm') == '2.1');
// 25 mm -> 25
var_dump(adatAtalakito('25 mm') == '25');
// 2,15 cm -> 21.5
var_dump(adatAtalakito('2,15 cm') == '21.5');
// 1,4 m -> 1400
var_dump(adatAtalakito('1,4 m') == '1400');
*/

$osszsuly = adatAtalakito($_REQUEST['vastagsag']) * adatAtalakito($_REQUEST['szelesseg']) * adatAtalakito($_REQUEST['hosszusag']) * $fajsuly / 100000;

//$osszsuly = round($osszsuly, 2);

$osszsuly = $osszsuly * $_REQUEST['mennyiseg'];

header('Content-Type: application/json');
if ($osszsuly <= 0) {
    echo json_encode(['error' =>  'Valamelyik megadott adat hibás!']);
} else {
    echo json_encode(['osszsuly' =>  $osszsuly]);
}


//var_dump($_REQUEST ['termek_tipus']);       // változó tipusa string, változó hosszát 1, változó értéke 2



/*

index.html -> select : 0,1,2
itt php -> tömb :      0,1,2        // $_REQUEST ['termek_tipus']

*/
