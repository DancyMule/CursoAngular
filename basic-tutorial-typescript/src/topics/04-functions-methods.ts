console.log('******************************');
console.log('***********METHODS************');
console.log('******************************');

function showMessage():void{
    console.log('Hola mundo');
}

const greet = (name:string)=>{
    console.log(`Hola ${name}`);
};


showMessage();
greet('Jorgee');




console.log('******************************');
console.log('**********FUNCTIONS***********');
console.log('******************************');


function sum(a:number, b:number){
    return a+b;
}

function rest(a:number, b:number){
    return a-b;
}

console.log('Suma', sum(2,3));
console.log('Resta', rest(sum(2,3),3));




/*Si se requieren multimples entradas, se deben tratar como un objeto*/
/* Ejemplo con una buen práctica*/

interface IPerson{
    name: string;
    lastName:string;
    age: number;    
}

interface IStudent extends IPerson{
    career:string;
    university:string;
    cycle?:number;    
}

const studentOdeth:IStudent={
    name: 'Odeth',
    lastName: 'Nares',
    age: 22,
    career: "Optometry",
    university: "UVAQ",
    cycle: 10
}

const showStudents = (data:IStudent)=>{
    console.log('Nombre: ', data.name);
    console.log('Apellido: ', data.lastName);
    console.log('Edad: ', data.age);
    console.log('Carrera: ', data.career);
    console.log('Universidad: ', data.university);
    console.log('Ciclo: ', data.cycle);     //Normal
    console.log('Ciclo: ', data.cycle!+4);  //Forzar la no aparicion del error (Solo al modificar la variable extraida)
}

showStudents(studentOdeth);

export {}


