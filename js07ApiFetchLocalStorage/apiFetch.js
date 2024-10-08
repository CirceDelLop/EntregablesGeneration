console.log("");
/*Las promesa es un patrón asincrónico que se utiliza para manejar operaciones asíncronas. Las promesas permite realizar tareas asíncronas y manejar los resultados (éxito o error) en un momento posterior. Las promesas tiene 3 estados:
1.- Pending: El estado inicial de una promesa antes de que se resuelva o rechace
2.- Resolved: La promesa se resuelve con un valor
3.- Rejected: La promesa se rechaza con una razón. Resolve y reject son funciones de callback.
Para crear una promesa se usa el constructor de la clase Promise. Para manejar una promesa se usa los métodos:
1.- then() : Se ejecuta cuando la promesa se resuelve correctamente.
2.- catch() :  Se ejecuta cuando la promesa es rechazada (error).
3.- finally() : Se ejecuta al finalizar, independientemente del resultado.
Las promesas se utilizan mucho en operaciones como solicitudes HTTP con fetch, donde no se sabe cuándo se recibirán los datos del servidor.
La API Fetch nos ayuda a acceder y manipular peticiones HTTP ( GET, POST, PUT, DELETE).
 Sintaxis:
    fetch(resource, options)*/

const datosDelProducto=()=>
{
    const url="./assets/json/legoChef.json";

    const callbackParaThen=(valorDeResolved)=>
    {
        console.log(valorDeResolved);
        valorDeResolved.json()//Devuelve una promesa de json a object
            .then(producto=>console.log(producto))
            .catch(error=>console.log(error))
    }

    const callbackParaError=(valorDeRejected)=>
    {
        console.log(valorDeRejected);
    }

    const callbackParaFinally=()=>
    {
        console.log("He terminado de manejar la api Fetch");
    }
    //fetch(url).then().catch().finally();//finally es opcional ponerlo
    fetch(url)
        .then(callbackParaThen)
        .catch(callbackParaError)
        .finally(callbackParaFinally);
}

datosDelProducto();
/*JSON (JavaScript Object Notation) es un formato de texto ligero para el intercambio de datos. Algunas de sus características incluyen:
-Es un formato de texto plano y fácil de leer.
-Utiliza una estructura de pares clave-valor para representar datos.
-Utiliza comillas dobles para encerrar las claves y los valores, en caso de ser texto.
-Utiliza comas para separar los pares clave-valor.
-Utiliza corchetes para representar arreglos.
-Utiliza llaves para representar objetos.
-Utiliza valores booleanos, números, cadenas, arreglos y objetos para representar datos.
-Es independiente del lenguaje, ya que se puede utilizar en una variedad de lenguajes de programación.
-Es ampliamente utilizado en aplicaciones web y móviles para transmitir y recibir datos de un servidor.
-Es un estándar abierto y no tiene restricciones de uso ni de licencia.
Es importante mencionar que JSON es un subconjunto de JavaScript y por lo tanto, es una forma de representar objetos y arreglos en JavaScript, pero no es lo mismo que JavaScript. JSON solo puede representar un subconjunto de los valores que se pueden representar en JavaScript.
JSON tiene algunas restricciones de datos que debes tener en cuenta al trabajar con él:
-Solo puede contener pares clave-valor: cada elemento en un objeto JSON debe ser un par clave-valor.
-Las claves deben ser cadenas: las claves en un objeto JSON deben ser cadenas y deben estar encerradas entre comillas dobles.
-Los valores pueden ser de ciertos tipos: los valores en un objeto 
-JSON pueden ser números, cadenas, booleanos, objetos, arreglos o null. 
-No se permiten otros tipos de datos como funciones o fechas.
-No se permite la notación de punto flotante: los números en 
-JSON deben ser enteros o de punto flotante en notación decimal. 
-No se permiten notaciones científicas.
-Las cadenas deben estar encerradas en comillas dobles: las cadenas en JSON deben estar encerradas entre comillas dobles. No se permiten comillas simples.
-No se permite el uso de comentarios: JSON no admite comentarios, así que si necesitas incluir información adicional sobre tus datos, tendrás que utilizar otro medio para hacerlo.
-Las comas son necesarias: cada elemento en un objeto o arreglo.
-JSON debe estar separado por una coma, excepto el último.*/