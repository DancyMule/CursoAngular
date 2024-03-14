
console.log('******************************');
console.log('***********OBJECTS************');
console.log('******************************');


interface ICustomer {
    name: string;
    lastname: string;
    email: string;
    adress: {
        description: string;
        city: string;
        country: string;
    };
}

const customer:ICustomer = {
    name: 'Danny',
    lastname: 'Daniel',
    email: 'Danny@gmail.com',
    adress: {
        description: 'Calle 123',
        city: 'Madrid',
        country: 'Spain'
    }
}

//Si bien la siguiente salida de texto puede ser funcional, no es correcto para cuando se tienen grandes cantidades de datos.
/*
console.log('Name: ' + customer.name);
console.log('Lastname:'+ customer.lastname);
console.log('Email:'+ customer.email);
console.log('Adress:');
console.log('           '+ customer.adress.description);
console.log('           '+ customer.adress.country);
console.log('           '+ customer.adress.city);
*/

//La destructucacion consta de acceder a la variables de los objetos mediante lo siguiete
//Lo que se hace con esto es acceder directamente a los atriburos contenidos dentro del objeto customer
const {
    name, 
    lastname, 
    adress:{city, country, description}
} = customer;
// En caso de necesitar una varaible contenida dentro de un arreglo, utilizaremos la sintaxis usada en address (Podemos sacara n cantidad de variables de un objeto)

console.log('Name: '+name);
console.log('Name: '+lastname);
console.log('City: '+city);
console.log('Country: '+country);
console.log('Description: '+description);

console.log('******************************');
console.log('***********ARRAYS************');
console.log('******************************');

const pokemons:string[] =['Piakchu','Charizard','Chikorita'];
console.log(pokemons);
console.log('Pokemon 2: '+pokemons[1]);

//En este caso si usaremos variables nuevas. Cada variable toma el índice del númerod e variable correspondiete
const [pokemon1, pokemon2, pokemon3] = pokemons;

console.log('Pokemon 1: '+pokemon1);
console.log('Pokemon 2: '+pokemon2);
console.log('Pokemon 3: '+pokemon3);

//Si quisieramos acceder directamente a una única posición del arreglo, estamos obligados a colocar la cantidad de "," deseadas para alcanzar el lugar en cuestión
//En este caso, se desea obtener 'Chikorita', con la cantidad de "," es como un incremento en el índice

const [ , , poke3 = 'Dato precargado en un índice lleno', poke4 = 'Dato precargado en un índice vacío', poke5] = pokemons;

console.log('Poke 3: '+poke3);
console.log('Poke 4: '+poke4); //Si precargas un dato default y el índice está vacío llegará este dato precargado
console.log('Poke 5: '+poke5); //Si intentas obtener un índice sin contenido llegará como 'undefinied'


export {}