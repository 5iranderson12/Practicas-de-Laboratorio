console.log("Funcion para conversion de formatos de fecha");

ConversorFecha("2024-10-12");

function ConversorFecha(fecha) {
    // CONVERTIR EL PARAMETRO A TIPO DATE
    const FechaFormato = new Date(fecha);

    // VALIDAR SI LA FECHA ES VALIDA
    if (isNaN(FechaFormato)) {
        console.log("Fecha no es válida");
        return;
    }

    // Imprimir los diversos formatos
    console.log("Fecha sin modificar : " + fecha); // Fecha original
    console.log("Fecha con formato toString : " + FechaFormato.toString()); // formato estándar
    console.log("Fecha en formato local : " + FechaFormato.toLocaleString()); // formato de fecha local
    console.log("Fecha solo con datos : " + FechaFormato.toDateString()); // formato solo de fecha
    console.log("Solamente la hora : " + FechaFormato.toTimeString()); // formato de la hora
}
