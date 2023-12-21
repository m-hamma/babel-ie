console.log("Test de Babel");

["toto",  "tutu",  'titi'].map((item)  =>  {
    let numberArray = [1,  2,  3,  4];

    numberArray.find((number)  => number ===  4);
    console.log(item,  ...numberArray);
});