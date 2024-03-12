//Interfaces
interface IPerson{
    name: string;
    lastname: string;
    age: number;
} 

interface IStudent extends IPerson{
    career:string;
    university:string;
}

const Pepe:IStudent = {
    name: "Pepe",
    lastname: "Pérez",
    age: 25,
    career: "Software Engineer",
    university: "Udemy"
}
//Objects
const personaje:IPerson = {name: 'Tony', lastname: 'Stark', age:52};


console.log(personaje);
console.log(Pepe);
console.log('Edad de Pepe: ', Pepe.age);

export {}