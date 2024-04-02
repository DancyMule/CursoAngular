// Es un clasificador de tipos según los contenidos de un objeto.

import { ICustomer } from "./utils/customer-util";

  
const array1 = [1, 5, 2, 9, 1];
const array2 = ["A", "B", "C"];


// Creamos dos métodos distintos porque los arreglos son de distintos tipos (number/string)
const getFirstItemString = (array:String[]) =>{
    return array[0];
}

const getFirstItemNumber = (array:number[]) =>{
    return array[0];
}


console.log(getFirstItemNumber(array1));
console.log(getFirstItemString(array2));

// En Angular + TS podemos crear nuestros propio "Tipo" de datos, no es nada más que una etiqueta personalizada para la obtención de datos Any (Cabe destacar que NO USAMOS ANY, solo es una forma de permitir la recepción sin un tipo declarado.).
// La mejor práctica para esto es colocarle la etiquerta T

const getFirstItem = <T>(array:T[]) =>{
    return array[0];
}

// Al pasar el mouse podemos ver que nos devuelve correctamente las cosas.
// Podemos pasarle los tipos usando la etiqueta (De esta forma seremos más declarativos)
// Esto es una excelente solución para opitimizar lineas.
console.log('First Item number: ',<number>getFirstItem(array1));
console.log('First Item string: ',<String>getFirstItem(array2));



interface IResponse<T=void>{
code:string;
message:string;
data?: T;
}

const customer: ICustomer = {
    name: 'Dina',
    lastName: 'Boluarte Garcia',
    email: 'dina@gmail.com',
    address: {description:'Tomas Calle, Jr Ayacucho', city: 'Arequipa', country:'Perú'}
};

const responseObject: IResponse<ICustomer> = {code:'INFO001', message:'Sin errores al procesar', data:customer}

const responseArray: IResponse<ICustomer[]> = {
    code: 'INFO001',
    message: 'Sin errores al procesar',
    data: [customer, customer]
};

const responseOther: IResponse<boolean> = {
    code: 'INFO001',
    message: 'Sin errores al procesar',
    data: false
};

// Para poder volver opcional alguna de las variables esperadas, podemos colocar en el tipo de dato un "=void". Con eso será suficiente para poder no recibir campos
// ¿Por qué no hacerlo solo con comodín (?)? Simplemente no funciona individualmente, seguirá dando error.
// Esto nos evitará tener que crear interfaces para cada situación individual. Con esto optimizaremos código.
const responseOther2: IResponse = {
    code: 'INFO001',
    message: 'Sin errores al procesar'
};

console.log('Response Object: ', responseObject );
console.log('Response Array: ', responseArray );
console.log('Response Other: ', responseOther );
console.log('Response Other2 (Without data necessary): ', responseOther2 );
export {}