$("#calcular").click(function() {
    var resultado;

    var numA = parseInt($("#num-a").val());
    var numB = parseInt($("#num-b").val());

    switch ($("#operator").val()){
        case "+":
            resultado = numA + numB;    
            break;
        case "-":
            resultado = numA - numB;
            break;
        case "*":
            resultado = numA * numB;
            break;
        case "/":
            resultado = numA / numB;
            break;
    }

    $("#resultado").html(resultado);

});
